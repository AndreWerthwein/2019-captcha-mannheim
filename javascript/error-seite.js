function AusrichtungGrafikNachricht() {
  var Grafik = document.querySelector('#ErrorSeiteLogo');
  // console.log("Grafik:" + Grafik.offsetHeight);

  var Nachricht = document.querySelector('#ErrorNachricht');
  var NachrichtHoehe = parseInt(Nachricht.offsetHeight);
  // console.log("Nachricht:" + NachrichtHoehe);

  Grafik.style.height = (window.innerHeight - NachrichtHoehe) + "px";
  // console.log("Grafik:" + Grafik.offsetHeight);
}

AusrichtungGrafikNachricht();

window.addEventListener('resize', function() {
  AusrichtungGrafikNachricht();
});

setTimeout(function() {
  window.location.href="https://captcha-mannheim.de";
}, 8000);
