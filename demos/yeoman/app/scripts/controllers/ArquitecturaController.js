'use strict';

/**
 * @ngdoc function
 * @name demoAngularApp.controller:ArquitecturaController
 * @description
 * # ArquitecturaController
 * Controller of the demoAngularApp
 */
angular.module('demoAngularApp').controller('ArquitecturaController', ['$scope', '$controller', function ($scope, $controller) {

  	angular.extend(this, $controller('MainController', {$scope: $scope}));

  	console.info("ArquitecturaController initialized");

  }]);
