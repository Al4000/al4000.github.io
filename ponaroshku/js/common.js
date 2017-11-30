// Swiper
if ($('.swiper-main > .swiper-container').length) {
	var swiper = new Swiper('.swiper-container', {
	  spaceBetween: 30,
	  centeredSlides: true,
	  speed: 1000,
	  autoplay: {
	    delay: 2500,
	    disableOnInteraction: false,
	  },
	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	  },
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	});
}

if ($('.details-slide > .swiper-container').length) {
	var galleryTop = new Swiper('.gallery-top', {
	  spaceBetween: 10,
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	});
	var galleryThumbs = new Swiper('.gallery-thumbs', {
	  spaceBetween: 10,
	  centeredSlides: true,
	  slidesPerView: 'auto',
	  touchRatio: 0.2,
	  slideToClickedSlide: true
	});
	galleryTop.controller.control = galleryThumbs;
	galleryThumbs.controller.control = galleryTop;
/*	$('.gallery-thumbs > .swiper-wrapper').css('transform', 'translate3d(0px, 0px, 0px)');
	$('.swiper-slide, .swiper-button-prev, .swiper-button-next').on('click', function(){
		$('.gallery-thumbs > .swiper-wrapper').css('transform', 'translate3d(0px, 0px, 0px)');
	})*/
}

$(document).ready(function(){
	$('.favour-more-a').on('click', function(){
		$('.favour-more').slideToggle().css('display', 'flex');
		return false;
	});
	$('.latest-more-a').on('click', function(){
		$('.latest-more').slideToggle().css('display', 'flex');
		return false;
	});
	$('.aside .circle').on('click', function(){
		$('.filter-more').slideToggle();	
		return false;
	});
	$('.comment .circle').on('click', function(){
		$('.com-date').slideToggle();	
		return false;
	});

	// UP_TAIL
	var doc = document.documentElement;
	var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
	var atTop = (top > 0) ? true : (!$(document).scrollTop());
	var hideUp = false;
	$(window).scroll(function(){
		var posTop = $(window).scrollTop();
		if ($(document).scrollTop() === 0 && !atTop && hideUp) {
			$('#up').animate({'bottom': '100%'}, 4800, function(){
				$('#up').css('bottom', '-200px');
			});
			$('#up-tail').fadeOut('slow');
			hideUp = false;
			atTop = true;
		} else if (atTop && $('#up').css('bottom') == '-200px') {
			$('#up').animate({'bottom': '15%'}, 4800, function(){
				$('#up').css('bottom', '15%');
			});
			$('#up-tail').show();
			atTop = false;
		}
	});

	$('#up').click(function(){
		$("body,html").animate({
			scrollTop:0
		}, 500);
		hideUp = true;
		return false;
	});

	// INPUT
	$('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  // nstSlider
  if ($('.nstSlider').length) {
	  $('.nstSlider').nstSlider({
	    "crossable_handles": false,
	    "left_grip_selector": ".leftGrip",
	    "right_grip_selector": ".rightGrip",
	    "value_bar_selector": ".bar",
	    "value_changed_callback": function(cause, leftValue, rightValue) {
        $(this).parent().find('.leftLabel').text(leftValue);
        $(this).parent().find('.rightLabel').text(rightValue);
	    }
		});
	}
});