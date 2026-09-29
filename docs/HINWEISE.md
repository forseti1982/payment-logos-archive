# Hinweise zur Auswahl

- **Alipay und Alipay+:** Beim Händler ist das Zeichen von Alipay+ vorgeschrieben. Ein einzelnes Wallet-Logo wie Alipay nur zusammen mit einem Hinweis auf Alipay+ ([Alipay+ Brand Guidelines](https://docs.alipayplus.com/alipayplus/alipayplus/brand_guidelines_acq/brand_in_store_acq)). Für Terminals und Checkout `alipay-plus` verwenden.
- **Visa Electron:** am 13.04.2024 eingestellt, Nachfolger Visa Debit. Keine eigene Kachel; bestehende Connectors mit `visa` darstellen und als Legacy kennzeichnen.
- **giropay:** Ende 2024 eingestellt, nur für bestehende Integrationen.
- **PostFinance:** Logos seit April 2026 im neuen Markenauftritt. In Onlineshops nur zeigen, wenn sich das Angebot erkennbar an Kunden in der Schweiz richtet.

Kachelvorgabe, Quellen und offene Punkte: [AGENTS.md](../AGENTS.md), [`registry/official-sources.json`](../registry/official-sources.json), [`registry/brands.json`](../registry/brands.json).

## Reihenfolge und Grösse der Kartenmarken

- **Mastercard** verlangt Parität in Grösse, Häufigkeit, Farbe und Position mit allen anderen Akzeptanzzeichen, Mastercard «preferably in the first position» ([Mastercard Branding Requirements](https://www.mastercard.com/brandcenter/us/en/brand-requirements/mastercard.html)).
- **Visa** verlangt, dass das Visa-Zeichen mindestens so gross ist wie jedes andere Zahlungszeichen; eine Reihenfolge schreibt Visa nicht vor ([Visa In-Store Brand Standards, Sept. 2025](https://corporate.visa.com/content/dam/VCOM/corporate/about-visa/documents/visa-in-store-brand-standards-sept2025.pdf)).
- Daher: alle Kacheln gleich gross, Mastercard an erster, Visa an zweiter Stelle.
- **PostFinance e-finance** und PostFinance Card als Online-Zahlart werden seit 10.07.2023 durch PostFinance Pay ersetzt; für Onlineshops `postfinance-pay` verwenden.
