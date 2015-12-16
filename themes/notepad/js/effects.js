"use strict";

$(document).foundation();

$( document ).ready(function() {

  $( ".summer-page-container .summer-page-title h1" ).addClass( "animated lightSpeedIn" );
  $( ".summer-post-content .post .video" ).wrap( '<div class="flex-video"></div>' );

  fluidvids.init({
    selector: ['iframe', 'object'], // runs querySelectorAll()
    players: ['www.youtube.com', 'player.vimeo.com'] // players to support
  });

  if (Modernizr.touch) {}

});
