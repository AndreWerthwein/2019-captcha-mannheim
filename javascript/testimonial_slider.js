var TestimonialSliderBreite = document.querySelector('#TestimonialSlider').offsetWidth;

var TestimonialSlider = document.querySelector('#TestimonialSlider > div');
var Testimonials = document.querySelectorAll('#TestimonialSlider > div > section').length;

var PositionX = 0;
var PositionXMaximum = PositionX - (TestimonialSliderBreite * Testimonials);

function TestimonialSliderBewegung() {
  setTimeout(function() {
    PositionX = PositionX - TestimonialSliderBreite;

    if (PositionX === PositionXMaximum) {
      TestimonialSlider.style.marginLeft = "0px";
      PositionX = 0;
    } else {
      TestimonialSlider.style.marginLeft = PositionX  + "px";
    }
  }, 8000);
}

setInterval(function() {
    TestimonialSliderBewegung();
}, 8000);
