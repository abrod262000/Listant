(function() {
  var app = angular.module('store-products', []);

  //Directive for product-title
  app.directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'html/product-title.html'
    };
  });

  app.directive("productDescriptions", function() {
    return {
      restrict: 'E',
      templateUrl: "html/product-descriptions.html"
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "html/product-reviews.html"
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict: 'A',
      templateUrl: "html/product-specs.html"
    };
  });

  app.directive('productGallery', function(){
    return {
      restrict: "E",
      templateUrl: "html/product-gallery.html",
      controller: function() {
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: "gallery"
    };
  });

})();
