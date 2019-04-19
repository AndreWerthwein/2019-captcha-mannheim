var Popup = document.querySelectorAll('.Popup');
var PopupButton = document.querySelectorAll('.PopupButton');
var PopupSchliessen = document.querySelectorAll('.PopupSchliessen');

function AllePopupSchliessen() {
  for (var x = 0; x < Popup.length; x = x + 1) {
    Popup[x].classList.remove('Anzeige');
  }
}

for (var x = 0; x < PopupSchliessen.length; x = x + 1) {
  PopupSchliessen[x].addEventListener('click', function(e) {
    e.preventDefault();

    AllePopupSchliessen();
  });
}

for (var x = 0; x < PopupButton.length; x = x + 1) {
  PopupButton[x].addEventListener('click', function(e) {
    e.preventDefault();

    var PopupThema = this.dataset.popup;
    var PopupAktuell = document.querySelector('.Popup[data-popup="' + PopupThema + '"]');

    AllePopupSchliessen();

    PopupAktuell.classList.add('Anzeige');
  });
}

document.onkeydown = function(EscapeTaste) {

    EscapeTaste = EscapeTaste || window.event;

    if (EscapeTaste.keyCode == 27) {
        AllePopupSchliessen();
    }
};
