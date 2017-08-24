jQuery(document).ready(function() {
    "use strict";


/* ------- Preloader ------ */
jQuery(window).load(function() {
    jQuery(".status").fadeOut();
    jQuery(".preloader").delay(1000).fadeOut("slow");
});


/* -------- Appears Menu ------ */
	// $(window).on('ready , scroll', function() {
	//     if ($(document).scrollTop() > 30) {
        $('.hero').mousewheel(function(e){
            if( e.deltaY < 0 ){
    	        $('.main-menu').addClass('minified');
                $('.logo').addClass('mini');
          }
	    // } else {
	    //     $('.main-menu').removeClass('minified');
     //      $('.logo').removeClass('mini');
	    // }
	});

/* ---------- Hide Menu-------- */
  jQuery(".nav a").on("click", function () {
      jQuery("#nav-menu").removeClass("in").addClass("collapse");
  });

/* --------- One Page Navigation -------- */
	$('#collapsingNavbar').onePageNav({
	    currentClass: 'active',
	    scrollSpeed: 500,
	    easing: 'linear'
	});

/* ---------- Wow Js ---------- */
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       250,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    }
  }
);
wow.init();


$(document).ready(function( ) {
    $('#info h1').counterUp({
    delay: 30, // the delay time in ms
    time: 2500 // the speed time in ms
    });
    });
     
    function PopUpHide(){
        $("#cons").hide();
        };
    function minimize(){
        if ($("#cons").innerHeight() == 350){
            $("#cons").innerHeight(50);
            $(".head_cons img").hide();
            $(".text_cons").hide();
            $(".foot_cons").hide();
            $("#cons p").css("margin-top", "15px");
        }
        else {
            $("#cons").innerHeight(350);
            $(".head_cons img").show();
            $(".text_cons").show();
            $(".foot_cons").show();
            $("#cons p").css("margin-top", "70px");
        }
    };   

$(document).ready(function(){   
    $('.logo').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
//     $("#right_now").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#services").offset().top
//     }, 500);
// });
});
