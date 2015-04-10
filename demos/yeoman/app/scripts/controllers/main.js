'use strict';

/**
 * @ngdoc function
 * @name demoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoAngularApp
 */
angular.module('demoAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
