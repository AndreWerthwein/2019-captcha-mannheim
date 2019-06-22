var FensterHoehe = window.innerHeight;
var KeyVisualHoehe = document.querySelector('#KeyVisual > img').offsetHeight;

var KeyVisual = document.querySelector('#KeyVisual > img');

function KeyVisualAusrichtung() {
  // Ist das Key-Visual breiter, als der im Fenster verfügbare Platz, dann wird das Key-Visual mittig ausgerichtet, um die optimale und vollflächige Darstellung des Key-Visuals zu garaniteren.
  if (KeyVisualHoehe < FensterHoehe) {
    // Verschiebung um die Hälfte der Breiten-Differenz zwischen dem Key-Visual und dem im Fenster verfügbaren Platzes
    var KeyVisualVerschiebung = ((FensterHoehe - KeyVisualHoehe) / 2);

    KeyVisual.style.marginTop = KeyVisualVerschiebung + "px";
  } else if (KeyVisualHoehe > FensterHoehe) {
    var KeyVisualVerschiebung = ((KeyVisualHoehe - FensterHoehe) / 2) * (-1);

    KeyVisual.style.marginTop = KeyVisualVerschiebung + "px";
  }
}

KeyVisualAusrichtung();

window.addEventListener('resize', function() {
  FensterBreite = window.innerHeight;
  KeyVisualAusrichtung();
});

window.addEventListener('orientationchange', function() {
  FensterBreite = window.innerHeight;
  KeyVisualAusrichtung();
});

// Handelt es sich um ein Mobiles Endgerät, muss eventuelle das Key-Visual gegen ein Hochformat getauscht werden
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
  var FensterBreite = window.innerWidth;
  if (FensterHoehe > FensterBreite) {
    KeyVisual.src = "medien/keyvisual-hochformat.jpg";
    KeyVisual.style.width = "auto";
    KeyVisual.style.height= "calc(100vh - (2 * 94.8px))";

    KeyVisual.style.marginTop = 94.8 + "px";

    console.log("Fenstergröße: " + FensterBreite);
    console.log("Key-Visual-Größe: " + KeyVisual.clientWidth);

    if (FensterBreite < KeyVisual.offsetWidth) {
      var Verschiebung = ((KeyVisual.offsetWidth - FensterBreite) / 2) * (-1);

      KeyVisual.style.marginLeft = Verschiebung + "px";
    }
    // KeyVisualAusrichtung();
  }
}
