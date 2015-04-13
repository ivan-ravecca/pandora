'use strict';

/**
 * @ngdoc function
 * @name demoAngularApp.controller:HomeController
 * @description
 * # HomeController
 * Controller of the demoAngularApp
 */
angular.module('demoAngularApp').controller('HomeController', [
	'$scope', 
	'$controller', 
	'$route',
	function ($scope, $controller, $route) {

	angular.extend(this, $controller('MainController', {$scope: $scope}));

	console.info("HomeController initialized");

	console.log(['home', $route]);

}]);
