$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

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
			$('#my-menu').animate({right:'0px'},250);
			explainTrigger=true;
			$hamburger.addClass("is-active");
		} else {
			$('#my-menu').animate({right:'-400px'},250);
			explainTrigger=false;
			$hamburger.removeClass("is-active");
		}
	});

$("#scroll").click(function() {
    $('html, body').animate({
        scrollTop: $(".wrap").offset().top
    }, 500);
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

$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
 
$("#exterier").mouseenter(function(){
	$(".exterier_bg").css('opacity', '1');
	$(".desc_over_ext").css({'width' : '50%'});
	$(".about").css('zIndex', '-1');
});
$("#interier").mouseenter(function(){
	$(".interier_bg").css('opacity', '1');
	$(".desc_over_int").css({'width' : '50%'});
	$(".about").css('zIndex', '-1');
});
$("#complex").mouseenter(function(){
	$(".complex_bg").css('opacity', '1');
	$(".desc_over_com").css({'width' : '50%'});
	$(".about").css('zIndex', '-1');
});
$("#tour").mouseenter(function(){
	$(".tour_bg").css('opacity', '1');
	$(".desc_over_tour").css({'width' : '50%'});
	$(".about").css('zIndex', '-1');
});
$("#style").mouseenter(function(){
	$(".style_bg").css('opacity', '1');
	$(".desc_over_st").css({'width' : '50%'});
	$(".about").css('zIndex', '-1');
});
$("#object").mouseenter(function(){
	$(".object_bg").css('opacity', '1');
	$(".desc_over_ob").css({'width' : '50%'});
	$(".about").css('zIndex', '-1');
});
$("#animation").mouseenter(function(){
	$(".animate_bg").css('opacity', '1');
	$(".desc_over_an").css({'width' : '50%'});
	$(".about").css('zIndex', '-1');
});
$("#develop").mouseenter(function(){
	$(".develop_bg").css('opacity', '1');
	$(".desc_over_dev").css({'width' : '50%'});
	$(".about").css('zIndex', '-1');
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