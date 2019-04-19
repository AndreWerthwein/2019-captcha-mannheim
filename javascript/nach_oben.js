var NachObenButton = document.querySelector('#NachOben');

//Ausführen der Funtkion "" sobald im Fenster gescrollt wird.
window.onscroll = function() {ButtonEinblenden()};

//Nach-Oben-Button einblenden
function ButtonEinblenden() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        NachObenButton.classList.add("Vorschlag");
    } else {
        NachObenButton.classList.remove("Vorschlag");
    }
}

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

//Onclick-Funktion für den Nach-Oben-Button
NachObenButton.addEventListener('click', function(e) {
    e.preventDefault();
    if (NachObenButton.classList == "Vorschlag") {
        Scrolling();
    }
});
