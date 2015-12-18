"use strict";

$( document ).foundation();

$( document ).ready(function() {

  $( ".summer-page-container .summer-page-title h1" ).addClass( "animated lightSpeedIn" );
  $( ".summer-page-container .summer-page-content p.with-image" ).addClass( "animated fadeIn" );
  $( ".summer-blog-menu ul li" ).hover(function() { $(this).addClass( "animated pulse" ); } );
  $( ".video iframe" ).wrap( '<div class="flex-video"></div>' );

  particlesJS.load('head-particles', 'user/themes/notepad/js/vendor/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  if (Modernizr.touch) {}

});
