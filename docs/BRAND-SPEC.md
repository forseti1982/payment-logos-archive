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
- 2 px wallee turquoise `#11D9CC` frame
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

## Weisser Aussenrand auf dunklem Grund

Der 1 px weisse Aussenrand bleibt auf jedem Hintergrund stehen, auch in einer Dark-Variante. Er trennt die Kachel klar vom Umfeld und hebt den türkisen Rahmen hervor; dieselbe Kachel funktioniert so auf hellem und dunklem Grund (Owner-Entscheid 29.09.2026).

## Barrierefreiheit

Jede Kachel trägt `role="img"` und einen `<title>` mit dem Markennamen, damit Screenreader die Marke ansagen. Beim Einbinden zusätzlich `alt` mit dem Markennamen setzen. Logos selbst werden für Kontrast nie umgefärbt oder vereinfacht.

## Dark-Version

`dist/tiles/svg-dark/` enthält dieselben IDs wie die hellen Kacheln. Rahmen identisch, Logofeld #363636. Logos erscheinen als einfarbig weisse Negativform, in ihrer eigenen Box (z. B. AmEx, TWINT, Klarna, Google Pay) oder, wo keine Dark-Form sinnvoll ist, als helle Kachel (PostFinance, PostFinance Card, SwatchPAY, Rechnung). Das Logo füllt das Feld mit 5 px Rand. Erzeugt mit `npm run build:tiles-dark`; die hellen Kacheln bleiben unverändert.
