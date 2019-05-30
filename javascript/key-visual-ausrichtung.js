var FensterHoehe = window.innerHeight;
var KeyVisualHoehe = document.querySelector('#KeyVisual > img').offsetHeight;

var KeyVisual = document.querySelector('#KeyVisual > img');

// Ist das Key-Visual höher, als der im Fenster verfügbare Platz, dann wird das Key-Visual mittig ausgerichtet, um die optimale und vollflächige Darstellung des Key-Visuals zu garaniteren.
if (KeyVisualHoehe > FensterHoehe) {
  // Verschiebung um die Hälfte der Höhen-Differenz zwischen dem Key-Visual und dem im Fenster verfügbaren Platzes
  var KeyVisualVerschiebung = ((KeyVisualHoehe - FensterHoehe) / 2) * (-1);

  KeyVisual.style.marginTop = KeyVisualVerschiebung + "px";
}
