# Eindopdracht - formulier met input validatie
Template voor eindopdracht level 2
# Opdracht:
Maak een formulier met input validatie
# Beschrijving:
Het doel van deze opdracht is om een _formulier_ te bouwen en met behulp van Javascript een aantal/
input validaties uit te voeren. Tevens maak je een paar kleine aanpassingen in de CSS code.

Gebruik de volgende uitnodigingslink van GitHub classroom om je aan te melden voor de persoonlijke repository van dit project.

https://classroom.github.com/a/yij6-mUu

**Clone** deze repository naar je eigen systeem om met de bestanden in dit project de opdracht af te maken. 
De repository bestaat uit de volgende onderdelen:

- index.html
- css/styles.css
- js/script.js
- README.md

# Functionele vereisten:
Het is **alleen toegestaan** om wijzigingen aan te brengen in het _js/script.js_ en _css/styles.css_ bestand.
De overige bestanden mogen **niet** worden gewijzigd.

**De volgende _input-validaties_ moeten worden gecodeerd:**

- Bij het betreden van een input veld:
  - wordt de achtergrondkleur van dat veld geel (yellow). 
  - wordt het bijbehorende label vet (bold).
- Bij het verlaten van een input veld:
  - wordt deze wit (white).
  - wordt het bijbehorende label normaal (normal).
- De velden met de voornaam, achternaam, email en telefoonnummer zijn verplicht:
  - Bij het verlaten van een van deze velden _en het veld is leeg_, maak dan de achtergrond rood (red).
  - Wanneer een of meer velden leeg zijn mag het formulier niet worden verstuurd. 
- De checkbox met de "terms en conditions" moet worden aangevinkt om het formulier te kunnen versturen
- De volgende _validatie met cookies_ moeten worden gecodeerd:
Wanneer het formulier al een keer verzonden is mag dit niet nogmaals gebeuren. Dit moet je oplossen met behulp van een cookie. Wanneer de cookie bestaat dan dien je de submit knop "uit" te zetten (lees: disabled) waardoor het formulier niet verstuurd kan worden.

De volgende _validatie met cookies_ moeten worden gecodeerd:

- Wanneer het formulier reeds verzonden is mag dit niet nogmaals gebeuren. Dit moet je oplossen met behulp van een cookie. Wanneer de cookie bestaat dan dien je de submit knop "uit" te zetten (lees: disabled) waardoor het formulier niet verstuurd kan worden.

**Alleen** wanneer het formulier _volledig is ingevuld_ inclusief de (verplichte) velden met de voornaam, achternaam, 
email en telefoonnummer niet leeg zijn, 
de checkbox met de "terms en conditions" is aangevinkt 
dan pas kan het formulier worden verstuurd.

**De volgende _styling aanpassingen_ moeten worden gecodeerd (in de CSS):**

- Zorg ervoor dat de velden inclusief de knop, onder elkaar worden gezet.
- Zorg ervoor dat de input velden een breedte hebben van 100%.
- Zorg ervoor dat de labels een breedte hebben van 100%.
- De input velden moeten een ronde rand krijgen van 10px, inclusief de submit knop.
- De submit knop moet een groene kleur krijgen: #4CAF50

Het uiteindelijke resultaat moet eruit zien zoals de bijgevoegde afbeelding: _screenshot_formulier.png_

Op de server vindt nog een laatste controle plaats. Wanneer het formulier niet volledig is aangekomen op de server wordt een foutmelding getoond.

**TIP**: gebruik de '_blur_' en '_focus_' events in Javascript om respectievelijk te detecteren of een veld wordt verlaten of betreden.



## Welke bestanden zijn nodig voor deze opdracht:

### index.html
- Op deze pagina is het formulier gemaakt. Het formulier is voorzien van:
  - De methode: post
  - De action: http://rocmn.markkors.nl/formulier/post.php, de data vanuit het formulier wordt naar deze pagina verstuurd en gecontroleert.
  - styling welke in het bestand css/styles.css is gedefinieerd.
- Door op de submit knop de drukken wordt het formulier verstuurd.
- Binnen de index.html pagina is een <script> toegevoegd welke is terug te vinden in de folder /js/script.js
- Het is **niet toegestaan** om hier wijzigingen in aan te brengen.
### css/styles.css
- Dit betreft het stylesheet bestand voor de index.html pagina. 
- Het is toegestaan om hier wijzigingen in aan te brengen.
### js/script.js
- Dit is het bestand waarin de Javascript code is opgenomen. Breng hier de wijzigingen aan om de opdracht uit te voeren.
### rubric-opdracht-formulier.xlsx
- Dit is het beoordelingsformulier voor deze opdracht.
- Het is **niet toegestaan** om hier wijzigingen in aan te brengen.
### screenshot_formulier.png
- Dit is een afbeelding van het uiteindelijke resultaat.
- Het is **niet toegestaan** om hier wijzigingen in aan te brengen.

## Technische vereisten:
- Gebruik Javascript om de input validaties uit te voeren.
- Gebruik Javascript om de styling van de input velden te wijzigen.
- Gebruik de bestanden zoals aangeleverd in de repository.
- Het is **niet toegestaan** om via Javascript het HTML DOM te manipuleren
- 
# Inleveren:
- Push het resultaat voor deze opdracht naar de Github classroom repository zoals boven de opdracht is beschreven. 