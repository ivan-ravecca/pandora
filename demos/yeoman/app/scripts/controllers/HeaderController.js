'use strict';

/**
 * @ngdoc function
 * @name demoAngularApp.controller:HeaderController
 * @description
 * # HeaderController
 * Controller of the demoAngularApp
 */
angular.module('demoAngularApp').controller('HeaderController', ['$scope', '$controller', function ($scope, $controller) {

  	angular.extend(this, $controller('MainController', {$scope: $scope}));
  	console.info("HeaderController initialized");

  }]);
