'use strict';

/**
 * @ngdoc function
 * @name demoAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the demoAngularApp
 */
angular.module('demoAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
