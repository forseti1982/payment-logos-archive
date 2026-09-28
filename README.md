<div align="center">

# wallee payment brands

### easy pay any way

**One source for payment marks across terminals, vending, EV charging, kiosks, checkout and apps.**

`developer-ready` · `designer-safe` · `integration-controlled`

</div>

---

## Payment brands

> **wallee presentation tiles.** Every preview below uses the standardized wallee tile layer. Brand verification remains independent; only **verified** entries are approved for new production delivery.

<p>
  <a href="#cards--schemes"><b>Cards & schemes</b></a> ·
  <a href="#wallets"><b>Wallets</b></a> ·
  <a href="#swiss-payment-methods"><b>Swiss methods</b></a> ·
  <a href="#acceptance--infrastructure"><b>Acceptance</b></a> ·
  <a href="#legacy"><b>Legacy</b></a> ·
  <a href="docs/INTEGRATION.md"><b>Integrate</b></a> ·
  <a href="docs/DESIGN.md"><b>Design</b></a>
</p>

### Cards & schemes

| | Brand | Integration ID | Status |
|:--:|---|---|:--:|
| <img src="dist/tiles/svg/american-express.svg" width="112" alt="American Express"> | **American Express** | `american-express` | review |
| <img src="dist/tiles/svg/cartes-bancaires.svg" width="112" alt="Cartes Bancaires"> | **Cartes Bancaires** | `cartes-bancaires` | review |
| <img src="dist/tiles/svg/dankort.svg" width="112" alt="Dankort"> | **Dankort** | `dankort` | review |
| <img src="dist/tiles/svg/diners-club.svg" width="112" alt="Diners Club"> | **Diners Club** | `diners-club` | review |
| <img src="dist/tiles/svg/discover.svg" width="112" alt="Discover"> | **Discover** | `discover` | review |
| <img src="dist/tiles/svg/jcb.svg" width="112" alt="JCB"> | **JCB** | `jcb` | review |
| <img src="dist/tiles/svg/mastercard.svg" width="112" alt="Mastercard"> | **Mastercard** | `mastercard` | review |
| — | **PostFinance Card** | `postfinance-card` | review |
| <img src="dist/tiles/svg/unionpay.svg" width="112" alt="UnionPay"> | **UnionPay** | `unionpay` | review |
| <img src="dist/tiles/svg/v-pay.svg" width="112" alt="V PAY"> | **V PAY** | `v-pay` | review |

### Wallets

| | Brand | Integration ID | Status |
|:--:|---|---|:--:|
| <img src="dist/tiles/svg/apple-pay.svg" width="112" alt="Apple Pay"> | **Apple Pay** | `apple-pay` | review |
| — | **Garmin Pay** | `garmin-pay` | review |
| <img src="dist/tiles/svg/google-pay.svg" width="112" alt="Google Pay"> | **Google Pay** | `google-pay` | review |
| — | **Samsung Wallet** | `samsung-wallet` | review |
| — | **SwatchPAY!** | `swatchpay` | review |
| — | **Xiaomi Pay** | `xiaomi-pay` | review |
| — | **Zepp Pay** | `zepp-pay` | review |

### Swiss payment methods

| Brand | Integration ID | Status |
|---|---|:--:|
| **PostFinance** | `postfinance` | review |
| **PostFinance Pay** | `postfinance-pay` | review |
| **TWINT** | `twint` | review |

These are separate product identities. A corporate PostFinance mark MUST NOT substitute for PostFinance Card or PostFinance Pay.

### Other payment methods

**Current gaps already confirmed for audit:** Alipay+, WeChat Pay and Wero. The historical APM catalogue is also being audited and migrated into stable IDs. New artwork is published only after taxonomy, lifecycle and first-party checks.

### Biometric payment & verification

| Brand / product | Integration ID | Status |
|---|---|:--:|
| **VOLTOX · Smile & Pay** | `voltox-smile-pay` | review |
| **VOLTOX · Age Verification** | `voltox-age-verification` | review |

Smile & Pay is classified as a biometric payment product; Age Verification is an identity/compliance product, not a payment scheme. Official product artwork is required before a production tile is emitted.

### Acceptance & infrastructure

| Brand | Integration ID | Status |
|---|---|:--:|
| **ep2** | `ep2` | review |

ep2 is an acceptance/infrastructure mark, not a card scheme. **Its official production artwork is still a Priority-0 gap.** Click to Pay is also queued here as a distinct checkout acceptance mark.

### Legacy

| | Brand | Integration ID | Status |
|:--:|---|---|:--:|
| <img src="dist/tiles/svg/maestro.svg" width="112" alt="Maestro"> | **Maestro** | `maestro` | legacy |

Legacy entries are retained for compatibility and history but are excluded from the default current catalogue.

### wallee brand & marketing

**Primary compact recognition mark:** the official turquoise wallee signet (`wallee_signet_turqoise.png`, 13,585 × 8,565 RGBA). Use the signet for small UI, machine tiles and compact brand recognition; use the complete wallee wordmark where space permits.

wallee-owned corporate and marketing assets are maintained separately from third-party payment marks. The official wallee download catalogue includes RGB screen logos, CMYK print logos and current terminal imagery. See [Asset gaps →](docs/GAPS.md).

---

## Built for dynamic machines

Partners do not need to resize logos manually. wallee defines **device profiles** and an **availability matrix** so a machine can request the correct approved asset for its context.

```text
brand
  → verified?
  → market
  → channel
  → device profile
  → availability matrix
  → SVG / PNG / WebP / JPG
```

**Default policy: DENY.** A logo is delivered only when both verification and contextual availability allow it.

[Dynamic delivery →](docs/DELIVERY.md) · [Availability matrix →](docs/MATRIX.md) · [Integration contract →](docs/INTEGRATION.md)

---

## wallee tile

Every standardized presentation tile uses the same deterministic visual system:

```text
1 px white outer edge
→ 1 px wallee turquoise #11D9CC
→ white safe field
→ untouched official payment mark
```

The official master artwork is never recolored, stretched or baked into wallee presentation chrome.

[Design specification →](docs/DESIGN.md) · [Production quality →](docs/QUALITY.md)

---

## For developers · designers · integrators

| Developers | Designers | Integrators |
|---|---|---|
| Stable IDs and manifest | Official master artwork | Device profiles |
| Deterministic builds | Brand clearspace | Availability matrix |
| SVG / PNG / WebP / JPG | wallee tile system | Immutable release assets |
| Runtime-safe catalogue | Visual QA | Market/channel controls |

### Repository contract

```text
assets/source/       official masters
assets/legacy/       compatibility assets
registry/            identity + provenance
profiles/            machine/display specifications
config/              delivery policy matrix
dist/raw/            normalized exports
dist/tiles/          wallee presentation assets
dist/manifest.json   runtime catalogue
docs/                technical + design documentation
AGENTS.md             mandatory AI policy
```

---

## Quality gate

**verified** = first-party source + current artwork + intended acceptance usage + technical validation + visual QA.

Anything unresolved stays **review**. Legacy brands remain explicit instead of silently masquerading as current payment products.

[Official sourcing →](docs/SOURCING.md) · [Asset gaps →](docs/GAPS.md) · [Audit rules →](docs/AUDIT.md) · [Architecture →](docs/ARCHITECTURE.md) · [Mandatory AI policy →](AGENTS.md)

---

<div align="center">

### wallee

**easy pay any way**

Payment brand assets with one identity, one policy and one delivery contract.

</div>
