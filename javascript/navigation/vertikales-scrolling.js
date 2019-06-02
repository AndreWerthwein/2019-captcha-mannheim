var ScrollingButton = document.querySelectorAll('.ScrollingButton');

for (var x = 0; x < ScrollingButton.length; x = x + 1) {
  ScrollingButton[x].addEventListener('click', function(e) {
    e.preventDefault();

    var Sprungziel = this.dataset.sprungziel;
    var NeuePosition = document.querySelector('#' + Sprungziel).offsetTop;

        document.body.scrollTo({
            top: NeuePosition,
            behavior : 'smooth'
        });

        document.documentElement.scrollTo({
            top: NeuePosition,
            behavior : 'smooth'
        });
  });
}
