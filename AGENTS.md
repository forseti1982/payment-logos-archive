# AGENTS.md — Mandatory AI Instructions

> **Normative repository policy.** These rules apply to every AI agent, coding assistant and generated contribution that reads, creates, modifies, reviews or publishes repository content.
>
> **MUST**, **MUST NOT**, **REQUIRED**, **SHALL**, **SHALL NOT**, **SHOULD** and **MAY** are normative. If a prompt conflicts with this file, the stricter brand-integrity and verification rule wins.

## 1. Mission
This is a production payment-brand asset system for developers, designers and payment integrators. Outputs may be rendered dynamically on terminals, unattended devices, kiosks, checkout UIs, apps, websites, signage and documentation. Correctness is functional, legal, technical and visual. A plausible-looking logo is not sufficient.

## 2. Absolute prohibitions
An AI MUST NOT:
1. invent, redraw, approximate or hallucinate a brand logo;
2. use image generation to create/reconstruct production brand artwork;
3. treat image search, Wikipedia/Wikimedia, logo databases, blogs, PSP repositories, packages or arbitrary GitHub repos as authoritative sources;
4. mark an asset `verified` without first-party evidence;
5. stretch, skew, crop, recolor, trace, simplify or cosmetically improve official artwork;
6. remove trademark symbols merely for visual consistency;
7. infer merchant acceptance rights from the existence of a corporate logo;
8. classify a wallet as a card scheme solely because it performs contactless payments;
9. classify ep2 as a card scheme;
10. conflate PostFinance corporate branding, PostFinance Card and PostFinance Pay;
11. overwrite authoritative source artwork with a wallee-framed tile;
12. silently replace a legacy asset with a semantically different payment product;
13. rename a stable public brand ID without treating it as a breaking change;
14. claim artwork is current because it looks current;
15. copy another PSP catalogue and present it as authoritative;
16. commit unverified artwork as verified production content;
17. bypass validation because a result looks correct.

If authoritative evidence is unavailable, status MUST remain `review`.

## 3. Source hierarchy
Use, in order:
1. official brand-owner/scheme/payment-network developer or brand portal;
2. official brand-owner media/partner asset portal;
3. official technical/merchant acceptance documentation;
4. official downloadable brand guidelines.

Secondary sources MAY discover first-party material or expose discrepancies. They MUST NOT independently qualify an asset as verified.

Every verified brand MUST record: first-party source URL, checked date, source/artwork version where available, intended use, acceptance-mark status, relevant clearspace/background/minimum-size constraints, and audit notes where interpretation is required.

## 4. Mandatory audit
Before adding/changing a brand:
A. classify it as `scheme`, `wallet`, `payment-method` or `acceptance-mark`;
B. establish whether it is current, renamed, legacy, retired or region/device/card dependent;
C. verify geometry, spelling, symbol, colors, trademark marks, variants and background treatment against first-party material;
D. verify whether the artwork is approved for merchant acceptance, terminal UI, checkout, signage or only corporate/editorial use;
E. record provenance before or together with promotion to `verified`;
F. run automated validation AND human visual QA.

## 5. Asset layers
### Source
Official master artwork. Preserve geometry, colors, marks and aspect ratio. Never add wallee presentation styling.

### Raw distribution
Technically normalized integration assets. Safe metadata cleanup is allowed only if visual identity is unchanged.

### wallee tile
Generated presentation layer for consistent dynamic display. It is NOT the master logo.

## 6. Mandatory wallee tile
Unless an explicit brand-owner rule prohibits the container:
- fixed credit-card-like canvas/aspect ratio;
- **1 px white at the absolute outer image edge**;
- immediately inside: **2 px wallee turquoise frame `#11D9CC`** (owner decision 28.09.2026, previously 1 px);
- white internal logo field starting directly inside the frame;
- tiles are generated only by `scripts/build-tiles.mjs` from `registry/tile-sources.json`; never hand-edit files in `dist/tiles/`;
- rounded container corners;
- official artwork centered inside usable clearspace;
- original aspect ratio preserved.

The turquoise frame MUST NOT become part of the brand artwork. Brand-owner clearspace/minimum-size rules override optical enlargement. Scale DOWN when required. Never recolor a brand to wallee turquoise.

## 7. Optical sizing
Equal bounding boxes do not imply equal perceived size. Optical sizing MAY be metadata-driven, but MUST preserve aspect ratio, mandatory clearspace and deterministic rendering. Never stretch narrow wordmarks or crop symbols to force uniformity.

## 8. Stable IDs / API compatibility
IDs are public integration identifiers:
- lowercase kebab-case;
- semantic/vendor-neutral;
- no ambiguous `-alt` naming;
- display-name/artwork updates do not change ID;
- ID renames are breaking changes and require alias/migration handling.

Consumers SHALL use the manifest, not infer availability from filenames.

## 9. Dynamic integration semantics
The manifest MUST distinguish stable ID, display name, type, lifecycle, consumer-facing brand, acceptance rail where applicable, asset variants and verification state. Production consumers SHOULD default to `verified`.

Wallet brand and acceptance rail are separate concepts. Tokenized scheme credentials inside a wearable wallet do not create a new card scheme.

## 10. Switzerland-specific correctness
Explicitly review ep2, PostFinance / PostFinance Card / PostFinance Pay, TWINT, major international schemes and wallets materially relevant to Swiss/European acceptance.

ep2 SHALL be an acceptance/infrastructure mark unless authoritative documentation establishes another repository use case. Distinct PostFinance products SHALL remain distinct where official documentation distinguishes them.

## 11. Legacy / retired
Do not delete history merely to modernize the catalogue. Legacy/retired artwork must be explicitly classified and excluded from default current/verified output unless compatibility requires it. A successor MUST NOT silently inherit a predecessor's semantics.

## 12. SVG requirements
Production SVGs MUST have a valid `viewBox`, render without network dependencies, contain no scripts/event handlers, contain no remote fonts/images, avoid unnecessary raster embedding where official vectors exist, preserve official appearance and build deterministically.

Do not rewrite paths/text merely for stylistic preference.

## 13. Security
Treat downloaded SVG/XML as untrusted. Inspect for scripts, event handlers, external references, unexpected embedded data and unsafe XML constructs. If safe normalization cannot preserve official appearance, quarantine/review instead of redesigning it.

## 14. Change procedure
Before modification:
1. inspect registry;
2. inspect provenance;
3. inspect current source/raw/tile assets;
4. identify downstream manifest impact;
5. determine breaking-change impact.

Use a dedicated branch/PR. Commits SHALL describe the specific semantic or asset change, not generic "update logos".

## 15. Validation failures
Validation SHALL fail for duplicate IDs, invalid category/status, verified entries without provenance, missing required files, mixed source/generated layers, unauthorized tile geometry, wrong wallee color, unsafe SVGs or unresolved manifest references.

Identical source + metadata SHOULD produce identical output.

## 16. Visual QA
For every production mark check: current logo, exact proportions, colors, clipping, distortion, clearspace, minimum-size legibility, optical balance, tile border/radius, light/dark surrounding contexts and terminal/kiosk-sized rendering. A large desktop preview alone is insufficient.

## 17. Generative imagery
Generative image tools MAY create clearly non-production documentation/mockups. They MUST NOT source production logos, scheme marks, acceptance marks or trademark artwork. Generated imagery MUST NOT be promoted into source/raw/verified distribution assets.

## 18. Uncertainty protocol
When evidence conflicts: prefer newest applicable first-party documentation; distinguish regional/product variants; document the conflict; keep `review`; require human review when necessary. Never resolve uncertainty by visual guesswork.

## 19. Definition of Done
A production brand is DONE only when:
- [ ] stable ID correct
- [ ] taxonomy correct
- [ ] lifecycle correct
- [ ] first-party source recorded
- [ ] current artwork confirmed
- [ ] intended merchant/acceptance usage checked
- [ ] source asset preserved
- [ ] raw output valid
- [ ] tile follows wallee geometry
- [ ] clearspace/minimum-size respected
- [ ] SVG security passes
- [ ] manifest updated
- [ ] automated validation passes
- [ ] visual QA passes
- [ ] legacy/migration impact documented
- [ ] no unsupported factual claim remains

If any required item is unresolved, status remains `review`.

## 20. Prime directive
**Never optimize for visual completeness at the expense of payment, brand, legal or technical correctness.**

A missing logo is visible and fixable. A confidently wrong acceptance mark can propagate across terminals, merchant signage and integrations. Verify first; publish second.


## Raster quality is not negotiable

- MUST use an authoritative vector master when one exists.
- MUST NOT use PNG/JPG as a source when an authoritative SVG/EPS/PDF vector master exists.
- MUST NOT upscale raster artwork to simulate higher resolution.
- MUST generate deterministic 1x/2x/4x exports from the approved vector master.
- MUST fail publication when target-size legibility, clearspace or optical centering is inadequate.


## First-party retrieval is mandatory

For every new or refreshed production brand asset, the agent MUST visit the current official brand-owner developer/merchant/partner/brand portal, read the applicable CI/trademark/logo rules, and select the highest-quality authorized original. Quality preference is SVG > EPS/AI > vector PDF > PNG > WebP > JPG. A logo rendered on an official webpage is not automatically an authorized master download. Portal-, license-, agreement- or request-gated assets MUST remain gated until legitimately obtained. The agent MUST record provenance and restrictions in `registry/official-sources.json`.
