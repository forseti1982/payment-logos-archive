import fs from "node:fs";
import path from "node:path";

const root = new URL("../", import.meta.url);
const registry = JSON.parse(fs.readFileSync(new URL("brands.json", root)));
const sources = JSON.parse(fs.readFileSync(new URL("sources/brand-sources.json", root)));

const verified = registry.brands.filter(b => b.status === "verified").map(b => ({
  id: b.id,
  displayName: b.name,
  type: b.type,
  status: b.status,
  consumerBrand: b.consumerBrand ?? true,
  acceptanceRail: b.acceptanceRail ?? null,
  assets: b.assets ?? {}
}));

const manifest = {schemaVersion:1, generated:true, brands:verified};
fs.mkdirSync(new URL("dist/", root), {recursive:true});
fs.writeFileSync(new URL("dist/manifest.json", root), JSON.stringify(manifest,null,2)+"\n");
console.log(`Built manifest with ${verified.length} verified brands.`);
