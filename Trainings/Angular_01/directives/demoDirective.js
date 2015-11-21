'use strict';

angular.module('demoAngularApp').directive("demoDirective", 
	// injecting dependencies through its name 					here i can call them as i want
	['$rootScope','MainService', '$q', '$timeout', function ($rootScope, MainService, $q, $timeout) {

	// private  methods - logic that applies to directives behavior
	var retrieveJSON = function (user) {
		// MainService
		var defer = $q.defer();
		
		MainService.getGitGubInfo(user).then(function (repos) {
			if (repos.length > 0) {
				defer.resolve(
					"User " + user + " has " + repos.length 
						+ " repos, one of them is " + repos[0].full_name
				);
			} else {
				defer.resolve("No repos found");
			}
		}, function (error) {
			defer.resolve(error);
		});

		return defer.promise;
	};
	// underscore debounce function
	var _debounce = function (func, wait, immediate) {
		var timeout;
		return function () {
			var context = this, args = arguments;
			var later = function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			$timeout.cancel(timeout);
			timeout = $timeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	// Directive definition
	return {
		restrict: 'E',
		replace: true,
		transclude : false,
		scope: {
			result: '='
		},
		templateUrl: 'directives/demoDirective.html',
		link: function (scope, element, attrs) {
			console.log("Directive linking",scope.result);

			scope.userInput = scope.result;
			scope.runningLookUp = false;
			
		},
		controller : ['$scope', '$rootScope', function(scope, rootScope){
			console.log("Directive controller");
			var debouncedCall = _debounce(function(user){
				// add debounce function
				if (user !== "") {
					scope.runningLookUp = true;
					retrieveJSON(user).then(function (result) {
						scope.result = result;
						rootScope.$broadcast('DirectiveEvent', result);

						scope.runningLookUp = false;
					});
				}
			}, 1000);
			// Listen for any changes in the text box input filter 
			scope.$watch('userInput', function (newVal, oldVal) {
				if (!scope.runningLookUp && (newVal !== oldVal) && (newVal != undefined)) {
					scope.result = "";
					debouncedCall(newVal);
				}
			});	
		}]
	};
}]);