# Architecture

## System boundary

This repository is an asset system, not a generic logo archive. Its public contract is the registry + generated manifest.

## Layers

### 1 · Identity
`registry/brands.json`

Stable IDs, display names, taxonomy, lifecycle and integration semantics.

### 2 · Provenance
`registry/sources.json`

First-party evidence, audit date, usage scope and brand constraints.

### 3 · Source artwork
`assets/source/<brand-id>/`

Authoritative brand-owner files. wallee presentation styling is forbidden here.

### 4 · Distribution
`dist/raw/`

Normalized assets for native integration contexts.

### 5 · Presentation
`dist/tiles/`

Generated wallee tiles for visually consistent payment-method grids.

### 6 · Runtime catalogue
`dist/manifest.json`

Machine-readable integration contract. Runtime consumers should depend on this layer rather than repository paths.

## Compatibility

Stable brand IDs are API identifiers. Artwork may evolve without changing an ID. An ID rename is breaking and requires explicit alias/migration handling.

## Determinism

Given identical source artwork, registry metadata and generator version, distribution output SHOULD be byte-stable where practical and visually deterministic in all cases.
