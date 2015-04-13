'use strict';

/**
 * @ngdoc function
 * @name demoAngularApp.controller:FooterController
 * @description
 * # FooterController
 * Controller of the demoAngularApp
 */
angular.module('demoAngularApp').controller('FooterController', ['$scope', '$controller', function ($scope, $controller) {

  	angular.extend(this, $controller('MainController', {$scope: $scope}));
  	console.info("FooterController initialized");

  }]);
