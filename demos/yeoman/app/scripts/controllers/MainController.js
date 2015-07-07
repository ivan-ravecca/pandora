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
  '$location',
  'siteConfig',
  function ($scope, $route, $location, siteConfig) {

    $scope.siteConfig = siteConfig;

    $scope.isActiveSection = function(section){
      return section === $location.path();
    };

    console.info('MainController initialized');

  }]);
