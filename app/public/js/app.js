$(document).ready(function () {

    var $animationElements = $('.scroll-animation');
    var $window = $(window);

    function checkIfInView() {
        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);
        
        // Make sure to show the navigation menu if we're at the top
        if(windowTopPosition === 0) {
            $('.navbar-custom').addClass('active');
        } else {
            $('.navbar-custom').removeClass('active');
        }

        $.each($animationElements, function () {
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

            //check to see if this current container is within viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', function () {
        checkIfInView();
    });
    $window.trigger('scroll');

});

// (function() {

// jQuery for page scrolling feature - requires jQuery Easing plugin
// $('a.page-scroll').bind('click', function(event) {
//   var $anchor = $(this);
//   $('html, body').stop().animate({
//     scrollTop: ($($anchor.attr('href')).offset().top - 50)
//   }, 1250, 'easeInOutExpo');
//   event.preventDefault();
// });

// Highlight the top nav as scrolling occurs
// $('body').scrollspy({
//   target: '.navbar-fixed-top',
//   offset: 51
// });

// Closes the Responsive Menu on Menu Item Click
// $('.navbar-collapse ul li a').click(function() {
//   $('.navbar-toggle:visible').click();
// });


// Initialize WOW.js Scrolling Animations
// new WOW().init();

// })();
