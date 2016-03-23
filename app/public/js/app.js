$(document).ready(function() {

  $('#try-me').on("click", function(){
    $("#middle-guy").toggleClass('active');
    $("#right-info").toggleClass('active');
    $("#left-info").toggleClass('active');
    $("#try-me").toggleClass('active');
    $("#swap").toggleClass('active');
    $("#swap").text("Get a Job Done");
    /*$('#swap').text( $(this).text("geg") );*/
  });


  $('#trigger').on("click", function(){
    $('#terms').show('slower');
    $('body,html').toggleClass('active');
  });

  $('#closer').on("click", function(){
    $('#terms').hide('slower');
    $('body,html').toggleClass('active');
  });

  //Sizing Job Image to Be Same as Labels
  var nearbyListingJobImg = $('.nearbyListingJobImg'),
      applyLabelGroups = $('.applyLabelGroup');

  resizeDiv();

  function resizeDiv () {
    var setImageHeight = applyLabelGroups.height();
    if (setImageHeight != undefined) {
      nearbyListingJobImg.height(setImageHeight);
    }
  }

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


  //app.controller('ReviewController', function(){
  //  this.review = {};
  //
  //  this.addReview = function(product) {
  //    this.review.createdOn = Date.now()
  //    product.reviews.push(this.review);
  //
  //    //Clear the Review
  //    this.review = {};
  //  };
  //
  //});

  //app.controller('TabController', function() {
  //  this.tab = 1;
  //
  //  this.isSet = function (checkTab) {
  //    return this.tab === checkTab;
  //  };
  //
  //  this.setTab = function (setTab) {
  //    this.tab = setTab;
  //  }
  //});

})();
