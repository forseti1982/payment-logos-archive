# Zahlarten bei wallee und Abdeckung im Repo

Stand 29.09.2026. Quellen: [wallee Payment Methods](https://app-wallee.com/en/payment-methods) (52 Zahlarten), Kartenmarken der Zahlart «Credit / Debit Card» und [Processors](https://app-wallee.com/en/processors) im wallee-Portal, [Alle Zahlungsmethoden](https://wallee.com/zahlungen-annehmen/alle-zahlungsmethoden) auf wallee.com.

## Kartenmarken bei wallee

| Marke | Kachel im Repo |
|---|---|
| Mastercard, Visa, American Express, Diners Club, Discover, JCB, UnionPay, V PAY, Cartes Bancaires, Dankort, Elo, Maestro, Bancontact | vorhanden |
| PostFinance Card, boncard, Lunch-Check | vorhanden |
| Visa Electron | keine eigene Kachel, mit `visa` (Marke eingestellt) |
| RuPay | fehlt |
| WIR (heute CHW) | fehlt |
| Bücherbon, POWERCARD, AVIA, EKZ, Swiss Pay | fehlt, Schweizer Karten |

## Weitere Zahlarten bei wallee

| Zahlart | Kachel im Repo |
|---|---|
| TWINT, PostFinance Pay, PayPal, Klarna, CembraPay, POWERPAY, SwissPass, Reka, Alipay, WeChat Pay, Wero, iDEAL \| Wero, Bancontact, EPS, Przelewy24, Swish, Vipps, MobilePay, Skrill, paysafecard, SEPA, Rechnung | vorhanden |
| Digital Payments powered by Mastercard | als `click-to-pay` |
| Kryptowährung | fehlt |
| Innocard (Loyalty- und Geschenkkarten) | fehlt |
| Trustly, Payconiq, Paylib, Multibanco, girocard, Pay by Bank, Interac, Boleto, OXXO, POLi, Tenpay, BankAxess, paybox | fehlt |
| Masterpass, SOFORT, paydirekt, QIWI, CASHU, DaoPay | in der wallee-Liste, Status beim Anbieter prüfen (unter Legacy erfasst) |
| Bank Transfer, Online Banking, Direct Debit UK, Installment Invoice | generisch, kein Markenlogo |

## Keine Zahlarten

- **Ammer Pay, e-guma, Weezevent, Payfix, Sonect, Digital Tax Free** sind Terminal-Apps von Partnern, keine Zahlungsmarken.
- **Adyen, Datatrans, Saferpay, Worldline, PAYONE usw.** sind Processors bzw. Acquirer.

Alle fehlenden Marken sind in `registry/brands.json` mit `sourceStatus: wallee-supported-logo-missing` erfasst. Sobald ein Original vorliegt, entsteht die Kachel über `npm run build:tiles` und erscheint im README.
