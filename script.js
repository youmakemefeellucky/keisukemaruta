$(document).ready(function(){

// menu function

    // show clicked menu only
    $( ".button" ).click(function() {
      var $buttons = $( "#" + event.target.id + "page");
      $buttons.siblings( ".page" ).fadeOut("slow","swing");
      $buttons.fadeIn("slow","swing");
      $( "#workslist, #work" ).scrollTop(0);
      return false;
      });

      // show circle on clicked element
      $( ".menubutton" ).click(function() {
        var x = $(event.target).position().top;
        var y = $(event.target).position().left;
        var z = x + 20;
        $( "#circle" ).css({left:y,top:z,position:"absolute"});
        $( "#circle" ).show();
      });


///////////////////////////////////////// NEED TO WORK MOREEEEEE /////////
      $( ".articlename" ).click(function() {
        var a = $(event.target).offset().top;
        var b = $(event.target).offset().left;
        var c = a - 150;

        $( "#circle2" ).css({left:b,top:c,position:"absolute"});
        $( "#circle2" ).show();
      });
///////////////////////////////////////// NEED TO WORK MOREEEEEE /////////


      // circle reset
      $( "#home" ).click(function() {
        $( "#circle, #circle2" ).hide();
      });
      $( "#about" ).click(function() {
        $( "#circle2" ).hide();
      });

// fade function
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


// workpage function

    // show clicked article only
    $( ".articlename" ).click(function() {
      $( "#work" ).animate({
          scrollTop: $("html").offset().top
      }, 0);
      var $article = $( "#" + event.target.id + "page").show();
      $article.siblings( ".workarticle" ).hide();
    });

    // workarticle reset
    $( "#home, #about" ).click(function() {
      $( ".workarticle" ).hide();
    });

});
