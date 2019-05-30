var ArchivNavigationButton = document.querySelector('#Navigation > div > section:last-child');
var ArchivNavigation = document.querySelector('#ArchivNavigation');
var ArchivNavigationJahre = parseInt(document.querySelectorAll('#ArchivNavigation > ul > li').length);

// "Computed"-Höhe eines Listen-Elements
var ArchivNavigationJahreHoehe = 46.4;
var ArchivNavigationAnzeige = false;

ArchivNavigationButton.addEventListener('click', function(e) {
  e.preventDefault();

  // Berechnete Gesamthöhe für die Archiv-Liste -- keine Modifikation notwendig!
  var ArchivNavigationHoehe = ArchivNavigationJahre * ArchivNavigationJahreHoehe;

  // Prüfung, ob die Archiv-Navigation bereits angezeigt wird ...
  if (ArchivNavigationAnzeige === false) {
    // [...], wenn ja Archiv-Navigation ausblenden
    ArchivNavigation.style.height = ArchivNavigationHoehe + "px";
    ArchivNavigationAnzeige = true;
  } else {
    // [...], wenn nein Archiv-Navigation einblenden
    ArchivNavigation.style.height = 0 + "px";
    ArchivNavigationAnzeige = false;
  }
});
