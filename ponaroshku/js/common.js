// Swiper
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
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


$(document).ready(function(){
	$(".email-input>input").on("focus", function(){
		$(".bg-email").css('opacity', 0.2);
	})
});

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