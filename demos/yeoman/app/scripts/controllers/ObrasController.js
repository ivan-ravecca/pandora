'use strict';

/**
 * @ngdoc function
 * @name demoAngularApp.controller:ObrasController
 * @description
 * # ObrasController
 * Controller of the demoAngularApp
 */
angular.module('demoAngularApp').controller('ObrasController', ['$scope', '$controller', function ($scope, $controller) {

  	angular.extend(this, $controller('MainController', {$scope: $scope}));

  	
  	console.info("ObrasController initialized");

  }]);
