// Swiper main
if ($('.swiper-main > .swiper-container').length) {
	var swiper = new Swiper('.swiper-container', {
	  spaceBetween: 0,
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
  //swiper cart
if ($('#basket-gift-main > .swiper-container').length) {
	var swiper = new Swiper('.swiper-container', {
	  spaceBetween: 4,
	  centeredSlides: false,
	  speed: 1000,
	  preloadImages: false,
		// lazyLoading: true,
		slidesPerView:'auto',
		autoResize: false,
	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	  },
	  navigation: {
	    nextEl: '.basket-gift-button-next',
	    prevEl: '.basket-gift-button-prev',
	  },
	});
}
//swiper details
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
	/*	$('.favour-more-a').on('click', function(){
			$('.favour-more').slideToggle().css('display', 'flex');
			return false;
		});
		$('.latest-more-a').on('click', function(){
			$('.latest-more').slideToggle().css('display', 'flex');
			return false;
		});*/
		$('.aside .more-flt').on('click', function(){
			$('.filter-more').slideToggle();
			$('.arrow-down').toggleClass('rotate');	
			return false;
		});
		$('.comment .more-flt').on('click', function(){
			$('.com-date').slideToggle();
			$('.arrow-down').toggleClass('rotate');	
			return false;
		});

	// STORE SLIDER
	$(function(){
		if ($('#controls').length > 0) {
			var picsIntervalId;
			var picsIntervalDelay = 4000;
			var picsIntervalFunc = function(){
				var lImg = $(".gallery .gi").length + 1;
				var aImg = $(".gallery .active");
				var cImg = aImg.data("order");
				var nImg = cImg + 1;
				aImg.removeClass("active");
				$('.switch a').removeClass('active');
				if (nImg == lImg) {
					nImg = 1
				}
				$(".gallery .gi[data-order='" + nImg + "']").addClass("active");
				$('.switch li:nth-child(' + nImg + ') a').addClass("active");
			}

			picsIntervalId = setInterval(picsIntervalFunc, picsIntervalDelay);

			$("#nexti, #previ").click(function(e){
				clearInterval(picsIntervalId);
				picsIntervalId = setInterval(picsIntervalFunc, picsIntervalDelay);
			});
		}
	});

	$("#nexti").click(function(e){
		lImg = $(".g-main .gi").length + 1;
		aImg = $(".g-main .active");
		cImg = aImg.data("order");
		nImg = cImg + 1;
		aImg.removeClass("active");
		$('.switch a').removeClass('active');
		if (nImg == lImg) {
			nImg = 1
		}
		$(".g-main .gi[data-order='" + nImg + "']").addClass("active");
		$('.switch li:nth-child(' + nImg + ') a').addClass("active");
		e.preventDefault();
	});

	$("#previ").click(function(e){
		lImg = $(".g-main .gi").length;
		aImg = $(".g-main .active");
		cImg = aImg.data("order");
		nImg = cImg - 1;
		aImg.removeClass("active");
		$('.switch a').removeClass('active');
		if (nImg == 0) {
			nImg = lImg;
		}
		$(".g-main .gi[data-order='" + nImg + "']").addClass("active");
		$('.switch li:nth-child(' + nImg + ') a').addClass("active");
		e.preventDefault();
	});

	$(".switch a").click(function(e){
		o = $(this);
		nImg = o.html();
		$('.switch a').removeClass('active');
		$(".gallery .gi").removeClass("active");
		o.addClass('active');
		$(".gallery .gi[data-order='" + nImg + "']").addClass("active");
		e.preventDefault();
	});

	// DETAILS RATING
	$('.set-rating ul li').click(function(){
		var mark = $(this).data('rating');		
		$(this).siblings().removeClass('active');		
		$('#rating').val(mark);		
		for(i = 1; i <= parseInt(mark); i++){
			$('.set-rating ul li[data-rating=' + i + ']').addClass('active');
		}
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

	$('.offer-bill').innerHeight($('.offer-l').innerHeight());
});