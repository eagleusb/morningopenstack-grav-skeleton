"use strict";

$(document).foundation();

$( document ).ready(function() {

  $( ".summer-page-container .summer-page-title h1" ).addClass( "animated lightSpeedIn" );
  $( ".video iframe" ).wrap( '<div class="flex-video"></div>' );

  if (Modernizr.touch) {}

});
