'use strict';

/**
 * @ngdoc function
 * @name demoAngularApp.controller:ProductosController
 * @description
 * # ProductosController
 * Controller of the demoAngularApp
 */
angular.module('demoAngularApp').controller('ProductosController', [
	'$scope', 
	'$controller', 
	'$route',
	'$routeParams',
	'ProductService',
  'CategoryService',
  'UrlHandler',
	function ($scope, $controller, $route, $routeParams, ProductService, CategoryService, UrlHandler) {

  	angular.extend(this, $controller('MainController', {$scope: $scope}));

    var category = (!!$routeParams.category)? $routeParams.category : null,
    productName = (!!$routeParams.productName)? $routeParams.productName : null;
    
    $scope.urlParams = [];
    $scope.products = [];
    $scope.categories = [];
    $scope.product = null;
    $scope.category = null;

    if(!!productName){
      $scope.urlParams.push(UrlHandler.getStringFromUrl(productName));
      ProductService.getProductByName(UrlHandler.getStringFromUrl(productName)).then(function(product){
        $scope.product = product;
      });
    } else if(!!category){
      $scope.urlParams.push(UrlHandler.getStringFromUrl(category));
      CategoryService.getCategoryByName(UrlHandler.getStringFromUrl(category)).then(function(category){
        ProductService.getProductsByCategory(category).then(function(products){
          $scope.products = products;
          $scope.category = category;
        });
      });
    } else {
      ProductService.getProducts().then(function(products){
        $scope.products = products;
      });
      CategoryService.getCategories().then(function(categories){
        $scope.categories = categories;
      });
    }

    //TODO
    //1 - obtener de la url a que estamos apuntando
    //2 - 


  }]);
