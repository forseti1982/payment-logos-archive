# Zahlarten bei wallee und Abdeckung im Repo

Stand 29.09.2026 (nachgeführt nach dem Logo-Nachtrag). Quellen: [wallee Payment Methods](https://app-wallee.com/en/payment-methods) (52 Zahlarten), Kartenmarken der Zahlart «Credit / Debit Card» und [Processors](https://app-wallee.com/en/processors) im wallee-Portal, [Alle Zahlungsmethoden](https://wallee.com/zahlungen-annehmen/alle-zahlungsmethoden) auf wallee.com.

## Kartenmarken bei wallee

| Marke | Kachel im Repo |
|---|---|
| Mastercard, Visa, American Express, Diners Club, Discover, JCB, UnionPay, V PAY, Cartes Bancaires, Dankort, Elo, Maestro, Bancontact | vorhanden |
| PostFinance Card, boncard, Lunch-Check | vorhanden |
| Visa Electron | keine eigene Kachel, mit `visa` (Marke eingestellt) |
| RuPay, CHW (WIR), Bücherbon, POWERCARD, AVIA, Swiss Pay | vorhanden (Übergangsquellen, Status review) |
| EKZ (Einkaufszentrum-Karte von boncard) | fehlt, kein Logo gefunden |

## Weitere Zahlarten bei wallee

| Zahlart | Kachel im Repo |
|---|---|
| TWINT, PostFinance Pay, PayPal, Klarna, CembraPay, POWERPAY, SwissPass, Reka, Alipay, WeChat Pay, Wero, iDEAL \| Wero, Bancontact, EPS, Przelewy24, Swish, Vipps, MobilePay, Skrill, paysafecard, SEPA, Rechnung | vorhanden |
| Digital Payments powered by Mastercard | als `click-to-pay` |
| Kryptowährung (Bitcoin-Logo), Innocard, Trustly, Multibanco, girocard, Interac, OXXO, POLi, Tenpay, BankAxess, paybox | vorhanden (Übergangsquellen, Status review) |
| Payconiq, Paylib | vorhanden, unter Legacy; beide durch Wero abgelöst |
| Pay by Bank, Boleto | fehlt |
| Masterpass, SOFORT, paydirekt, QIWI, CASHU, DaoPay | vorhanden, unter Legacy |
| Bank Transfer, Online Banking, Direct Debit UK, Installment Invoice | generisch, kein Markenlogo |

## Keine Zahlarten

- **Ammer Pay, e-guma, Weezevent, Payfix, Sonect, Digital Tax Free** sind Terminal-Apps von Partnern, keine Zahlungsmarken.
- **Adyen, Datatrans, Saferpay, Worldline, PAYONE usw.** sind Processors bzw. Acquirer.

Alle fehlenden Marken sind in `registry/brands.json` mit `sourceStatus: wallee-supported-logo-missing` erfasst. Sobald ein Original vorliegt, entsteht die Kachel über `npm run build:tiles` und erscheint im README.

## Übergangsquellen vom 29.09.2026

Auf Anweisung des Owners gilt am 29.09.2026 einmalig eine Ausnahme von der First-Party-Regel. Logos stammen aus Wikimedia Commons, aus den Icons des wallee-Portals (app-wallee.com) oder von Websites der Markeninhaber (Firmenlogo). Alle diese Einträge bleiben `review`, sind mit Quelle und sha256 in `registry/brands.json` erfasst und werden ersetzt, sobald ein Original des Markeninhabers vorliegt.

## Tank- und Flottenkarten (ep2)

Aus dem ep2 ID-Master (aktive AIDs) erfasst, Gruppe `fuel`: AVIA, Shell (euroShell), Esso, BP, Aral, OMV, Eni, Routex, JET, Q8, Texaco, Lukoil, Agrola, Migrol, Tamoil, SOCAR, DKV, UTA, Eurowag, Novofleet, LogPay, Transcard, Oel-Pool, Oil!, HOYER, Jubin, Voegtlin-Meyer, Moveri. Die wallee-Liste «Credit / Debit Card» führt davon nur AVIA; die übrigen laufen über ep2-Acquirer.

Logo vorhanden (Firmenlogo, Übergangsquelle Wikimedia Commons): AVIA, Esso, Tamoil, UTA, Agrola, Aral, HOYER, Texaco, SOCAR, Lukoil, OMV, Eni, Q8, JET, Migrol. Noch ohne Logo: Shell, BP, DKV, Routex, Eurowag, Novofleet, LogPay, Transcard, Oel-Pool, Oil!, Jubin, Voegtlin-Meyer, Moveri.
