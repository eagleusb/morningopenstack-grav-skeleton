"use strict";

$( document ).foundation();

$( document ).ready(function() {

  $( ".summer-page-container .summer-page-title h1" ).addClass( "animated lightSpeedIn" );
  $( ".summer-page-container .summer-page-content p.with-image" ).addClass( "animated fadeIn" );
  $( ".summer-blog-menu ul li" ).hover(function() { $(this).addClass( "animated pulse" ); } );
  $( ".video iframe" ).wrap( '<div class="flex-video"></div>' );

  particlesJS("head-particles", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "triangle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 45.46651032568381,
          "size_min": 100,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 250,
        "color": "#e51843",
        "opacity": 0.2078431698577523,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 2.5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  if (Modernizr.touch) {}

});
