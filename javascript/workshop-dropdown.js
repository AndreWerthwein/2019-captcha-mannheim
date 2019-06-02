var DropdownHeader = document.querySelectorAll('.Workshop  > header');
var DropdownAnzeige = false;

// Funktion zur Reduktion aller Workshop-Dropdown-Elemente - Schutz gegen Fehler
function AlleDropdownsReduzieren() {
  var DropdownElemente = document.querySelectorAll('.Workshop');

  for (var x = 0; x < DropdownElemente.length; x = x + 1) {
    DropdownElemente[x].classList.remove('WorkshopDetails');
  }
}

for (var x = 0; x < DropdownHeader.length; x = x + 1) {
  DropdownHeader[x].addEventListener('click', function(e) {
    e.preventDefault();

    // Das übergeordnete Element, mit der Klasse "Workshop" auswählen
    var AktuellesDropdownElement = this.closest('.Workshop');

    // Wird das Dropdown angezeigt, ...
    if (DropdownAnzeige === false) {
      // Wenn nein, dann ...
      AlleDropdownsReduzieren(); // Fehler-Prävention
      // Aktuelles Dropdown anzeigen
      AktuellesDropdownElement.classList.add('WorkshopDetails');
      DropdownAnzeige = true;
    } else {
      // Wenn ja, aktuelles/alle anderen Dropdown-Elemente reduzieren
      AlleDropdownsReduzieren();
      DropdownAnzeige = false;
    }
  });
}
