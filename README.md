<div align="center">

# wallee payment logos

### easy pay any way

</div>

## wallee-Kachel

Jedes Logo wird als Kachel im Kartenformat (120 × 80) ausgeliefert. Der Rahmen ist Pflicht und für alle Kacheln gleich:

| Ebene | Vorgabe |
|---|---|
| Aussenkante | 1 px Weiss |
| Rahmen | 2 px wallee-Türkis `#11D9CC` |
| Logofeld | direkt innerhalb des Rahmens, in der Hintergrundfarbe des Logos statt Weiss, wo das Logo eine eigene Fläche hat |
| Logo | Original des Markeninhabers, unverändert, Seitenverhältnis erhalten |

Die Kacheln entstehen nur über `npm run build:tiles` aus den Originalen in `assets/source/`, die Zuordnung steht in `registry/tile-sources.json`. Dateien in `dist/tiles/` werden nie von Hand geändert.

## Quellen und offene Punkte

Stand 28.09.2026. Alle Einträge haben den Status `review`, bis die Prüfung nach `AGENTS.md` abgeschlossen ist.

| Marke | Quelle der Kachel | Stand |
|---|---|---|
| PostFinance Pay | Originalpaket postfinance.ch, SVG (neues CI, April 2026) | Original eingesetzt |
| PostFinance Card | Originalpaket postfinance.ch, PNG 630 × 396 (kein Vektor angeboten) | Original eingesetzt |
| Wero | Checkout-Karte aus den Wero Brand Guidelines, SVG | Original eingesetzt, min. 31 px Breite, 15 px Abstand |
| ep2 | Vektor-Master von ep2 | Original eingesetzt |
| VOLTOX Smile & Pay, Age Verification | Firmenlogo, von wallee geliefert (PNG 200 × 200) | Vektor-Master bei VOLTOX anfragen |
| PostFinance e-finance | altes Logo zurückgezogen | Platzhalter, Produktstatus prüfen |
| TWINT | TWINT Brand Portal | Platzhalter, Zugang zum Portal nötig |
| Click to Pay | EMVCo Trademark Centre | Platzhalter, Lizenzvertrag nötig |
| WeChat Pay | nur Richtlinien-PDF 2017 | Platzhalter, Master anfragen |
| Garmin Pay | Anfrageformular Garmin | fehlt, Anfrage durch wallee |
| SwatchPAY! | Webbild von swatch.com (PNG 678 × 108), kein freigegebenes Original | Übergangslösung, Original bei Swatch anfragen |
| Samsung Wallet | Toolkit von Samsung (ca. 38 MB) | fehlt, Download ausstehend |
| Xiaomi Pay, Zepp Pay | keine offizielle Quelle gefunden | fehlt |
| übrige Marken | Datatrans-Katalog (`assets/source/datatrans/`), kein Original des Markeninhabers | Ersatz durch Originale ausstehend |

Details zu jeder Quelle stehen in `registry/official-sources.json`.

## Cards & schemes

| Logo | Brand |
|:--:|---|
| <img src="dist/tiles/svg/american-express.svg" width="112" alt="American Express"> | **American Express** |
| <img src="dist/tiles/svg/cartes-bancaires.svg" width="112" alt="Cartes Bancaires"> | **Cartes Bancaires** |
| <img src="dist/tiles/svg/dankort.svg" width="112" alt="Dankort"> | **Dankort** |
| <img src="dist/tiles/svg/diners-club.svg" width="112" alt="Diners Club"> | **Diners Club** |
| <img src="dist/tiles/svg/discover.svg" width="112" alt="Discover"> | **Discover** |
| <img src="dist/tiles/svg/elo.svg" width="112" alt="Elo"> | **Elo** |
| <img src="dist/tiles/svg/hipercard.svg" width="112" alt="Hipercard"> | **Hipercard** |
| <img src="dist/tiles/svg/jcb.svg" width="112" alt="JCB"> | **JCB** |
| <img src="dist/tiles/svg/mastercard.svg" width="112" alt="Mastercard"> | **Mastercard** |
| <img src="dist/tiles/svg/postfinance-card.svg" width="112" alt="PostFinance Card"> | **PostFinance Card** |
| <img src="dist/tiles/svg/uatp.svg" width="112" alt="UATP"> | **UATP** |
| <img src="dist/tiles/svg/unionpay.svg" width="112" alt="UnionPay"> | **UnionPay** |
| <img src="dist/tiles/svg/v-pay.svg" width="112" alt="V PAY"> | **V PAY** |

## Wallets

| Logo | Brand |
|:--:|---|
| <img src="dist/tiles/svg/apple-pay.svg" width="112" alt="Apple Pay"> | **Apple Pay** |
| — | **Garmin Pay** |
| <img src="dist/tiles/svg/google-pay.svg" width="112" alt="Google Pay"> | **Google Pay** |
| <img src="dist/tiles/svg/samsung-pay.svg" width="112" alt="Samsung Pay"> | **Samsung Pay** |
| — | **Samsung Wallet** |
| <img src="dist/tiles/svg/swatchpay.svg" width="112" alt="SwatchPAY!"> | **SwatchPAY!** |
| — | **Xiaomi Pay** |
| — | **Zepp Pay** |

## Payment methods

| Logo | Brand |
|:--:|---|
| <img src="dist/tiles/svg/alipay.svg" width="112" alt="Alipay"> | **Alipay** |
| <img src="dist/tiles/svg/alipay-plus.svg" width="112" alt="Alipay+"> | **Alipay+** |
| <img src="dist/tiles/svg/amazon-pay.svg" width="112" alt="Amazon Pay"> | **Amazon Pay** |
| <img src="dist/tiles/svg/availabill.svg" width="112" alt="Availabill"> | **Availabill** |
| <img src="dist/tiles/svg/bancontact.svg" width="112" alt="Bancontact"> | **Bancontact** |
| <img src="dist/tiles/svg/blik.svg" width="112" alt="BLIK"> | **BLIK** |
| <img src="dist/tiles/svg/boncard.svg" width="112" alt="boncard"> | **boncard** |
| <img src="dist/tiles/svg/bonus-card.svg" width="112" alt="Bonus Card"> | **Bonus Card** |
| <img src="dist/tiles/svg/butterfly-card.svg" width="112" alt="Butterfly Card"> | **Butterfly Card** |
| <img src="dist/tiles/svg/cembrapay.svg" width="112" alt="CembraPay"> | **CembraPay** |
| <img src="dist/tiles/svg/crif.svg" width="112" alt="CRIF"> | **CRIF** |
| <img src="dist/tiles/svg/dimoco.svg" width="112" alt="DIMOCO"> | **DIMOCO** |
| <img src="dist/tiles/svg/ebill.svg" width="112" alt="eBill"> | **eBill** |
| <img src="dist/tiles/svg/eps.svg" width="112" alt="EPS"> | **EPS** |
| <img src="dist/tiles/svg/giropay.svg" width="112" alt="giropay"> | **giropay** |
| <img src="dist/tiles/svg/half-fare-plus.svg" width="112" alt="Half Fare Plus"> | **Half Fare Plus** |
| <img src="dist/tiles/svg/ideal.svg" width="112" alt="iDEAL"> | **iDEAL** |
| <img src="dist/tiles/svg/ideal-wero.svg" width="112" alt="iDEAL | Wero"> | **iDEAL | Wero** |
| <img src="dist/tiles/svg/klarna.svg" width="112" alt="Klarna"> | **Klarna** |
| <img src="dist/tiles/svg/lunch-check.svg" width="112" alt="Lunch-Check"> | **Lunch-Check** |
| <img src="dist/tiles/svg/mediamarkt.svg" width="112" alt="MediaMarkt"> | **MediaMarkt** |
| <img src="dist/tiles/svg/migros-giftcard.svg" width="112" alt="Migros Gift Card"> | **Migros Gift Card** |
| <img src="dist/tiles/svg/mobilepay.svg" width="112" alt="MobilePay"> | **MobilePay** |
| <img src="dist/tiles/svg/paycard.svg" width="112" alt="Paycard"> | **Paycard** |
| <img src="dist/tiles/svg/paypal.svg" width="112" alt="PayPal"> | **PayPal** |
| <img src="dist/tiles/svg/paysafecard.svg" width="112" alt="Paysafecard"> | **Paysafecard** |
| <img src="dist/tiles/svg/pointspay.svg" width="112" alt="PointsPay"> | **PointsPay** |
| — | **PostFinance** |
| <img src="dist/tiles/svg/postfinance-efinance.svg" width="112" alt="PostFinance e-finance"> | **PostFinance e-finance** |
| <img src="dist/tiles/svg/postfinance-pay.svg" width="112" alt="PostFinance Pay"> | **PostFinance Pay** |
| <img src="dist/tiles/svg/powerpay.svg" width="112" alt="POWERPAY"> | **POWERPAY** |
| <img src="dist/tiles/svg/przelewy24.svg" width="112" alt="Przelewy24"> | **Przelewy24** |
| <img src="dist/tiles/svg/reka.svg" width="112" alt="Reka"> | **Reka** |
| <img src="dist/tiles/svg/sepa.svg" width="112" alt="SEPA"> | **SEPA** |
| <img src="dist/tiles/svg/skrill.svg" width="112" alt="Skrill"> | **Skrill** |
| <img src="dist/tiles/svg/swish.svg" width="112" alt="Swish"> | **Swish** |
| <img src="dist/tiles/svg/swisscom-pay.svg" width="112" alt="Swisscom Pay"> | **Swisscom Pay** |
| <img src="dist/tiles/svg/swisspass.svg" width="112" alt="SwissPass"> | **SwissPass** |
| <img src="dist/tiles/svg/twint.svg" width="112" alt="TWINT"> | **TWINT** |
| <img src="dist/tiles/svg/vipps.svg" width="112" alt="Vipps"> | **Vipps** |
| <img src="dist/tiles/svg/wechat-pay.svg" width="112" alt="WeChat Pay"> | **WeChat Pay** |
| <img src="dist/tiles/svg/wero.svg" width="112" alt="Wero"> | **Wero** |

## Acceptance & infrastructure

| Logo | Brand |
|:--:|---|
| <img src="dist/tiles/svg/click-to-pay.svg" width="112" alt="Click to Pay"> | **Click to Pay** |
| <img src="dist/tiles/svg/ep2.svg" width="112" alt="ep2"> | **ep2** |

## Biometric & verification

| Logo | Brand |
|:--:|---|
| <img src="dist/tiles/svg/voltox-age-verification.svg" width="112" alt="Voltox Age Verification"> | **Voltox Age Verification** |
| <img src="dist/tiles/svg/voltox-smile-pay.svg" width="112" alt="Voltox Smile & Pay"> | **Voltox Smile & Pay** |

## Generic assets

| Logo | Brand |
|:--:|---|
| <img src="dist/tiles/svg/card-generic.svg" width="112" alt="Generic Card"> | **Generic Card** |
| <img src="dist/tiles/svg/card-generic-alt.svg" width="112" alt="Generic Card Alt"> | **Generic Card Alt** |
| <img src="dist/tiles/svg/card-generic-gold.svg" width="112" alt="Generic Card Gold"> | **Generic Card Gold** |
| <img src="dist/tiles/svg/gift-card-generic.svg" width="112" alt="Generic Gift Card"> | **Generic Gift Card** |
| <img src="dist/tiles/svg/gift-card-generic-alt.svg" width="112" alt="Generic Gift Card Alt"> | **Generic Gift Card Alt** |
| <img src="dist/tiles/svg/gift-card-generic-gold.svg" width="112" alt="Generic Gift Card Gold"> | **Generic Gift Card Gold** |
| <img src="dist/tiles/svg/invoice.svg" width="112" alt="Invoice"> | **Invoice** |

## Legacy

| Logo | Brand |
|:--:|---|
| <img src="dist/tiles/svg/maestro.svg" width="112" alt="Maestro"> | **Maestro** |

---

SVG payment-brand archive for wallee integrations. Source masters and provenance are kept separately under `assets/source/` and `registry/`.
