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
	function ($scope, $controller) {

	angular.extend(this, $controller('MainController', {$scope: $scope}));

	console.info('HomeController initialized');

}]);
