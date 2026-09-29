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
function wall(list, variant = "light") {
  const dir = variant === "dark" ? "dist/tiles/svg-dark" : "dist/tiles/svg";
  return list.map((b) => {
    const file = `${dir}/${b.id}.svg`;
    const src = fs.existsSync(path.join(root, file)) ? file : "docs/img/missing-tile.svg";
    const aids = (b.ep2Aids ?? []).filter((a) => a.active).map((a) => a.aid);
    const label = `${b.name} · ${b.id}` + (aids.length ? ` · AID ${aids.join(", ")}` : "");
    return `<img src="${src}" width="96" alt="${esc(b.name)}" title="${esc(label)}">`;
  }).join("\n");
}

const cell = (t) => esc(t).replace(/\|/g, "\\|");
const byGroup = (g) => brands.brands.filter((b) => b.group === g).sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99));
const total = brands.brands.length;
const withTile = brands.brands.filter((b) => has(b.id)).length;
const firstParty = brands.brands.filter((b) => ["Original", "Website Markeninhaber"].includes(origin(b))).length;

const toc = brands.groups.map((g) => `[${g.title}](#${g.id})`).join(" · ");

const section = (variant) => brands.groups.map((g) => {
  const list = byGroup(g.id).filter((b) => has(b.id));
  if (!list.length) return "";
  return `#### ${g.title}\n\n<p>\n${wall(list, variant)}\n</p>\n`;
}).join("\n");
const sections = `## Hell\n\n${section("light")}\n## Dunkel\n\n${section("dark")}`;

// Visible AID table: every brand with at least one active Application Identifier.
const aidRows = brands.groups.flatMap((g) => byGroup(g.id)).filter((b) => (b.ep2Aids ?? []).some((a) => a.active))
  .map((b) => {
    const aids = b.ep2Aids.filter((a) => a.active);
    const tl = has(b.id) ? `<img src="dist/tiles/svg/${b.id}.svg" width="60" alt="${esc(b.name)}">` : "Logo fehlt";
    const td = has(b.id) ? `<img src="dist/tiles/svg-dark/${b.id}.svg" width="60" alt="${esc(b.name)} dunkel">` : "";
    return `| ${tl} | ${td} | ${cell(b.name)}<br>\`${b.id}\` | ${aids.map((a) => `\`${a.aid}\``).join("<br>")} | ${aids.map((a) => cell(a.description)).join("<br>")} |`;
  }).join("\n");
const aidTable = `## AID (Application Identifier)\n\nZuordnung der aktiven ep2-AIDs zu Marke und Kachel. Maschinenlesbar in \`registry/brands.json\` (\`ep2Aids\`), Quellen in [docs/AID-QUELLEN.md](docs/AID-QUELLEN.md).\n\n| Hell | Dunkel | Marke / ID | AID | Bezeichnung |\n|---|---|---|---|---|\n${aidRows}\n`;

// ep2 AIDs (active only) from the ep2 ID master, one per line.
const aidCell = (b) => (b.ep2Aids ?? []).filter((a) => a.active).map((a) => `\`${a.aid}\``).join("<br>");
const ref = brands.groups.flatMap((g) => byGroup(g.id).map((b) =>
  `| ${cell(b.name)} | \`${b.id}\` | ${g.short ?? g.title} | ${aidCell(b)} |`)).join("\n");

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
${aidTable}
## Verwenden

Hell in \`dist/tiles/svg/\`, dunkel in \`dist/tiles/svg-dark/\`, gleiche Dateinamen. Mit \`<picture>\` wechselt die Kachel automatisch mit dem Farbschema:

\`\`\`html
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/forseti1982/payment-logos-archive/master/dist/tiles/svg-dark/twint.svg">
  <img src="https://raw.githubusercontent.com/forseti1982/payment-logos-archive/master/dist/tiles/svg/twint.svg" width="120" alt="TWINT">
</picture>
\`\`\`

<details>
<summary>Alle IDs und AIDs (Application Identifier)</summary>

Quellen und Hinweise zu den AIDs: [docs/AID-QUELLEN.md](docs/AID-QUELLEN.md).

| Marke | ID | Gruppe | AID (Application Identifier, ep2, aktiv) |
|---|---|---|---|
${ref}

</details>

<br>
<p align="right"><img src="assets/wallee/corporate/rgb/wallee-logo-turquoise.svg" width="56" alt="wallee"></p>
`;

fs.writeFileSync(path.join(root, "README.md"), out);
console.log(`README.md: ${total} Marken, ${withTile} Kacheln, ${brands.groups.length} Gruppen.`);
