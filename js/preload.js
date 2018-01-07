$("document").ready(function() {
// Image preloading
  var ffImages = new Array(
    "../img/paper-mountains.gif",
    "../img/about.jpg",
    "../img/works.jpg",
    "../img/connect.jpg",
    "../img/paper-mountains.jpg",
    "../img/capybara.png",
    "../img/chameleon.png",
    "../img/duck.png",
    "../img/fox.png",
    "../img/hippo.png",
    "../img/lemur.png",
    "../img/manatee.png",
    "../img/octopus.png", 
    "../img/pangolin.png",
    "../img/quokka.png", 
    "../img/squirrel.png",
    "../img/tapir.png",
    "../img/tortoise.png" 
    );

  function ffPreload(){
    for (i = 0; i < ffPreload.arguments.length; i++) {
	   ffImages[i] = new Image();
	   ffImages[i].src = ffPreload.arguments[i];
    }
  };
  
  ffPreload();

/* Smooth Scrolling Effect leveraged from https://css-tricks.com/snippets/jquery/smooth-scrolling/*/
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  })
});  