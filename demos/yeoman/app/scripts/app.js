'use strict';


/**
 * @ngdoc overview
 * @name demoAngularApp
 * @description
 * # demoAngularApp
 *
 * Main module of the application.
 */
angular
  .module('demoAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'HomeController'
      })
      .when('/nosotros', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .when('/arquitectura', {
        templateUrl: 'views/arquitecturaview.html',
        controller: 'ArquitecturaController'
      })
      .when('/productos', {
        templateUrl: 'views/productosview.html',
        controller: 'ProductosController'
      })
      .when('/obras', {
        templateUrl: 'views/obrasview.html',
        controller: 'ObrasController'
      })
      .when('/contacto', {
        templateUrl: 'views/contactoview.html',
        controller: 'ContactController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($rootScope){

    $rootScope.mainConfig = { 'testConfig' : 'pepito' };
  });

angular.module('demoAngularApp').constant("DATE_YEAR", (new Date()).getFullYear() );
angular.module('demoAngularApp').constant("SITE_URL", location.host);


//http://stackoverflow.com/questions/16199418/how-do-i-implement-the-bootstrap-navbar-active-class-with-angular-js