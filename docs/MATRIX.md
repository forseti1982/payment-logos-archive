# Availability matrix

## Principle
The matrix is a policy engine, not a spreadsheet of copied logo data.

### Effective availability
A brand is deliverable only when ALL required gates pass:

1. brand exists;
2. lifecycle permits use;
3. artwork is verified;
4. market permits use;
5. channel permits use;
6. device profile permits use;
7. explicit matrix policy enables it.

Default: **DENY**.

## Why deny-by-default?
Payment acceptance marks can imply capabilities. Accidentally showing an unsupported mark is worse than temporarily omitting one.

## Overrides
Overrides MUST be explicit, scoped and auditable. A broad global allow rule SHOULD NOT be used when a narrower market/channel/profile rule is sufficient.

## Example
A future verified payment method could be:
- enabled for CH;
- enabled on unattended-md and unattended-hd;
- enabled for vending and EV charging;
- disabled for DE;
- disabled on unattended-xs because the approved mark cannot meet minimum-size requirements.

That is one brand identity with contextual delivery policy, not multiple logos.
