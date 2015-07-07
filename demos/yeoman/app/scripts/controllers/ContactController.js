'use strict';

/**
 * @ngdoc function
 * @name demoAngularApp.controller:ContactController
 * @description
 * # ContactController
 * Controller of the demoAngularApp
 */
angular.module('demoAngularApp').controller('ContactController', ['$scope', '$controller', function ($scope, $controller) {

  	angular.extend(this, $controller('MainController', {$scope: $scope}));

  	console.info('ContactController initialized');

  }]);
