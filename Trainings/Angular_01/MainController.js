'use strict';

angular.module('demoAngularApp').controller('MainController', [
	'$scope', 
	'$controller', 
	'siteConfig',
	function ($scope, $controller, siteConfig) {

		$scope.CONFIGS = {};
		 
		angular.extend($scope.CONFIGS, siteConfig);

		console.info('MainController initialized');

		$scope.directiveOne = "";
		$scope.directiveTwo = "";

		var listener = $scope.$on('DirectiveEvent', function(event, value) {
			$scope.directiveTwo = value;
		});


		$scope.$on('$destroy', function() {
     		listener(); //removes the listener
   		});

}]);
