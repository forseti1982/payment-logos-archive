# Dynamic asset delivery

## Objective
Partners SHOULD be able to reference controlled wallee payment-brand assets instead of copying and resizing logos themselves.

## Resolution pipeline
A delivery request is resolved against:

`brand → verification state → market → channel → device profile → matrix rule → format`

The default policy is **deny**. Absence of an explicit applicable allow rule MUST NOT expose a brand.

## Availability matrix
`config/availability-matrix.json` is the policy layer controlling which brands may be delivered for a defined context.

A rule may constrain:
- brand ID
- market
- channel
- device profile
- lifecycle/verification state

The matrix controls **delivery eligibility**, not brand identity. Never duplicate logo metadata inside the matrix.

## Device profiles
Profiles define deterministic dimensions and supported formats. Integrators select a profile rather than resizing assets arbitrarily.

Example conceptual immutable URL:

```text
/v1/assets/<release>/<market>/<profile>/<brand-id>.<format>
```

A mutable `current` alias MAY exist for integrations explicitly opting into automatic asset updates. Production machine fleets SHOULD prefer immutable release URLs.

## Matrix output
The build SHALL be capable of producing a resolved catalogue containing only brands allowed for the requested context. Disabled, unverified or inapplicable marks MUST NOT silently fall back to another logo.

## Safety
A matrix switch MUST NOT promote a `review` asset to production. Availability and verification are independent gates; both must permit delivery.
