// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    
    //Google map
    $('.map-container')
	.click(function(){$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){$(this).find('iframe').removeClass('clicked')});
    
    //Header background
    $('header').backstretch([
          "./img/fondo-prueba-1.jpg",
          "./img/fondo-prueba-2.jpg",
          "./img/fondo-prueba-3.jpg"
        ], {
            fade: 750,
            duration: 2500
        });
    

})(jQuery); // End of use strict
