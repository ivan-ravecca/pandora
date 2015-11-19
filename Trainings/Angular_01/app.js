'use strict';

angular
  .module('demoAngularApp', [
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($rootScope){
    $rootScope.mainConfig = { 'testConfig' : 'pepito' };
  });

angular.module('demoAngularApp').constant('siteConfig', {
  'currentYear' : (new Date()).getFullYear(),
  'siteUrl': location.host,
  'siteName': 'Demo Angular App'
});