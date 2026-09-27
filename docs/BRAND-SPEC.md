# Brand Asset Specification

## 1. Separation of concerns

There are three distinct layers:

1. **Source** — official artwork exactly as supplied by the brand owner.
2. **Normalized export** — technically normalized SVG/PNG while preserving visual identity.
3. **wallee tile** — a presentation container used for consistent grids, stickers and UI.

Never bake layer 3 into layer 1.

## 2. wallee tile

The canonical tile uses a fixed credit-card-like canvas. Exact pixel dimensions may be exported at multiple resolutions, but the aspect ratio is invariant.

From the absolute image edge inward:

- 1 px white perimeter
- 1 px wallee turquoise `#11D9CC` frame
- white safe area
- centered official artwork

Corners are rounded at the container level. The brand artwork itself is never clipped by the radius.

## 3. Optical sizing

Equal mathematical bounding boxes do not produce equal perceived size. Therefore:
- preserve every mark's aspect ratio;
- respect mandatory clearspace first;
- use an optical-size class where necessary;
- never stretch narrow wordmarks to imitate wide card marks.

## 4. Provenance

Every production brand requires:
- first-party source URL;
- source asset or brand-guideline reference;
- date checked;
- artwork/version note;
- acceptance-use status;
- reviewer note where ambiguous.

Third-party aggregators may help discover a source but never qualify a brand as verified.

## 5. Naming

IDs are lowercase kebab-case and describe the current brand, not a vendor filename. Historical variants use explicit aliases/legacy metadata rather than ambiguous names such as `-alt`.

## 6. Taxonomy

ep2 is an acceptance/infrastructure mark, not a card scheme.
Wallets are not automatically distinct acquiring acceptance methods merely because they have consumer-facing logos.
PostFinance corporate branding, PostFinance Card and PostFinance Pay must not be conflated.
