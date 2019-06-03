var ResponsiveNavigationBurger = document.querySelector('#ResponsiveNavigationBurger');
var ResponsiveNavigationLogo = document.querySelector('#ResponsiveNavigationHeader > section > img');
var ResponsiveNavigation = document.querySelector('#ResponsiveNavigation');

var ResponsiveNavigationAnzeige = false;

//Funktion für animiertes Scrolling
function Scrolling() {
    document.body.scrollTo({
        top: 0,
        behavior : 'smooth'
    });

    document.documentElement.scrollTo({
        top: 0,
        behavior : 'smooth'
    });
}

// Interaktion mit dem Hamburger-Menü
ResponsiveNavigationBurger.addEventListener('click', function(e) {
  e.preventDefault();

  if (ResponsiveNavigationAnzeige === false) {
    // Wird das Navigationsmenü geöffnet/geschlossen, dann sollte an den Kopf des Dokument gescrollt werden, um ggf. Menü auch sichtbar zu machen.
    Scrolling();
    // Animation des Hamburger-Menüs, vom Hamburger-Menü zum Schliessen-Kreuz
    this.classList.add('ResponsiveNavigationKreuz');
    // Einblenden des Navigationsmenü
    ResponsiveNavigation.classList.add('ResponsiveNavigationEinfahren');
    ResponsiveNavigationAnzeige = true;
  } else {
    // Wird das Navigationsmenü geöffnet/geschlossen, dann sollte an den Kopf des Dokument gescrollt werden, um ggf. Menü auch sichtbar zu machen.
    Scrolling();
    // Animation des Hamburger-Menüs, vom Schliessen-Kreuz zum Hamburger-Menü
    this.classList.remove('ResponsiveNavigationKreuz');
    // Ausblenden des Navigationsmenü
    ResponsiveNavigation.classList.remove('ResponsiveNavigationEinfahren');
    ResponsiveNavigationAnzeige = false;
  }
});

// Zusätzliche Interatkion für das Logo, Erhöhte User-Experience
ResponsiveNavigationLogo.addEventListener('click', function(e) {
  e.preventDefault();

  if (ResponsiveNavigationAnzeige === false) {
    // Wird das Navigationsmenü geöffnet/geschlossen, dann sollte an den Kopf des Dokument gescrollt werden, um ggf. Menü auch sichtbar zu machen.
    Scrolling();
    // Animation des Hamburger-Menüs, vom Hamburger-Menü zum Schliessen-Kreuz
    ResponsiveNavigationBurger.classList.add('ResponsiveNavigationKreuz');
    // Einblenden des Navigationsmenü
    ResponsiveNavigation.classList.add('ResponsiveNavigationEinfahren');
    ResponsiveNavigationAnzeige = true;
  } else {
    // Wird das Navigationsmenü geöffnet/geschlossen, dann sollte an den Kopf des Dokument gescrollt werden, um ggf. Menü auch sichtbar zu machen.
    Scrolling();
    // Animation des Hamburger-Menüs, vom Schliessen-Kreuz zum Hamburger-Menü
    ResponsiveNavigationBurger.classList.remove('ResponsiveNavigationKreuz');
    // Ausblenden des Navigationsmenü
    ResponsiveNavigation.classList.remove('ResponsiveNavigationEinfahren');
    ResponsiveNavigationAnzeige = false;
  }
});
