"use strict";

$( document ).foundation();

$( document ).ready(function() {

  $( ".summer-page-container .summer-page-title h1" ).addClass( "animated lightSpeedIn" );
  $( ".summer-page-container .summer-page-content p.with-image" ).addClass( "animated fadeIn" );
  $( ".summer-blog-menu ul li" ).hover(function() { $(this).addClass( "animated pulse" ); } );
  $( ".video iframe" ).wrap( '<div class="flex-video"></div>' );

  $('.footer-carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: false,
    variableWidth: true
  });

  particlesJS.load('head-particles', 'vendor/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  if (Modernizr.touch) {}

});
