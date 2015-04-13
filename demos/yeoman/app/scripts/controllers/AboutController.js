'use strict';

/**
 * @ngdoc function
 * @name demoAngularApp.controller:AboutController
 * @description
 * # AboutController
 * Controller of the demoAngularApp
 */
angular.module('demoAngularApp').controller('AboutController', [ '$scope', '$controller', function ($scope, $controller) {

  	angular.extend(this, $controller('MainController', {$scope: $scope}));

  	console.info("AboutController initialized");

}]);