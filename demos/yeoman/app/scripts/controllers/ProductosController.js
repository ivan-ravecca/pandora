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
	function ($scope, $controller, $route) {

  	angular.extend(this, $controller('MainController', {$scope: $scope}));

  	console.info(["ProductosController initialized", $route]);

  }]);
