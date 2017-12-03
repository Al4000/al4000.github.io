$(function() {
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

//preloader
$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	$('.annot').css({"animation" : "grow 7s linear 1000ms"});
});

//menu
var explainTrigger = false;
var $hamburger = $(".hamburger");
 
  $('#btn-menu').click(function(e){
        e.preventDefault();
		if (explainTrigger==false) {
			$("#my-menu").css('display', 'block');
			$('#my-menu').animate({right:'0px'},500);
			$(".menu").removeClass("bg_orange");		
			explainTrigger=true;
			$hamburger.addClass("is-active");
		} else {			
			 $.when( $('#my-menu').animate({right:'-400px'},500) ).then(
			  function(){
				$('#my-menu').hide();
			});
			explainTrigger=false;
			$hamburger.removeClass("is-active");
			if ($(window).scrollTop() > 300) {
				$(".menu").addClass("bg_orange");
			}	
		}
	});

$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		$(".back").addClass("bg_orange");
	}	else {
		$(".back").removeClass("bg_orange");
	}
});

//scroll
$("#scroll, .services_a").click(function() {
    $('html, body').animate({
        scrollTop: $(".wrap").offset().top
    }, 500);
   return false;
});

$("#offer_a").click(function() {
    $('html, body').animate({
        scrollTop: $(".bid").offset().top
    }, 700);
   return false;
});

$('#airplane').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 700);
    return false;
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 900) {
        $("#airplane img").addClass("air_on");
    } else {
        $("#airplane img").removeClass("air_on");
    } 
});

$(window).scroll(function() {
    if (explainTrigger == false && $(this).scrollTop() > 300) {
        $(".menu").addClass("bg_orange");
    } else {
        $(".menu").removeClass("bg_orange");
    } 
});

//main hovers
$(".hover").mouseleave(function(){
  $(this).removeClass("hover");
}); 
 
$(".service").mouseenter(function(){
	var _id = $(this).data('id');
 	$(".show").eq(_id).css('opacity', '1');
 	$(".about").css('zIndex', '-1');
 	if ($(window).innerWidth() > 768){
 		$(".show_desc").eq(_id).css({'width' : '50%'});
 	} else 
 	$(".show_desc").eq(_id).css({'width' : '100%'});
});

$(".service").mouseleave(function(){
	var _id = $(this).data('id');
	$(".show").eq(_id).css('opacity', '0');
 	$(".show_desc").eq(_id).css({'width' : '0'});
 	$(".about").css('zIndex', '2');
});

//ABOUT
$(document).ready(function( ) {
  $('.circ_or p, .circ_trans p').counterUp({
	  delay: 30,
	  time: 2500
  });
});