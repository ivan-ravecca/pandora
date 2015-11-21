'use strict';

angular
	.module('demoAngularApp', [
		'ngRoute',
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'templates/main.html', // <- because it fetchs the content by angular, not the index.html
				controller: 'MainController' // <- because it's loaded by index.html
			})
			.when('/alternative', {
				templateUrl: 'templates/alternative.html'
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