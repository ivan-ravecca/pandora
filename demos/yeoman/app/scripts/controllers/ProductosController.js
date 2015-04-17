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
	function ($scope, $controller, $route, $routeParams) {

  	angular.extend(this, $controller('MainController', {$scope: $scope}));

  	console.info(["ProductosController initialized", $routeParams.category,
  		$routeParams.productName
  		]);
  	$scope.urlParams = [$routeParams.category, $routeParams.productName];

  }]);
