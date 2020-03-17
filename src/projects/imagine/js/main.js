$(document).ready(function() {
  $(window).scroll(function() {
    let st = $(this).scrollTop(); /* количетсво прокрученных пикселей */
    let h = $('.city').outerHeight(); /* высота секции city */
    let p = st/h*100 /* процент прокрутки секции city*/      
    $("header").css("transform", "translateY(" + st / 2 + "px)");
    $(".background").css("transform", "translateY(" + st / 1.5 + "px)");
    $(".moscow").css("transform", "translateY(" + st / 1.7 + "px)");
    $(".house_2").css("transform", "translateY(" + st / 1.7 + "px)");
    $(".house_3").css("transform", "translateY(" + st / 1.6 + "px)");
    $(".house_1").css("transform", " translateY(" + st / 2 + "px)");
    $(".bridge").css("transform", "translateY(" + st / 2.5 + "px)");
    $(".lighters").css("transform", "translateY(" + st / 2.9 + "px)");
    $(".hero").css("transform", "translateY(" + st / 2.8 + "px)");
    // $(".hero").width(p +"px");
  });
});
