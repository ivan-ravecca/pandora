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
      .when('/productos?', {
        templateUrl: 'views/productosview.html',
        controller: 'ProductosController'
      })
      .when('/productos/:category', {
        templateUrl: 'views/productosview.html',
        controller: 'ProductosController'
      })
      .when('/productos/:category/:productName?', {
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
      .when('/arquitectura-aluminio-marca-registrada',{
        templateUrl: 'views/marcaview.html',
        controller: 'MarcaController'
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
  'siteName': 'Arquitectura &amp; Aluminio'
});