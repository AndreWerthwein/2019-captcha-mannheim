var ArchivNavigationButton = document.querySelector('#OnePagerNavigation > div > section:last-child');

var ArchivNavigationJahre = document.querySelector('#OnePagerNavigation > div > section:last-child > ul');
var ArchivNavigationAlleJahre = document.querySelectorAll('#OnePagerNavigation > div > section:last-child > ul > li').length;

var AbstandListenItems = 5; // "margin-top: 5px 0px 0px 0px" aus "struktur.sass"
var HoeheListenItems = 56.4; // Computed Ausgabe aus Google Chrome

var ErrechneteHoehe =  ((ArchivNavigationAlleJahre * 5) - 5) + (ArchivNavigationAlleJahre * HoeheListenItems);
    ErrechneteHoehe = ErrechneteHoehe + "px";

var ArchivNavigationAnzeige = false;

ArchivNavigationButton.addEventListener('click', function() {
  if (ArchivNavigationAnzeige === false) {
    ArchivNavigationJahre.style.height = ErrechneteHoehe;
    ArchivNavigationAnzeige = true;
  } else {
    ArchivNavigationJahre.style.height = 0 + "px";
    ArchivNavigationAnzeige = false;
  }
});
