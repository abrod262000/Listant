$(document).ready(function() {



});

(function() {

  var app = angular.module('listant', []);

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
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });


  // Initialize WOW.js Scrolling Animations
  new WOW().init();

  app.directive('listantHeader', function() {
    return {
      restrict: 'E',
      templateUrl: 'public/html/listant-header.html'
    };
  });

  app.directive('listantFooter', function() {
    return {
      restrict: 'E',
      templateUrl: 'public/html/listant-footer.html'
    };
  });


})();
