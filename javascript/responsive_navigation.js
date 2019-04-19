var ResponsiveNavigationButton = document.querySelector('#BurgerResponsiveNavigation');
    var BurgerLinieEins = document.querySelector('#BurgerResponsiveNavigation li:first-child');
    var BurgerLinieZwei = document.querySelector('#BurgerResponsiveNavigation li:nth-child(2)');
    var BurgerLinieDrei = document.querySelector('#BurgerResponsiveNavigation li:last-child');

var ResponsiveNavigation = document.querySelector('#ResponsiveNavigation');

ResponsiveNavigationButton.addEventListener('click', function(e) {
    e.preventDefault();

    BurgerLinieEins.classList.toggle('BurgerResponsiveNavigationEins');
    BurgerLinieZwei.classList.toggle('BurgerResponsiveNavigationZwei');
    BurgerLinieDrei.classList.toggle('BurgerResponsiveNavigationDrei');

    ResponsiveNavigation.classList.toggle('ResponsiveNavigationAnzeige');
});
