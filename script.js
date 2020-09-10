$(document).ready(function(){

// intro fade start
  var divs = $('.fade');
  function fade() {
      var currentmain = $('.currentmain');
      var currentIndex = divs.index(currentmain),
          nextIndex = currentIndex + 1;
      if (nextIndex >= divs.length) {
          nextIndex = 0;
      }
      var next = divs.eq(nextIndex);
      next.stop().fadeIn(1000, function() {
          $(this).addClass('currentmain');
      });
      currentmain.stop().fadeOut(1000, function() {
          $(this).removeClass('currentmain');
          setTimeout(fade, 1200);
      });
      }
      fade();
// intro fade end




// Bugerbutton start

document.getElementById("burgerbutton").onclick = function change()
    { document.getElementById("burgerbutton").classList.toggle("change"); }


// Bugerbutton end





// Slideshow start

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

// Slideshow end

});
