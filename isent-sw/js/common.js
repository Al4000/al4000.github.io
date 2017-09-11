$(document).ready(function() {

	$(".auth_buttons").click(function() {
		$(this).next().slideToggle();
	});
	$(".main_mnu_button").click(function() {
		$(".maian_mnu ul").slideToggle();
	});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	// var austDay = new Date($(".countdown").attr("date-time"));
	// $(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	// $(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	// $(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	// $(".block").waypoint(function(direction) {
	// 	if (direction === "down") {
	// 		$(".class").addClass("active");
	// 	} else if (direction === "up") {
	// 		$(".class").removeClass("deactive");
	// 	};
	// }, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	// var owl = $(".carousel");
	// owl.owlCarousel({
	// 	items : 3,
	// 	autoHeight : true
	// });
	// owl.on("mousewheel", ".owl-wrapper", function (e) {
	// 	if (e.deltaY > 0) {
	// 		owl.trigger("owl.prev");
	// 	} else {
	// 		owl.trigger("owl.next");
	// 	}
	// 	e.preventDefault();
	// });
	// $(".next_button").click(function() {
	// 	owl.trigger("owl.next");
	// });
	// $(".prev_button").click(function() {
	// 	owl.trigger("owl.prev");
	// });

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
 });


//Animation
$(document).ready(function(){
	$('body').fadeIn(500).css('opacity', '1');
	$('body').addClass('animated slideInUp');
	$('#slide_1 p').addClass("animated fadeInRight");
	$('.logo_head').addClass('animated fadeInLeft');
});

$(window).mousewheel(function(e){  
	e.preventDefault();
	if( $('#slide_1').hasClass('swiper-slide-active') || $('#slide_1').hasClass('swiper-slide-dupclicate-active')){

		$('body').addClass('animated slideInUp');
		$('#slide_1 p').addClass("animated fadeInRight");
		$('.logo_head').addClass('animated fadeInLeft');

		$('li').removeClass('animated bounceInDown');
    $('#slide_2 p').removeClass("animated fadeIn");
    $('#slide_2 button').removeClass("animated fadeInLeft");
	}
  else if( $('#slide_2').hasClass('swiper-slide-active')){ 
  	$('body').removeClass('animated slideInUp');
  	$('#slide_1 p').removeClass("animated fadeInRight");
		$('.logo_head').removeClass('animated fadeInLeft');
		
		$('.li').css('display', 'none');
		setTimeout(function(){ 
	    $("#li1").css('display', 'block').addClass("animated bounceInDown"); 
	  },200);
	  setTimeout(function(){ 
	    $("#li2").css('display', 'block').addClass("animated bounceInDown"); 
	  },400);
	  setTimeout(function(){ 
	    $("#li3").css('display', 'block').addClass("animated bounceInDown"); 
	  },600);
	  setTimeout(function(){ 
	    $("#li4").css('display', 'block').addClass("animated bounceInDown"); 
	  },800);				
		
    $('#slide_2 p').addClass("animated fadeIn");
    $('#slide_2 button').addClass("animated fadeInLeft");

    $('.dis_text').removeClass('animated fadeInLeft');
    $('.join_vk').removeClass('animated bounceInDown');
    $('.discount h1').removeClass('animated bounceInDown'); 
		$('#slide_3 button').removeClass("animated pulse");
	}
  else if( $('#slide_3').hasClass('swiper-slide-active')){ 
  	$('li').removeClass('animated bounceInDown');
    $('#slide_2 p').removeClass("animated fadeIn");
    $('#slide_2 button').removeClass("animated fadeInLeft");

    $('#slide_3 button').addClass("animated pulse");
    $('.dis_text').addClass('animated fadeInLeft');
    $('.join_vk').addClass('animated bounceInDown');
    $('.discount h1').addClass('animated bounceInDown');

    $('.schemma_pic img').removeClass('animated slideInDown');      	
	}
	else if( $('#slide_4').hasClass('swiper-slide-active')){ 
    $('.dis_text').removeClass('animated fadeInLeft');
    $('.join_vk').removeClass('animated bounceInDown');
    $('.discount h1').removeClass('animated bounceInDown');
		$('#slide_3 button').removeClass("animated pulse");
		
  	$('.schemma_pic img').css('opacity', '0');
		setTimeout(function(){ 
	    $(".block1 img").css('opacity', '1').addClass("animated slideInDown"); 
	  },200);
	  setTimeout(function(){ 
	    $(".block2 img").css('opacity', '1').addClass("animated slideInDown"); 
	  },500);
	  setTimeout(function(){ 
	    $(".block3 img").css('opacity', '1').addClass("animated slideInDown"); 
	  },800);
	  setTimeout(function(){ 
	    $(".block4 img").css('opacity', '1').addClass("animated slideInDown"); 
	  },1100);

  	$('.adv_text p').removeClass('animated fadeInRight');
		$('.adv_text img').removeClass('animated slideInUp');
	}
	else if( $('#slide_5').hasClass('swiper-slide-active')){ 
		$('.schemma_pic img').removeClass('animated slideInDown');

		$('.adv_text p').addClass('animated fadeInRight');
		$('.adv_text img').css('opacity', '0');
		setTimeout(function(){ 
	    $("#circ_letter").css('opacity', '1').addClass("animated slideInUp"); 
	  },200);
	  setTimeout(function(){ 
	    $("#circ_mobile").css('opacity', '1').addClass("animated slideInUp"); 
	  },500);
	  setTimeout(function(){ 
	    $("#circ_heart").css('opacity', '1').addClass("animated slideInUp"); 
	  },800);

		$('.review h1').removeClass('animated fadeInDown');
		$('.review h2').removeClass('animated slideInUp');
	}
	else if( $('#slide_6').hasClass('swiper-slide-active')){
		$('.adv_text p').removeClass('animated fadeInRight');
		$('.adv_text img').removeClass('animated slideInUp');

		$('.review h1').addClass('animated fadeInDown');
		$('.review h2').addClass('animated slideInUp');

		$('#slide_7 button').removeClass('animated rubberBand');
		$('#slide_7 img').removeClass('animated slideInDown');
	}
	else if( $('#slide_7').hasClass('swiper-slide-active')){
		$('.review h1').removeClass('animated fadeInDown');
		$('.review h2').removeClass('animated slideInUp');

		$('#slide_7 button').addClass('animated rubberBand');
		$('#slide_7 img').addClass('animated slideInDown');

		$('#slide_8 button').removeClass('animated bounce');
	}
	else if( $('#slide_8').hasClass('swiper-slide-active')){
		$('#slide_7 button').removeClass('animated rubberBand');
		$('#slide_7 img').removeClass('animated slideInDown');

		$('#slide_8 button').addClass('animated bounce');

		$('.social img').removeClass('animated tada');
		$('#slide_9 button').removeClass('animated slideInUp');
	}
	else if( $('#slide_9').hasClass('swiper-slide-active') || $('#slide_9').hasClass('swiper-slide-duplicate-active')){
		$('#slide_8 button').removeClass('animated bounce');

		$('.social img').addClass('animated tada');
		$('#slide_9 button').addClass('animated slideInUp');

		$('#slide_1 p').removeClass("animated fadeInRight");
		$('.logo_head').removeClass('animated fadeInLeft');
	}
});

//Swiper

var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	direction: 'vertical',
	slidesPerView: 1,
	paginationClickable: true,
	spaceBetween: 30,
	mousewheelControl: true,
	effect: 'fade',
	loop: false, 
	autoplay: false,
  autoplayDisableOnInteraction: false,
	onSlideChangeStart: function(s) {  
    var x = s.activeIndex;
  },
  onInit: function(swiper){
  	var cont_a = $('#cont_a');   
  	var bid_link = $('.bid_link'); 
  	cont_a.click(function(){
    	swiper.slideNext();
  	});
  	bid_link.click(function(){
  		swiper.slideTo(8);
  	})
  }
});	