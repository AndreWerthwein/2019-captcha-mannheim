var SendenButton = document.querySelectorAll('.SendenButton');

for (var x = 0; x < SendenButton.length; x = x + 1) {
  SendenButton[x].addEventListener('click', function(e) {
    e.preventDefault();

    var InputButton = document.querySelector('input[type="submit"]');

    InputButton.click();
  });
}
