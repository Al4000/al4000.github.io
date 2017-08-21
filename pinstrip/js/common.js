// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict
   
    $('#myCarousel').carousel({
	    interval: 3000
	});

})(jQuery); // End of use strict

 $(window).load(function() {
	  $(".status").fadeOut();
	  $(".preloader").delay(1000).fadeOut("slow");
});