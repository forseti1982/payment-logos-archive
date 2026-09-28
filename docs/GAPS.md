# Asset gap register

This register separates **known missing brands** from **publishable production artwork**. A brand may be listed here without an approved logo.

## Priority 0 — Swiss acceptance / wallee identity

| Asset | Class | State | Required action |
|---|---|---|---|
| ep2 | acceptance / infrastructure | **verified** | official original/negative/grayscale vector masters imported; wallee tile generated |
| wallee Logo RGB | wallee corporate | **verified** | official RGB package supplied; SVG wordmark and high-resolution signet registered |
| wallee Logo CMYK | wallee corporate | source identified | import official PDF package |
| easy pay any way | wallee corporate claim | review | define approved lockups and standalone usage |
| wallee terminal views | wallee marketing | source identified | import current official media package |
| PostFinance | corporate/payment context | artwork missing | use current official PostFinance partner asset |
| PostFinance Card | scheme/payment method | artwork missing | use dedicated official mark |
| PostFinance Pay | payment method | artwork missing | use dedicated official mark |
| TWINT | payment method | audit required | verify current merchant mark |

## Priority 1 — wearable wallets

| Asset | State | Notes |
|---|---|---|
| Garmin Pay | controlled source | Garmin Pay official assets require request/access; do not redraw |
| SwatchPAY! | first-party presence confirmed | obtain distributable official artwork |
| Samsung Wallet | audit required | verify current merchant-facing naming/mark |
| Xiaomi Pay | audit required | verify market/device/card applicability |
| Zepp Pay | audit required | verify market/device/card applicability |

## Priority 2 — current wallee / European methods

| Asset | State |
|---|---|
| Wero | wallee 2026 support confirmed; artwork audit required |
| Alipay+ | wallee 2026 support confirmed; artwork audit required |
| WeChat Pay | wallee 2026 support confirmed; artwork audit required |
| Click to Pay | wallee page confirms checkout mark; official EMVCo/Visa usage audit required |

## wallee-owned library

wallee-owned assets MUST live outside third-party payment marks:

```text
assets/wallee/
  corporate/
    rgb/
    cmyk/
    lockups/
  products/
  terminals/
  marketing/
  partner/
```

The library should cover:
- corporate wordmark variants;
- approved claim lockups;
- product/solution logos where an official mark exists;
- terminal packshots and views;
- partner/reseller material;
- acceptance/merchant marketing material;
- event/stadium material where distribution rights allow;
- RGB screen exports and CMYK print masters.

Do not invent a wallee product logo merely because a product name exists. Product brands enter the library only when an official first-party artwork file exists.

## Publication gate

Presence in this document or the registry is **not** approval. Production publication requires first-party artwork, provenance, usage validation, technical validation, generated wallee tile where applicable, and human visual QA.
