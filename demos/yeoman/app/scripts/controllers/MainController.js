'use strict';

/**
 * @ngdoc function
 * @name demoAngularApp.controller:MainController
 * @description
 * # MainController
 * Controller of the demoAngularApp
 */
angular.module('demoAngularApp').controller('MainController', [
  '$scope', 
  '$route',
  'DATE_YEAR', 
  'SITE_URL',
  function ($scope, $route, DATE_YEAR, SITE_URL) {

  	console.info("MainController initialized");

    $scope.DATE_YEAR = DATE_YEAR;
    $scope.SITE_URL = SITE_URL;

    $scope.currentSection = $route.current.scope.name;

  }]);
