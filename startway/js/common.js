$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail


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

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});



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

$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
 
$("#exterier").mouseenter(function(){
	$(".exterier_bg").css('opacity', '1');
	$(".about").css('zIndex', '-1');
	if ($(window).innerWidth() > 768){
	$(".desc_over_ext").css({'width' : '50%'});
} else 
	$(".desc_over_ext").css({'width' : '100%'});
});

$("#interier").mouseenter(function(){
	$(".interier_bg").css('opacity', '1');
	$(".about").css('zIndex', '-1');
	if ($(window).innerWidth() > 768){
	$(".desc_over_int").css({'width' : '50%'});
	} else 
	$(".desc_over_int").css({'width' : '100%'});
});

$("#complex").mouseenter(function(){
	$(".complex_bg").css('opacity', '1');
	$(".about").css('zIndex', '-1');
	if ($(window).innerWidth() > 768){
	$(".desc_over_com").css({'width' : '50%'});
	} else 
	$(".desc_over_com").css({'width' : '100%'});
});
	

$("#tour").mouseenter(function(){
	$(".tour_bg").css('opacity', '1');
	$(".about").css('zIndex', '-1');
	if ($(window).innerWidth() > 768){
	$(".desc_over_tour").css({'width' : '50%'});
	} else 
	$(".desc_over_tour").css({'width' : '100%'});
});

$("#style").mouseenter(function(){
	$(".style_bg").css('opacity', '1');
	$(".about").css('zIndex', '-1');
	if ($(window).innerWidth() > 768){
	$(".desc_over_st").css({'width' : '50%'});
	} else 
	$(".desc_over_st").css({'width' : '100%'});
});

$("#object").mouseenter(function(){
	$(".object_bg").css('opacity', '1');
	$(".about").css('zIndex', '-1');
	if ($(window).innerWidth() > 768){
	$(".desc_over_ob").css({'width' : '50%'});
	} else 
	$(".desc_over_ob").css({'width' : '100%'});
});

$("#animation").mouseenter(function(){
	$(".animate_bg").css('opacity', '1');
	$(".about").css('zIndex', '-1');
	if ($(window).innerWidth() > 768){
	$(".desc_over_an").css({'width' : '50%'});
	} else 
	$(".desc_over_an").css({'width' : '100%'});
});

$("#develop").mouseenter(function(){
	$(".develop_bg").css('opacity', '1');
	$(".about").css('zIndex', '-1');
	if ($(window).innerWidth() > 768){
	$(".desc_over_dev").css({'width' : '50%'});
	} else 
	$(".desc_over_dev").css({'width' : '100%'});
});

$("#exterier").mouseleave(function(){
	$(".exterier_bg").css('opacity', '0');
	$(".desc_over_ext").css({'width' : '0'});
	$(".about").css('zIndex', '2');
});
$("#interier").mouseleave(function(){
	$(".interier_bg").css('opacity', '0');
	$(".desc_over_int").css({'width' : '0'});
	$(".about").css('zIndex', '2');
});
$("#complex").mouseleave(function(){
	$(".complex_bg").css('opacity', '0');
	$(".desc_over_com").css({'width' : '0'});
	$(".about").css('zIndex', '2');
});
$("#tour").mouseleave(function(){
	$(".tour_bg").css('opacity', '0');
	$(".desc_over_tour").css({'width' : '0'});
	$(".about").css('zIndex', '2');
});
$("#style").mouseleave(function(){
	$(".style_bg").css('opacity', '0');
	$(".desc_over_st").css({'width' : '0'});
	$(".about").css('zIndex', '2');
});
$("#object").mouseleave(function(){
	$(".object_bg").css('opacity', '0');
	$(".desc_over_ob").css({'width' : '0'});
	$(".about").css('zIndex', '2');
});
$("#animation").mouseleave(function(){
	$(".animate_bg").css('opacity', '0');
	$(".desc_over_an").css({'width' : '0'});
	$(".about").css('zIndex', '2');
});
$("#develop").mouseleave(function(){
	$(".develop_bg").css('opacity', '0');
	$(".desc_over_dev").css({'width' : '0'});
	$(".about").css('zIndex', '2');
});

//shuffle
 var shuffleme = (function( $ ) {
  'use strict';
  var $grid = $('#grid'), //locate what we want to sort 
      $filterOptions = $('.portfolio-sorting li'),  //locate the filter categories
      $sizer = $grid.find('.shuffle_sizer'),    //sizer stores the size of the items

  init = function() {

    // None of these need to be executed synchronously
    setTimeout(function() {
      listen();
      setupFilters();
    }, 100);

    // instantiate the plugin
    $grid.shuffle({
      itemSelector: $('.proj'),
      sizer: $sizer    
    });
  },

  // Set up button clicks
  setupFilters = function() {
    var $btns = $filterOptions.children();
    var $port_btn = $('.portfolio button');
    var $all_li = $('#all_li');
    $btns.on('click', function(e) {
      e.preventDefault();
      var $this = $(this),
          isActive = $this.hasClass( 'active' ),
          group = isActive ? 'all' : $this.data('group');

      // Hide current label, show current label in title
      if ( !isActive ) {
        $('.portfolio-sorting li a').removeClass('active');
      }

      $this.toggleClass('active');

      // Filter elements
      $grid.shuffle( 'shuffle', group );
    });

    $btns = null;
    $port_btn.on('click', function(e) {
      e.preventDefault();
      var $this = $all_li,
          isActive = $this.hasClass( 'active' ),
          group = isActive ? 'all' : $this.data('group');
       
      // Hide current label, show current label in title
      if ( !isActive ) {
        $('.portfolio-sorting li a').removeClass('active');
      }

      $this.toggleClass('active');

      // Filter elements
      $grid.shuffle( 'shuffle', group );
    });

    $btns = null;
  },

  // Re layout shuffle when images load. This is only needed
  // below 768 pixels because the .picture-item height is auto and therefore
  // the height of the picture-item is dependent on the image
  // I recommend using imagesloaded to determine when an image is loaded
  // but that doesn't support IE7
  listen = function() {
    var debouncedLayout = $.throttle( 300, function() {
      $grid.shuffle('update');
    });

    // Get all images inside shuffle
    $grid.find('img').each(function() {
      var proxyImage;

      // Image already loaded
      if ( this.complete && this.naturalWidth !== undefined ) {
        return;
      }

      // If none of the checks above matched, simulate loading on detached element.
      proxyImage = new Image();
      $( proxyImage ).on('load', function() {
        $(this).off('load');
        debouncedLayout();
      });

      proxyImage.src = this.src;
    });

    // Because this method doesn't seem to be perfect.
    setTimeout(function() {
      debouncedLayout();
    }, 500);
  };      

  return {
    init: init
  };
}( jQuery ));

 $('.portfolio button').on('click',function(){
   	$('.portfolio-sorting li a').removeClass("selected");
 });

$(document).ready(function()
{
  shuffleme.init(); //filter portfolio
});