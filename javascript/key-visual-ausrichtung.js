var FensterBreite = window.innerWidth;
var KeyVisualBreite = document.querySelector('#KeyVisual > img').offsetWidth;

var KeyVisual = document.querySelector('#KeyVisual > img');

function KeyVisualAusrichtung() {
  // Ist das Key-Visual breiter, als der im Fenster verfügbare Platz, dann wird das Key-Visual mittig ausgerichtet, um die optimale und vollflächige Darstellung des Key-Visuals zu garaniteren.
  if (KeyVisualBreite < FensterBreite) {
    // Verschiebung um die Hälfte der Breiten-Differenz zwischen dem Key-Visual und dem im Fenster verfügbaren Platzes
    var KeyVisualVerschiebung = ((FensterBreite - KeyVisualBreite) / 2);

    KeyVisual.style.marginLeft = KeyVisualVerschiebung + "px";
  } else if (KeyVisualBreite > FensterBreite) {
    var KeyVisualVerschiebung = ((KeyVisualBreite - FensterBreite) / 2) * (-1);

    KeyVisual.style.marginLeft = KeyVisualVerschiebung + "px";
  }
}

KeyVisualAusrichtung();

window.addEventListener('resize', function() {
  FensterBreite = window.innerWidth;
  KeyVisualAusrichtung();
});

window.addEventListener('orientationchange', function() {
  FensterBreite = window.innerWidth;
  KeyVisualAusrichtung();
});
