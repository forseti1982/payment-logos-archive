# Integration contract

## Dynamic consumption
Integrations consume `dist/manifest.json`. Do not infer capability, lifecycle or type from directory names or filenames.

Recommended flow:
1. Load the manifest at build/deployment time.
2. Filter by `status=verified`.
3. Match stable brand IDs against capabilities returned by the payment application/backend.
4. Select `raw` for native UI contexts or `tile` for standardized merchant presentation.
5. Preserve the supplied SVG aspect ratio. Never recolor or stretch brand artwork.

## Compatibility
Brand IDs are API identifiers. Renaming an ID is a breaking change. Artwork and display-name changes are not.

## Semantics
`consumerBrand` and `acceptanceRail` are distinct concepts. For example, a wearable wallet can use tokenized scheme credentials and therefore should not be represented as a new card scheme.

## Accessibility
UI implementations should expose the manifest display name as accessible text rather than relying on recognition of the logo alone.
