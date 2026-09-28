# Production artwork quality standard

## Canonical source

1. Prefer an official SVG/EPS/PDF vector master.
2. Never upscale a low-resolution PNG/JPG and call it high resolution.
3. Never trace, redraw or generatively recreate a trademark.
4. Raster-only official artwork remains raster-only and its native resolution is recorded.
5. Source provenance and retrieval date are mandatory.

## Distribution quality

For every approved vector brand generate:
- SVG: canonical scalable distribution asset;
- PNG 1x: 120 × 80 px tile;
- PNG 2x: 240 × 160 px tile;
- PNG 4x: 480 × 320 px tile;
- WebP equivalents where supported;
- JPG only for white-background compatibility targets.

The SVG remains resolution-independent. Raster dimensions are deterministic device exports, not the source of truth.

## Visibility

The standard tile is 120 × 80 (3:2), matching the existing payment-card presentation system.

Layer order:
1. absolute outer 1 px white edge;
2. 2 px #11D9CC wallee frame;
3. white safe field;
4. official artwork, centered and aspect-ratio locked.

Brand-mandated clearspace and minimum size override generic scaling. Artwork MUST NOT be stretched, cropped, recolored or enlarged beyond its official raster source resolution.

## Optical QA

Every production asset requires review at 120×80, 240×160 and 480×320 plus SVG zoom:
- legibility;
- no clipping;
- correct aspect ratio;
- correct brand colors;
- sufficient clearspace;
- optical centering;
- no accidental double border;
- no embedded remote resources;
- no scripts/event handlers;
- correct transparent/white background semantics.

A technically valid file that is poorly visible at its target device size fails QA.
