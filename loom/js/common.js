$(document).ready(function(){
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#header").addClass('head_scroll');
        } else {
            $("#header").removeClass('head_scroll');
        }
    });
});

$(window).load(function() {
          $(".status").fadeOut();
          $(".preloader").delay(1000).fadeOut("slow");
      });