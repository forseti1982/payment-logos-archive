<div align="center">

# wallee · payment brands

**easy pay any way**

Production-ready payment brand assets for terminals, kiosks, checkout, apps and merchant integrations.

`#11D9CC` · source-audited · machine-readable · integration-safe

</div>

---

## One catalogue. Every surface.

This repository is the canonical payment-brand asset system for **wallee** integrations. It is designed for three audiences:

| Audience | Use |
|---|---|
| **Developers** | Stable IDs, manifests and deterministic assets for dynamic rendering |
| **Designers** | Authoritative master artwork, clearspace rules and normalized presentation tiles |
| **Integrators** | Verified payment marks with explicit lifecycle, taxonomy and provenance |

> **Production rule:** consume the manifest. Do not hard-code filenames or infer acceptance from a logo.

## Architecture

```text
assets/
  source/          authoritative brand-owner artwork
  legacy/          historical / compatibility artwork
dist/
  raw/             normalized integration assets
  tiles/           generated wallee presentation tiles
  manifest.json    machine-readable production catalogue
registry/
  brands.json      canonical identity + lifecycle registry
  sources.json     first-party provenance
docs/
  DESIGN.md        wallee presentation specification
  INTEGRATION.md   integration contract
  AUDIT.md         brand verification procedure
  ARCHITECTURE.md  repository and data model
AGENTS.md           mandatory rules for AI agents
```

## wallee tile system

All standardized presentation tiles follow one deterministic construction:

```text
absolute edge
└─ 1 px white
   └─ 1 px wallee turquoise #11D9CC
      └─ white safe field
         └─ untouched official brand artwork
```

The turquoise frame is **presentation chrome**, never part of the master logo. Brand-owner clearspace and minimum-size rules always win.

## Trust model

| State | Production default | Meaning |
|---|:---:|---|
| **verified** | ✓ | First-party artwork and intended usage checked |
| **review** | — | Evidence incomplete; do not assume current |
| **legacy** | — | Compatibility/history only |
| **retired** | — | No longer current |

A logo that merely looks correct is **not verified**.

## Taxonomy

`scheme` · `wallet` · `payment-method` · `acceptance-mark`

Consumer branding and acceptance rails are separate concepts. ep2 is treated as an acceptance/infrastructure mark, not as a card scheme.

## Documentation

- **[Integration guide](docs/INTEGRATION.md)** — dynamic consumption and API contract
- **[Design system](docs/DESIGN.md)** — wallee tile geometry and visual rules
- **[Brand audit](docs/AUDIT.md)** — mandatory verification workflow
- **[Architecture](docs/ARCHITECTURE.md)** — data model and repository layers
- **[AI policy](AGENTS.md)** — mandatory instructions for AI contributors

---

<div align="center">

**wallee** · easy pay any way

</div>
