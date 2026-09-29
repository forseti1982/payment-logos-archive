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
  const list = byGroup(g.id).filter((b) => has(b.id));
  if (!list.length) return "";
  return `### ${g.title}\n\n<p>\n${wall(list)}\n</p>\n`;
}).join("\n");

const ref = brands.groups.flatMap((g) => byGroup(g.id).map((b) =>
  `| ${cell(b.name)} | \`${b.id}\` | ${g.short ?? g.title} |`)).join("\n");

const pending = brands.brands.filter((b) => b.group !== "generic" && !["Original", "Katalog"].includes(origin(b)))
  .sort((a, b) => a.name.localeCompare(b.name, "de"))
  .map((b) => `| ${cell(b.name)} | ${origin(b)} | ${NEXT[b.id] ?? ""} |`).join("\n");
const catalog = brands.brands.filter((b) => origin(b) === "Katalog")
  .sort((a, b) => a.name.localeCompare(b.name, "de")).map((b) => b.name).join(", ");
const enc = (t) => encodeURIComponent(t).replace(/-/g, "--");
const badge = (l, v, c = "11D9CC") => `<img src="https://img.shields.io/badge/${enc(l)}-${enc(v)}-${c}?style=flat-square" alt="${esc(l)}: ${esc(v)}">`;

const out = `# Payment Logos

Zahlungslogos als einheitliche Kacheln für Terminal, Checkout und Portal.

${sections}
## Verwenden

\`\`\`html
<img src="https://raw.githubusercontent.com/forseti1982/payment-logos-archive/master/dist/tiles/svg/twint.svg" width="120" alt="TWINT">
\`\`\`

<details>
<summary>Alle IDs</summary>

| Marke | ID | Gruppe |
|---|---|---|
${ref}

</details>

<br>
<p align="right"><img src="assets/wallee/corporate/rgb/wallee-logo-turquoise.svg" width="56" alt="wallee"></p>
`;

fs.writeFileSync(path.join(root, "README.md"), out);
console.log(`README.md: ${total} Marken, ${withTile} Kacheln, ${brands.groups.length} Gruppen.`);
