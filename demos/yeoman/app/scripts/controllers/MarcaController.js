'use strict';

/**
 * @ngdoc function
 * @name demoAngularApp.controller:MarcaController
 * @description
 * # MarcaController
 * Controller of the demoAngularApp
 */
angular.module('demoAngularApp').controller('MarcaController', ['$scope', '$controller', function ($scope, $controller) {

  	angular.extend(this, $controller('MainController', {$scope: $scope}));

  	console.info(["MarcaController initialized", $scope.siteConfig]);

  }]);
