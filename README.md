<div align="center">

<img src="assets/wallee/corporate/rgb/wallee-logo-turquoise.svg" width="220" alt="wallee">

# Payment Logos

**Zahlungslogos im wallee-Rahmen für Terminals, Checkout, Portal und Dokumentation**

70 von 76 Marken mit Kachel · 7 direkt vom Markeninhaber · Rahmen 1 px Weiss + 2 px `#11D9CC`

[Kartenmarken (PayFac und Acquiring)](#card-schemes) · [Wallets](#wallets) · [Schweiz: ep2, TWINT, PostFinance und Schweizer Karten](#switzerland) · [Online- und internationale Zahlarten](#online) · [Rechnung, Ratenkauf und Bonität](#invoice) · [wallee-Partner](#partners) · [Generische Symbole](#generic) · [Legacy (eingestellt, nur für bestehende Integrationen)](#legacy)

</div>

---

## So sieht jede Kachel aus

| Ebene | Vorgabe |
|---|---|
| Format | Kartenformat 120 × 80, abgerundete Ecken |
| Aussenkante | 1 px Weiss |
| Rahmen | 2 px wallee-Türkis `#11D9CC`, bei allen Kacheln gleich |
| Logofeld | direkt innerhalb des Rahmens, in der Hintergrundfarbe des Logos statt Weiss, wo das Logo eine eigene Fläche hat |
| Logo | Datei des Markeninhabers, unverändert, Seitenverhältnis erhalten |

## Verwenden

```html
<img src="https://raw.githubusercontent.com/forseti1982/payment-logos-archive/master/dist/tiles/svg/twint.svg" width="120" alt="TWINT">
```

- Kacheln liegen unter `dist/tiles/svg/<id>.svg`, die IDs sind stabil (siehe Tabellen unten).
- Neue oder geänderte Logos: Original nach `assets/source/`, Eintrag in `registry/`, dann `npm run build:tiles` und `npm run build:readme`. Regeln in [AGENTS.md](AGENTS.md).

**Herkunft** unter jeder Kachel: *Original* = Datei aus dem Paket des Markeninhabers · *Website Markeninhaber* = Logo von dessen eigener Website · *Übergang* = Bild des Markeninhabers ohne Freigabe, bis ein Original da ist · *von wallee geliefert* · *Katalog* = noch aus dem Datatrans-Katalog, Ersatz ausstehend · *fehlt* = keine Kachel.

<a id="card-schemes"></a>

## Kartenmarken (PayFac und Acquiring)

<table>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/american-express.svg" width="120" alt="American Express"><br><sub><b>American Express</b><br><code>american-express</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/cartes-bancaires.svg" width="120" alt="Cartes Bancaires"><br><sub><b>Cartes Bancaires</b><br><code>cartes-bancaires</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/dankort.svg" width="120" alt="Dankort"><br><sub><b>Dankort</b><br><code>dankort</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/diners-club.svg" width="120" alt="Diners Club"><br><sub><b>Diners Club</b><br><code>diners-club</code> · Katalog</sub></td>
</tr>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/discover.svg" width="120" alt="Discover"><br><sub><b>Discover</b><br><code>discover</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/elo.svg" width="120" alt="Elo"><br><sub><b>Elo</b><br><code>elo</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/hipercard.svg" width="120" alt="Hipercard"><br><sub><b>Hipercard</b><br><code>hipercard</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/jcb.svg" width="120" alt="JCB"><br><sub><b>JCB</b><br><code>jcb</code> · Katalog</sub></td>
</tr>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/mastercard.svg" width="120" alt="Mastercard"><br><sub><b>Mastercard</b><br><code>mastercard</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/uatp.svg" width="120" alt="UATP"><br><sub><b>UATP</b><br><code>uatp</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/unionpay.svg" width="120" alt="UnionPay"><br><sub><b>UnionPay</b><br><code>unionpay</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/v-pay.svg" width="120" alt="V PAY"><br><sub><b>V PAY</b><br><code>v-pay</code> · Katalog</sub></td>
</tr>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/visa.svg" width="120" alt="Visa"><br><sub><b>Visa</b><br><code>visa</code> · Katalog</sub></td>
<td width="25%"></td>
<td width="25%"></td>
<td width="25%"></td>
</tr>
</table>

<a id="wallets"></a>

## Wallets

<table>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/apple-pay.svg" width="120" alt="Apple Pay"><br><sub><b>Apple Pay</b><br><code>apple-pay</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="docs/img/missing-tile.svg" width="120" alt="Garmin Pay: Logo fehlt"><br><sub><b>Garmin Pay</b><br><code>garmin-pay</code> · fehlt</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/google-pay.svg" width="120" alt="Google Pay"><br><sub><b>Google Pay</b><br><code>google-pay</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/samsung-pay.svg" width="120" alt="Samsung Pay"><br><sub><b>Samsung Pay</b><br><code>samsung-pay</code> · Katalog</sub></td>
</tr>
<tr>
<td align="center" width="25%"><img src="docs/img/missing-tile.svg" width="120" alt="Samsung Wallet: Logo fehlt"><br><sub><b>Samsung Wallet</b><br><code>samsung-wallet</code> · fehlt</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/swatchpay.svg" width="120" alt="SwatchPAY!"><br><sub><b>SwatchPAY!</b><br><code>swatchpay</code> · Übergang</sub></td>
<td align="center" width="25%"><img src="docs/img/missing-tile.svg" width="120" alt="Xiaomi Pay: Logo fehlt"><br><sub><b>Xiaomi Pay</b><br><code>xiaomi-pay</code> · fehlt</sub></td>
<td align="center" width="25%"><img src="docs/img/missing-tile.svg" width="120" alt="Zepp Pay: Logo fehlt"><br><sub><b>Zepp Pay</b><br><code>zepp-pay</code> · fehlt</sub></td>
</tr>
</table>

<a id="switzerland"></a>

## Schweiz: ep2, TWINT, PostFinance und Schweizer Karten

<table>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/boncard.svg" width="120" alt="boncard"><br><sub><b>boncard</b><br><code>boncard</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/bonus-card.svg" width="120" alt="Bonus Card"><br><sub><b>Bonus Card</b><br><code>bonus-card</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/ep2.svg" width="120" alt="ep2"><br><sub><b>ep2</b><br><code>ep2</code> · Original</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/half-fare-plus.svg" width="120" alt="Half Fare Plus"><br><sub><b>Half Fare Plus</b><br><code>half-fare-plus</code> · Katalog</sub></td>
</tr>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/lunch-check.svg" width="120" alt="Lunch-Check"><br><sub><b>Lunch-Check</b><br><code>lunch-check</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/mediamarkt.svg" width="120" alt="MediaMarkt"><br><sub><b>MediaMarkt</b><br><code>mediamarkt</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/migros-giftcard.svg" width="120" alt="Migros Gift Card"><br><sub><b>Migros Gift Card</b><br><code>migros-giftcard</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="docs/img/missing-tile.svg" width="120" alt="PostFinance: Logo fehlt"><br><sub><b>PostFinance</b><br><code>postfinance</code> · fehlt</sub></td>
</tr>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/postfinance-card.svg" width="120" alt="PostFinance Card"><br><sub><b>PostFinance Card</b><br><code>postfinance-card</code> · Original</sub></td>
<td align="center" width="25%"><img src="docs/img/missing-tile.svg" width="120" alt="PostFinance e-finance: Logo fehlt"><br><sub><b>PostFinance e-finance</b><br><code>postfinance-efinance</code> · fehlt</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/postfinance-pay.svg" width="120" alt="PostFinance Pay"><br><sub><b>PostFinance Pay</b><br><code>postfinance-pay</code> · Original</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/reka.svg" width="120" alt="Reka"><br><sub><b>Reka</b><br><code>reka</code> · Katalog</sub></td>
</tr>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/swisscom-pay.svg" width="120" alt="Swisscom Pay"><br><sub><b>Swisscom Pay</b><br><code>swisscom-pay</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/swisspass.svg" width="120" alt="SwissPass"><br><sub><b>SwissPass</b><br><code>swisspass</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/twint.svg" width="120" alt="TWINT"><br><sub><b>TWINT</b><br><code>twint</code> · Website Markeninhaber</sub></td>
<td width="25%"></td>
</tr>
</table>

<a id="online"></a>

## Online- und internationale Zahlarten

<table>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/alipay.svg" width="120" alt="Alipay"><br><sub><b>Alipay</b><br><code>alipay</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/alipay-plus.svg" width="120" alt="Alipay+"><br><sub><b>Alipay+</b><br><code>alipay-plus</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/amazon-pay.svg" width="120" alt="Amazon Pay"><br><sub><b>Amazon Pay</b><br><code>amazon-pay</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/bancontact.svg" width="120" alt="Bancontact"><br><sub><b>Bancontact</b><br><code>bancontact</code> · Katalog</sub></td>
</tr>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/blik.svg" width="120" alt="BLIK"><br><sub><b>BLIK</b><br><code>blik</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/butterfly-card.svg" width="120" alt="Butterfly Card"><br><sub><b>Butterfly Card</b><br><code>butterfly-card</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/click-to-pay.svg" width="120" alt="Click to Pay"><br><sub><b>Click to Pay</b><br><code>click-to-pay</code> · Website Markeninhaber</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/dimoco.svg" width="120" alt="DIMOCO"><br><sub><b>DIMOCO</b><br><code>dimoco</code> · Katalog</sub></td>
</tr>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/eps.svg" width="120" alt="EPS"><br><sub><b>EPS</b><br><code>eps</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/ideal.svg" width="120" alt="iDEAL"><br><sub><b>iDEAL</b><br><code>ideal</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/ideal-wero.svg" width="120" alt="iDEAL | Wero"><br><sub><b>iDEAL | Wero</b><br><code>ideal-wero</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/mobilepay.svg" width="120" alt="MobilePay"><br><sub><b>MobilePay</b><br><code>mobilepay</code> · Katalog</sub></td>
</tr>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/paycard.svg" width="120" alt="Paycard"><br><sub><b>Paycard</b><br><code>paycard</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/paypal.svg" width="120" alt="PayPal"><br><sub><b>PayPal</b><br><code>paypal</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/paysafecard.svg" width="120" alt="Paysafecard"><br><sub><b>Paysafecard</b><br><code>paysafecard</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/pointspay.svg" width="120" alt="PointsPay"><br><sub><b>PointsPay</b><br><code>pointspay</code> · Katalog</sub></td>
</tr>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/przelewy24.svg" width="120" alt="Przelewy24"><br><sub><b>Przelewy24</b><br><code>przelewy24</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/sepa.svg" width="120" alt="SEPA"><br><sub><b>SEPA</b><br><code>sepa</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/skrill.svg" width="120" alt="Skrill"><br><sub><b>Skrill</b><br><code>skrill</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/swish.svg" width="120" alt="Swish"><br><sub><b>Swish</b><br><code>swish</code> · Katalog</sub></td>
</tr>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/vipps.svg" width="120" alt="Vipps"><br><sub><b>Vipps</b><br><code>vipps</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/wechat-pay.svg" width="120" alt="WeChat Pay"><br><sub><b>WeChat Pay</b><br><code>wechat-pay</code> · Website Markeninhaber</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/wero.svg" width="120" alt="Wero"><br><sub><b>Wero</b><br><code>wero</code> · Original</sub></td>
<td width="25%"></td>
</tr>
</table>

<a id="invoice"></a>

## Rechnung, Ratenkauf und Bonität

<table>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/availabill.svg" width="120" alt="Availabill"><br><sub><b>Availabill</b><br><code>availabill</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/cembrapay.svg" width="120" alt="CembraPay"><br><sub><b>CembraPay</b><br><code>cembrapay</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/crif.svg" width="120" alt="CRIF"><br><sub><b>CRIF</b><br><code>crif</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/ebill.svg" width="120" alt="eBill"><br><sub><b>eBill</b><br><code>ebill</code> · Katalog</sub></td>
</tr>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/klarna.svg" width="120" alt="Klarna"><br><sub><b>Klarna</b><br><code>klarna</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/powerpay.svg" width="120" alt="POWERPAY"><br><sub><b>POWERPAY</b><br><code>powerpay</code> · Katalog</sub></td>
<td width="25%"></td>
<td width="25%"></td>
</tr>
</table>

<a id="partners"></a>

## wallee-Partner

<table>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/voltox-age-verification.svg" width="120" alt="Voltox Age Verification"><br><sub><b>Voltox Age Verification</b><br><code>voltox-age-verification</code> · von wallee geliefert</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/voltox-smile-pay.svg" width="120" alt="Voltox Smile &amp; Pay"><br><sub><b>Voltox Smile &amp; Pay</b><br><code>voltox-smile-pay</code> · von wallee geliefert</sub></td>
<td width="25%"></td>
<td width="25%"></td>
</tr>
</table>

<a id="generic"></a>

## Generische Symbole

<table>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/card-generic.svg" width="120" alt="Generic Card"><br><sub><b>Generic Card</b><br><code>card-generic</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/card-generic-alt.svg" width="120" alt="Generic Card Alt"><br><sub><b>Generic Card Alt</b><br><code>card-generic-alt</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/card-generic-gold.svg" width="120" alt="Generic Card Gold"><br><sub><b>Generic Card Gold</b><br><code>card-generic-gold</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/gift-card-generic.svg" width="120" alt="Generic Gift Card"><br><sub><b>Generic Gift Card</b><br><code>gift-card-generic</code> · Katalog</sub></td>
</tr>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/gift-card-generic-alt.svg" width="120" alt="Generic Gift Card Alt"><br><sub><b>Generic Gift Card Alt</b><br><code>gift-card-generic-alt</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/gift-card-generic-gold.svg" width="120" alt="Generic Gift Card Gold"><br><sub><b>Generic Gift Card Gold</b><br><code>gift-card-generic-gold</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/invoice.svg" width="120" alt="Invoice"><br><sub><b>Invoice</b><br><code>invoice</code> · Katalog</sub></td>
<td width="25%"></td>
</tr>
</table>

<a id="legacy"></a>

## Legacy (eingestellt, nur für bestehende Integrationen)

<table>
<tr>
<td align="center" width="25%"><img src="dist/tiles/svg/giropay.svg" width="120" alt="giropay"><br><sub><b>giropay</b><br><code>giropay</code> · Katalog</sub></td>
<td align="center" width="25%"><img src="dist/tiles/svg/maestro.svg" width="120" alt="Maestro"><br><sub><b>Maestro</b><br><code>maestro</code> · Katalog</sub></td>
<td width="25%"></td>
<td width="25%"></td>
</tr>
</table>

## Hinweise zur Auswahl

- **Alipay und Alipay+:** Beim Händler ist das Zeichen von Alipay+ vorgeschrieben; ein einzelnes Wallet-Logo wie Alipay nur zusammen mit einem Hinweis auf Alipay+ ([Alipay+ Brand Guidelines](https://docs.alipayplus.com/alipayplus/alipayplus/brand_guidelines_acq/brand_in_store_acq)). Für Terminals und Checkout `alipay-plus` verwenden.
- **Visa Electron:** am 13.04.2024 eingestellt, Nachfolger Visa Debit. Keine eigene Kachel; bestehende Connectors mit `visa` darstellen und als Legacy kennzeichnen.
- **giropay:** Ende 2024 eingestellt. Kachel nur für bestehende Integrationen.
- **PostFinance:** Logos seit April 2026 im neuen Markenauftritt. PostFinance-Logos in Onlineshops nur zeigen, wenn sich das Angebot erkennbar an Kunden in der Schweiz richtet.

## Offene Punkte

Status aller Einträge: `review`, bis die Prüfung nach AGENTS.md abgeschlossen ist. Details je Quelle in [`registry/official-sources.json`](registry/official-sources.json).

| Marke | Herkunft | Nächster Schritt |
|---|---|---|
| Click to Pay | Website Markeninhaber | Icon von emvco.com; lizenzierte Datei über EMVCo-Lizenzvertrag |
| Garmin Pay | fehlt | Assets über «Request Assets» bei Garmin anfragen (Vertraulichkeitsbedingungen) |
| PostFinance | fehlt | Paket liegt vor (EPS); Kachel noch nicht angelegt |
| PostFinance e-finance | fehlt | Altes Logo zurückgezogen; Produktstatus prüfen |
| Samsung Wallet | fehlt | Offizielles Toolkit von Samsung herunterladen (ca. 38 MB) |
| SwatchPAY! | Übergang | Webbild von swatch.com; freigegebenes Original bei Swatch anfragen |
| TWINT | Website Markeninhaber | Logo von twint.ch; Merchant-Logo im TWINT Brand Portal (Login) beziehen |
| Voltox Age Verification | von wallee geliefert | Firmenlogo als PNG; Vektor und Produktlogo bei VOLTOX anfragen |
| Voltox Smile &amp; Pay | von wallee geliefert | Firmenlogo als PNG; Vektor und Produktlogo bei VOLTOX anfragen |
| WeChat Pay | Website Markeninhaber | Logo der WeChat Pay Open Platform; Richtlinien 2017 prüfen |
| Xiaomi Pay | fehlt | Keine offizielle Quelle gefunden |
| Zepp Pay | fehlt | Keine offizielle Quelle gefunden |

**Noch aus dem Datatrans-Katalog** (Original beim Markeninhaber beschaffen): Alipay, Alipay+, Amazon Pay, American Express, Apple Pay, Availabill, Bancontact, BLIK, boncard, Bonus Card, Butterfly Card, Cartes Bancaires, CembraPay, CRIF, Dankort, DIMOCO, Diners Club, Discover, eBill, Elo, EPS, Generic Card, Generic Card Alt, Generic Card Gold, Generic Gift Card, Generic Gift Card Alt, Generic Gift Card Gold, giropay, Google Pay, Half Fare Plus, Hipercard, iDEAL, iDEAL | Wero, Invoice, JCB, Klarna, Lunch-Check, Maestro, Mastercard, MediaMarkt, Migros Gift Card, MobilePay, Paycard, PayPal, Paysafecard, PointsPay, POWERPAY, Przelewy24, Reka, Samsung Pay, SEPA, Skrill, Swish, Swisscom Pay, SwissPass, UATP, UnionPay, V PAY, Vipps, Visa.

---

<sub>Generiert von `scripts/build-readme.mjs` aus `registry/`. Nicht von Hand ändern.</sub>
