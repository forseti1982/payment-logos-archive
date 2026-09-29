# Quellen für AIDs (Application Identifier)

Stand 29.09.2026. Eine AID besteht aus der RID (5 Byte, Kennung des Anbieters, registriert nach ISO/IEC 7816-5) und einer PIX (Anwendung). Terminals gleichen die AID der Karte mit ihrer Liste per längstem Präfix ab.

## Offizielle Register und Stellen

| Quelle | Inhalt | Zugang |
|---|---|---|
| [ep2 Registration Authority](https://www.ep2.ch/registration-authority/) · [ep2 ID System](https://id.ep2.ch) | Alle ep2-IDs, darunter AIDs, Acquirer-, Service-Center- und Terminal-IDs (der «ID-Master») | Download nur im geschlossenen Bereich des ep2 ID System |
| [ep2 Product Identification V2.0](https://www.ep2.ch/wp-content/uploads/2020/05/ep2-Product-Identification_V.2.0.pdf) | Regeln zur Identifikation in ep2 | öffentlich |
| [ISO/IEC 7816-5](https://www.iso.org/standard/34259.html) | Norm zur Registrierung von Anwendungsanbietern (RID) | kostenpflichtig |
| [ANSI: International RIDs](https://www.ansi.org/about/roles/registration-program/rid) | Antrag für eine RID; Registrierungsstelle ist TDC Services A/S | keine öffentliche Liste |
| [NSAI: Registrierung IIN, OID, RID](https://www.nsai.ie/standards/notification-and-registration-schemes/registration-schemes-iin-oid-rid/) | Nationale Antragsstelle (Irland) | keine öffentliche Liste |
| [EMVCo Registered IDs](https://www.emvco.com/registered-ids/) · [Kernel ID](https://www.emvco.com/processes/kernel-id/) · [Registration Services](https://www.emvco.com/processes-forms/registration-services/) | Von EMVCo vergebene IDs, z. B. Kernel-IDs der Zahlungssysteme | öffentlich durchsuchbar |

## Dokumente der Kartensysteme

| Quelle | Inhalt |
|---|---|
| [Visa Transaction Acceptance Device Guide (TADG) V3.3](https://digitalpartnerservices.visaonline.com/Document/Download/580) · [TADG auf visa.com](https://usa.visa.com/content/dam/VCOM/regional/na/us/partner-with-us/documents/transaction-acceptance-device-guide.pdf) | Tabelle 4-2 «Visa Application Identifiers» (Visa, Visa Electron, V PAY, Interlink) |
| [Deutsche Kreditwirtschaft: girocard-System](https://die-dk.de/zahlungsverkehr/zulassungsverfahren/girocard-system/) · [girocard Standards](https://www.girocard.eu/girocard-standards/) | Zulassung und Spezifikationen girocard (Spezifikationen für Teilnehmer) |
| [Canadian Card Technical Acceptance (US Payments Forum)](https://www.uspaymentsforum.org/wp-content/uploads/2019/11/Canadian-Card-Technical-Acceptance-FINAL2-Sept-2018.pdf) | Interac und kanadische Karten am Terminal |

## Sekundäre Sammlungen (nicht autoritativ, nur zum Auffinden)

- [EFTlab: Complete list of Application Identifiers](https://www.eftlab.com/knowledge-base/complete-list-of-application-identifiers-aid)
- [ID TECH Knowledge Base: AIDs](https://atlassian.idtechproducts.com/confluence/display/KB/AIDs,+Application+Identifiers,+EMV+Card+applications)
- [HEI EMV Decoder: AID List](https://hartleyenterprises.com/aid-list)
- [Ambimat: EMV AID List](https://ambimat.com/developer-resources/list-of-application-identifiers-aid/)
- [emvlab.org: EMV-Tag 4F (AID)](https://emvlab.org/emvtags/show/t4F/)
- [Shift4: EMV AIDs](https://shift4.zendesk.com/hc/en-us/articles/4406720359955-Application-Identifier-Card-Type-Definitions-for-EMV-Configuration-EMV-AIDs) · [Verifone: EMV-Konfiguration](https://verifone.cloud/docs/sca-functional-specification/config_params/emv_ini_config)

## Hinweis zur Vertraulichkeit

Die ep2-AIDs in `registry/brands.json` stammen aus dem ep2 ID-Master, der nur im geschlossenen Bereich des ep2 ID System erhältlich ist. Das Repo darf deshalb nicht öffentlich werden, solange diese Daten darin stehen.
