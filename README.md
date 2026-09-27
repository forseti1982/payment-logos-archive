# Payment Brands

A production-oriented payment-brand asset system for developers, designers and payment integrators.

## Goals
One stable catalogue for dynamically rendering payment marks across terminals, kiosks, checkout UIs, merchant signage, apps and documentation.

### Three layers
- `src/brands/<id>/` — authoritative brand artwork and metadata. Never add wallee styling to these masters.
- `dist/raw/` — normalized exports of official artwork.
- `dist/tiles/` — generated presentation tiles using the wallee frame specification.

Consumers should use `dist/manifest.json` rather than hard-coded filenames.

## Stable identity
Every brand has a permanent lowercase kebab-case ID such as `mastercard`, `apple-pay`, `postfinance-pay` or `ep2`. Display names and artwork may change without changing the integration ID.

## Classification
- `scheme` — payment/card network
- `wallet` — mobile or wearable wallet
- `payment-method` — alternative/account-based payment method
- `acceptance-mark` — infrastructure/acceptance mark such as ep2

A wallet is not automatically a separate acquiring acceptance capability. Metadata distinguishes consumer-facing wallet branding from the underlying acceptance rails.

## Asset states
- `verified` — first-party artwork and intended usage checked
- `review` — not yet safe to present as current
- `legacy` — compatibility/history only
- `retired` — no longer current

Production integrations SHOULD consume only `verified` entries unless legacy compatibility is explicitly required.

## wallee presentation tile
Generated tiles use:
`1 px white outer edge → 1 px #11D9CC frame → white clear field → untouched official mark`.

The frame is presentation chrome. It is never baked into the authoritative master logo.

See `BRAND-SPEC.md`, `docs/INTEGRATION.md` and `dist/manifest.json`.
