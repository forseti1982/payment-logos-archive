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

function grid(list) {
  const cells = list.map((b) => {
    const img = has(b.id)
      ? `<img src="dist/tiles/svg/${b.id}.svg" width="120" alt="${esc(b.name)}">`
      : `<img src="docs/img/missing-tile.svg" width="120" alt="${esc(b.name)}: Logo fehlt">`;
    return `<td align="center" width="25%">${img}<br><sub><b>${esc(b.name)}</b><br><code>${b.id}</code> · ${origin(b)}</sub></td>`;
  });
  const rows = [];
  for (let i = 0; i < cells.length; i += COLS) {
    const row = cells.slice(i, i + COLS);
    while (row.length < COLS) row.push(`<td width="25%"></td>`);
    rows.push(`<tr>\n${row.join("\n")}\n</tr>`);
  }
  return `<table>\n${rows.join("\n")}\n</table>`;
}

const byGroup = (g) => brands.brands.filter((b) => b.group === g).sort((a, b) => a.name.localeCompare(b.name, "de"));
const total = brands.brands.length;
const withTile = brands.brands.filter((b) => has(b.id)).length;
const firstParty = brands.brands.filter((b) => ["Original", "Website Markeninhaber"].includes(origin(b))).length;

const toc = brands.groups.map((g) => `[${g.title}](#${g.id})`).join(" · ");

const sections = brands.groups.map((g) => {
  const list = byGroup(g.id);
  if (!list.length) return "";
  return `<a id="${g.id}"></a>\n\n## ${g.title}\n\n${grid(list)}\n`;
}).join("\n");

const cell = (t) => esc(t).replace(/\|/g, "\\|");
const pending = brands.brands.filter((b) => b.group !== "generic" && !["Original", "Katalog"].includes(origin(b)))
  .sort((a, b) => a.name.localeCompare(b.name, "de"))
  .map((b) => `| ${cell(b.name)} | ${origin(b)} | ${NEXT[b.id] ?? ""} |`).join("\n");
const catalog = brands.brands.filter((b) => origin(b) === "Katalog")
  .sort((a, b) => a.name.localeCompare(b.name, "de")).map((b) => b.name).join(", ");
const out = `<div align="center">

<img src="assets/wallee/corporate/rgb/wallee-logo-turquoise.svg" width="220" alt="wallee">

# Payment Logos

**Zahlungslogos im wallee-Rahmen für Terminals, Checkout, Portal und Dokumentation**

${withTile} von ${total} Marken mit Kachel · ${firstParty} direkt vom Markeninhaber · Rahmen ${tile.outerWhitePx} px Weiss + ${tile.framePx} px \`${tile.frameColor}\`

${toc}

</div>

---

## So sieht jede Kachel aus

| Ebene | Vorgabe |
|---|---|
| Format | Kartenformat 120 × 80, abgerundete Ecken |
| Aussenkante | ${tile.outerWhitePx} px Weiss |
| Rahmen | ${tile.framePx} px wallee-Türkis \`${tile.frameColor}\`, bei allen Kacheln gleich |
| Logofeld | direkt innerhalb des Rahmens, in der Hintergrundfarbe des Logos statt Weiss, wo das Logo eine eigene Fläche hat |
| Logo | Datei des Markeninhabers, unverändert, Seitenverhältnis erhalten |

## Verwenden

\`\`\`html
<img src="https://raw.githubusercontent.com/forseti1982/payment-logos-archive/master/dist/tiles/svg/twint.svg" width="120" alt="TWINT">
\`\`\`

- Kacheln liegen unter \`dist/tiles/svg/<id>.svg\`, die IDs sind stabil (siehe Tabellen unten).
- Neue oder geänderte Logos: Original nach \`assets/source/\`, Eintrag in \`registry/\`, dann \`npm run build:tiles\` und \`npm run build:readme\`. Regeln in [AGENTS.md](AGENTS.md).

**Herkunft** unter jeder Kachel: *Original* = Datei aus dem Paket des Markeninhabers · *Website Markeninhaber* = Logo von dessen eigener Website · *Übergang* = Bild des Markeninhabers ohne Freigabe, bis ein Original da ist · *von wallee geliefert* · *Katalog* = noch aus dem Datatrans-Katalog, Ersatz ausstehend · *fehlt* = keine Kachel.

${sections}
## Hinweise zur Auswahl

- **Alipay und Alipay+:** Beim Händler ist das Zeichen von Alipay+ vorgeschrieben; ein einzelnes Wallet-Logo wie Alipay nur zusammen mit einem Hinweis auf Alipay+ ([Alipay+ Brand Guidelines](https://docs.alipayplus.com/alipayplus/alipayplus/brand_guidelines_acq/brand_in_store_acq)). Für Terminals und Checkout \`alipay-plus\` verwenden.
- **Visa Electron:** am 13.04.2024 eingestellt, Nachfolger Visa Debit. Keine eigene Kachel; bestehende Connectors mit \`visa\` darstellen und als Legacy kennzeichnen.
- **giropay:** Ende 2024 eingestellt. Kachel nur für bestehende Integrationen.
- **PostFinance:** Logos seit April 2026 im neuen Markenauftritt. PostFinance-Logos in Onlineshops nur zeigen, wenn sich das Angebot erkennbar an Kunden in der Schweiz richtet.

## Offene Punkte

Status aller Einträge: \`review\`, bis die Prüfung nach AGENTS.md abgeschlossen ist. Details je Quelle in [\`registry/official-sources.json\`](registry/official-sources.json).

| Marke | Herkunft | Nächster Schritt |
|---|---|---|
${pending}

**Noch aus dem Datatrans-Katalog** (Original beim Markeninhaber beschaffen): ${catalog}.

---

<sub>Generiert von \`scripts/build-readme.mjs\` aus \`registry/\`. Nicht von Hand ändern.</sub>
`;

fs.writeFileSync(path.join(root, "README.md"), out);
console.log(`README.md: ${total} Marken, ${withTile} Kacheln, ${brands.groups.length} Gruppen.`);
