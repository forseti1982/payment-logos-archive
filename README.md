# Payment Brands

A curated, source-audited payment-brand library for **wallee**.

> This repository is independent. It is not a mirror of another PSP's asset library and third-party logo collections are never treated as authoritative sources.

## Architecture

```text
assets/
  source/       # untouched official master artwork
  legacy/       # historical compatibility only
dist/
  raw/          # normalized exports without wallee presentation
  tiles/        # generated wallee presentation tiles
registry/
  brands.json   # canonical brand registry
  sources.json  # first-party provenance and audit evidence
scripts/
  validate.mjs  # structural/brand-policy checks
docs/
  BRAND-SPEC.md # normative design and usage rules
  GALLERY.md    # human visual QA
```

## Non-negotiable rules

**Official master artwork is immutable.** Never redraw, recolor, stretch, crop or add a wallee border to files under `assets/source`.

**Presentation is generated.** wallee tiles are derived outputs:

`1 px white outer edge → 1 px #11D9CC frame → white safe area → official artwork`

Brand-owner clearspace/minimum-size/background requirements override attempts to make marks visually larger.

**Acceptance ≠ logo availability.** A corporate logo is not automatically a merchant acceptance mark. The registry records whether storefront/POS usage is actually verified.

## Categories

| Category | Meaning |
|---|---|
| `scheme` | Card/payment network |
| `wallet` | Mobile or wearable wallet |
| `apm` | Alternative/local payment method |
| `acceptance` | Infrastructure/acceptance mark, e.g. ep2 |

## Status model

- `verified` — current first-party artwork and intended usage checked
- `review` — requires current first-party verification
- `legacy` — retained for historical/compatibility purposes
- `retired` — no longer presented as current acceptance

The repository intentionally starts conservative: migrated brands remain `review` until individually audited.
