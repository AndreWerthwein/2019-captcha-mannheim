var SponsoringPaketeButton = document.querySelectorAll('#SponsoringPakete > nav > ul > li:not(:first-child)');
var SponsoringPaketeInformation = document.querySelectorAll('#SponsoringPakete > div > section');

var SponsoringPaketeAuswahlButton = document.querySelector('#SponsoringPakete > nav > ul > li:first-child');
var SponsoringPaketeNavigation = document.querySelector('#SponsoringPakete > nav');

SponsoringPaketeAuswahlButton.addEventListener('click', function(e) {
  e.preventDefault();

    SponsoringPaketeNavigation.classList.toggle('SponsoringPaketOptionen');
})

function AlleSponsoringPaketeAusblenden() {
  for (var x = 0; x < SponsoringPaketeInformation.length; x = x + 1) {
    SponsoringPaketeInformation[x].classList.remove('Anzeige');
  }
}

for (var x = 0; x < SponsoringPaketeButton.length; x = x + 1) {
  SponsoringPaketeButton[x].addEventListener('click', function(e) {
    e.preventDefault();

    var SponsoringPaketTyp = this.dataset.sponsoringpaket;
    var AktuellesSponsoringPaket = document.querySelector('#SponsoringPakete > div > section[data-sponsoringpaket="' + SponsoringPaketTyp + '"]');

    AlleSponsoringPaketeAusblenden();
    AktuellesSponsoringPaket.classList.add('Anzeige');

    SponsoringPaketeNavigation.classList.toggle('SponsoringPaketOptionen');
  });
}
