Kalorier & Protein

Syfte
En interaktiv webbapplikation som beräknar användarens dagliga behov av kalorier och protein baserat på kroppsvikt, längd, ålder, kön, aktivitetsnivå och mål. Resultatet visas direkt på sidan utan omladdning.

 Funktioner
Användaren fyller i:
- Vikt (kg) och längd (cm)
- Ålder och kön
- Aktivitetsnivå (stillasittande till extremt aktiv)
- Mål (gå ner i vikt / behålla vikten / bygga muskler)

Sidan visar sedan:
- Dagligt kaloribehov (kcal) anpassat efter mål
- Dagligt proteinbehov (gram) anpassat efter mål
- En förklaring av resultatet
- Personliga kostrekommendationer baserade på målet

 Teknik
- HTML5
- CSS3 (extern fil: style1.css)
- JavaScript (extern fil: script1.js)
- Google Fonts – Playfair Display och Lato
- Font Awesome 6 – ikoner

Kalorierna beräknas med formeln Mifflin-St Jeor multiplicerat med en aktivitetsfaktor (TDEE).
Proteinbehovet beräknas som gram per kg kroppsvikt och varierar med målet (1.6–2.2 g/kg).

 Testning
Manuell testning genomfördes enligt följande:
- Olika kombinationer av vikt, längd, ålder, kön och mål testades och gav rimliga resultat
- Felmeddelande visas om användaren klickar utan att ha fyllt i alla fält
- Sidan testades i mobilbredd (375px) via webbläsarens dev-verktyg
- Inga fel hittades i webbläsarens konsol
- Kontrast och läsbarhet kontrollerades visuellt
