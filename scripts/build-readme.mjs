// Generates README.md from registry/brands.json and registry/tile-sources.json.
// Never edit README.md by hand: change the registry and run `npm run build:readme`.

import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const read = (p) => JSON.parse(fs.readFileSync(path.join(root, p), "utf8"));
const brands = read("registry/brands.json");
const tiles = read("registry/tile-sources.json").tiles;
const tile = brands.presentation.tile;

const COLS = 4;
const has = (id) => fs.existsSync(path.join(root, "dist/tiles/svg", `${id}.svg`)) && tiles[id]?.mode !== "placeholder";
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

// What the tile is made from, in plain words.
function origin(b) {
  if (!has(b.id)) return "fehlt";
  const s = b.sourceStatus ?? "";
  const src = tiles[b.id]?.source ?? "";
  if (src.includes("/datatrans/")) return "Katalog";
  if (b.id === "ep2" || s === "official-retrieved" || s === "verified-supplied-master") return "Original";
  if (s === "brand-owner-website") return "Website Markeninhaber";
  if (s.includes("web-image")) return "Übergang";
  if (s.includes("user-supplied")) return "von wallee geliefert";
  return "Original";
}

// Next step per brand that has no original yet (German, short).
const NEXT = {
  "garmin-pay": "Assets über «Request Assets» bei Garmin anfragen (Vertraulichkeitsbedingungen)",
  "samsung-wallet": "Offizielles Toolkit von Samsung herunterladen (ca. 38 MB)",
  "xiaomi-pay": "Keine offizielle Quelle gefunden",
  "zepp-pay": "Keine offizielle Quelle gefunden",
  "postfinance": "Paket liegt vor (EPS); Kachel noch nicht angelegt",
  "postfinance-efinance": "Altes Logo zurückgezogen; Produktstatus prüfen",
  "swatchpay": "Webbild von swatch.com; freigegebenes Original bei Swatch anfragen",
  "twint": "Logo von twint.ch; Merchant-Logo im TWINT Brand Portal (Login) beziehen",
  "wechat-pay": "Logo der WeChat Pay Open Platform; Richtlinien 2017 prüfen",
  "click-to-pay": "Icon von emvco.com; lizenzierte Datei über EMVCo-Lizenzvertrag",
  "voltox-smile-pay": "Firmenlogo als PNG; Vektor und Produktlogo bei VOLTOX anfragen",
  "voltox-age-verification": "Firmenlogo als PNG; Vektor und Produktlogo bei VOLTOX anfragen",
};

// Logo wall: tiles flow inline, no table borders, name on hover (title).
function wall(list) {
  return list.map((b) => {
    const src = has(b.id) ? `dist/tiles/svg/${b.id}.svg` : "docs/img/missing-tile.svg";
    const label = has(b.id) ? `${b.name} · ${b.id}` : `${b.name} · Logo fehlt`;
    return `<img src="${src}" width="96" alt="${esc(b.name)}" title="${esc(label)}">`;
  }).join("\n");
}

const cell = (t) => esc(t).replace(/\|/g, "\\|");
const byGroup = (g) => brands.brands.filter((b) => b.group === g).sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99));
const total = brands.brands.length;
const withTile = brands.brands.filter((b) => has(b.id)).length;
const firstParty = brands.brands.filter((b) => ["Original", "Website Markeninhaber"].includes(origin(b))).length;

const toc = brands.groups.map((g) => `[${g.title}](#${g.id})`).join(" · ");

const sections = brands.groups.map((g) => {
  const list = byGroup(g.id);
  if (!list.length) return "";
  return `### ${g.title}\n\n<p>\n${wall(list)}\n</p>\n`;
}).join("\n");

const ref = brands.groups.flatMap((g) => byGroup(g.id).map((b) =>
  `| ${cell(b.name)} | \`${b.id}\` | ${g.short ?? g.title} | ${origin(b)} |`)).join("\n");

const pending = brands.brands.filter((b) => b.group !== "generic" && !["Original", "Katalog"].includes(origin(b)))
  .sort((a, b) => a.name.localeCompare(b.name, "de"))
  .map((b) => `| ${cell(b.name)} | ${origin(b)} | ${NEXT[b.id] ?? ""} |`).join("\n");
const catalog = brands.brands.filter((b) => origin(b) === "Katalog")
  .sort((a, b) => a.name.localeCompare(b.name, "de")).map((b) => b.name).join(", ");
const enc = (t) => encodeURIComponent(t).replace(/-/g, "--");
const badge = (l, v, c = "11D9CC") => `<img src="https://img.shields.io/badge/${enc(l)}-${enc(v)}-${c}?style=flat-square" alt="${esc(l)}: ${esc(v)}">`;

const out = `<p align="center">
<img src="assets/wallee/corporate/rgb/wallee-logo-turquoise.svg" width="160" alt="wallee">
</p>

<h1 align="center">Payment Logos</h1>

<p align="center">Zahlungslogos im wallee-Rahmen für Terminal, Checkout, Portal und Doku.</p>

<p align="center">
${badge("Kacheln", `${withTile}/${total}`)}
${badge("vom Markeninhaber", String(firstParty), "0B8F86")}
${badge("Rahmen", `${tile.framePx} px ${tile.frameColor}`)}
${badge("Status", "review", "8A9096")}
</p>

${sections}
<sub>Name und ID erscheinen beim Überfahren einer Kachel. Gestrichelte Kacheln: Logo fehlt noch.</sub>

## Verwenden

\`\`\`html
<img src="https://raw.githubusercontent.com/forseti1982/payment-logos-archive/master/dist/tiles/svg/twint.svg" width="120" alt="TWINT">
\`\`\`

Kacheln unter \`dist/tiles/svg/<id>.svg\`, IDs sind stabil. Jede Kachel: 120 × 80, ${tile.outerWhitePx} px Weiss, ${tile.framePx} px \`${tile.frameColor}\`, Logo des Markeninhabers unverändert auf seiner eigenen Hintergrundfarbe. Neue Logos: Original nach \`assets/source/\`, Eintrag in \`registry/\`, dann \`npm run build:tiles && npm run build:readme\`. Regeln in [AGENTS.md](AGENTS.md).

## Hinweise

- **Alipay+** ist beim Händler Pflicht; Alipay einzeln nur mit Alipay+-Hinweis ([Richtlinien](https://docs.alipayplus.com/alipayplus/alipayplus/brand_guidelines_acq/brand_in_store_acq)).
- **Visa Electron** seit 13.04.2024 eingestellt: mit \`visa\` darstellen, als Legacy kennzeichnen.
- **giropay** Ende 2024 eingestellt, nur für bestehende Integrationen.
- **PostFinance** seit April 2026 im neuen Markenauftritt; in Onlineshops nur für Kunden in der Schweiz zeigen.

<details>
<summary><b>Alle Marken: ID, Gruppe, Herkunft</b></summary>

| Marke | ID | Gruppe | Herkunft |
|---|---|---|---|
${ref}

*Original* = Paket des Markeninhabers · *Website Markeninhaber* · *Übergang* = ohne Freigabe · *von wallee geliefert* · *Katalog* = Datatrans-Katalog, Ersatz ausstehend · *fehlt*

</details>

<details>
<summary><b>Offene Punkte (${brands.brands.filter((b) => b.group !== "generic" && origin(b) !== "Original").length})</b></summary>

| Marke | Herkunft | Nächster Schritt |
|---|---|---|
${pending}

**Noch aus dem Datatrans-Katalog:** ${catalog}.

Details je Quelle: [\`registry/official-sources.json\`](registry/official-sources.json)

</details>

<sub>Generiert von \`scripts/build-readme.mjs\` aus \`registry/\`. Nicht von Hand ändern.</sub>
`;

fs.writeFileSync(path.join(root, "README.md"), out);
console.log(`README.md: ${total} Marken, ${withTile} Kacheln, ${brands.groups.length} Gruppen.`);
