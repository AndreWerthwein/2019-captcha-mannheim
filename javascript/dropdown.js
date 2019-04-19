var DropdownHeader = document.querySelectorAll('dt');
var DropdownInhalt = document.querySelectorAll('dd');

var Dropdown = "";

function AlleDropdownsMinimieren() {
  for (var x = 0; x < DropdownInhalt.length; x = x + 1) {
    DropdownInhalt[x].classList.add('DropdownAnzeige');
  }
}

for (var x = 0; x < DropdownHeader.length; x = x + 1) {
  DropdownHeader[x].addEventListener('click', function(e) {
    e.preventDefault();

    var AktuellesDropdown = this.dataset.dropdown;

    if (Dropdown === AktuellesDropdown) {
      AlleDropdownsMinimieren();
      Dropdown = "";
    } else {
      AlleDropdownsMinimieren();

      var AktuellesDropdownInhalt = document.querySelector('dd[data-dropdown="' + AktuellesDropdown + '"]');

      AktuellesDropdownInhalt.classList.remove('DropdownAnzeige');
      Dropdown = AktuellesDropdown;
    }

  });
}
