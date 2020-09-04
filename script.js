$(document).ready(function(){




// intro fade function
  var divs = $('.fade');
  function fade() {
      var current = $('.current');
      var currentIndex = divs.index(current),
          nextIndex = currentIndex + 1;
      if (nextIndex >= divs.length) {
          nextIndex = 0;
      }
      var next = divs.eq(nextIndex);
      next.stop().fadeIn(800, function() {
          $(this).addClass('current');
      });
      current.stop().fadeOut(800, function() {
          $(this).removeClass('current');
          setTimeout(fade, 1200);
      });
      }
      fade();
// intro fade ends




// Slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Slideshow ends

});
