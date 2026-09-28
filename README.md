<div align="center">

# wallee payment brands

### easy pay any way

**One source for payment marks across terminals, vending, EV charging, kiosks, checkout and apps.**

`developer-ready` · `designer-safe` · `integration-controlled`

</div>

---

## Payment brands

> **2026 audit in progress.** Existing artwork remains visible for migration and review. Only entries marked **verified** are approved for new production delivery.

<p>
  <a href="#cards--schemes"><b>Cards & schemes</b></a> ·
  <a href="#wallets"><b>Wallets</b></a> ·
  <a href="#payment-methods"><b>Payment methods</b></a> ·
  <a href="#acceptance-marks"><b>Acceptance marks</b></a> ·
  <a href="docs/INTEGRATION.md"><b>Integrate</b></a> ·
  <a href="docs/DESIGN.md"><b>Design</b></a>
</p>

### Cards & schemes

| | Brand | Integration ID | Status |
|:--:|---|---|:--:|
| <img src="assets/cards/mastercard.svg" width="112" alt="Mastercard"> | **Mastercard** | `mastercard` | review |
| <img src="assets/cards/visa.svg" width="112" alt="Visa"> | **Visa** | `visa` | review |
| <img src="assets/cards/american-express.svg" width="112" alt="American Express"> | **American Express** | `american-express` | review |
| <img src="assets/cards/jcb.svg" width="112" alt="JCB"> | **JCB** | `jcb` | review |
| <img src="assets/cards/unionpay.svg" width="112" alt="UnionPay"> | **UnionPay** | `unionpay` | review |
| <img src="assets/cards/discover.svg" width="112" alt="Discover"> | **Discover** | `discover` | review |
| <img src="assets/cards/diners.svg" width="112" alt="Diners Club"> | **Diners Club** | `diners-club` | review |
| <img src="assets/cards/cartes-bancaires.svg" width="112" alt="Cartes Bancaires"> | **Cartes Bancaires** | `cartes-bancaires` | review |
| <img src="assets/cards/dankort.svg" width="112" alt="Dankort"> | **Dankort** | `dankort` | review |
| <img src="assets/cards/maestro.svg" width="112" alt="Maestro"> | **Maestro** | `maestro` | legacy |
| <img src="assets/cards/vpay.svg" width="112" alt="V PAY"> | **V PAY** | `v-pay` | review |

### Wallets

| | Brand | Integration ID | Status |
|:--:|---|---|:--:|
| <img src="assets/wallets/apple-pay.svg" width="112" alt="Apple Pay"> | **Apple Pay** | `apple-pay` | review |
| <img src="assets/wallets/google-pay.svg" width="112" alt="Google Pay"> | **Google Pay** | `google-pay` | review |

Samsung Wallet, Garmin Pay, SwatchPAY!, Xiaomi Pay and Zepp Pay are tracked in the new registry and will appear here only after the required first-party artwork and usage audit.

### Payment methods

The APM catalogue is being migrated from the historical asset set into stable integration IDs. **PostFinance, PostFinance Card and PostFinance Pay are audited as distinct products.**

See the [brand audit procedure](docs/AUDIT.md) for the publication gate.

### Acceptance marks

**ep2** is modeled as an acceptance/infrastructure mark — not as a card scheme. Its current official artwork will be published after first-party verification.

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

[Design specification →](docs/DESIGN.md)

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

[Audit rules →](docs/AUDIT.md) · [Architecture →](docs/ARCHITECTURE.md) · [Mandatory AI policy →](AGENTS.md)

---

<div align="center">

### wallee

**easy pay any way**

Payment brand assets with one identity, one policy and one delivery contract.

</div>
