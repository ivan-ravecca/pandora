'use strict';

angular.module('demoAngularApp').directive("demoDirective", 
	['$rootScope','MainService', '$q', '$timeout', function ($rootScope, MainService, $q, $timeout) {

	var retrieveJSON = function (user) {
		// MainService
		var defer = $q.defer();
		
		MainService.getGitGubInfo(user).then(function(response){
			defer.resolve(response);
		});

		return defer.promise;
	}
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
			console.log("Directive scope");
			
			// Listen for any changes in the text box input filter 
			scope.$watch('userInput', function(newVal, oldVal){
				if ( !scope.runningLookUp && (newVal !== oldVal) && (newVal != undefined)){

					// add debounce function
					scope.runningLookUp = true;
					retrieveJSON(newVal).then(function(repos){
						var result = "User " + newVal + " has " + repos.length + " repos, one of them is " + repos[0].full_name;
						scope.result = result;
						rootScope.$broadcast('DirectiveEvent', result);

						scope.runningLookUp = false;
					});
				}
			});	
		}]
	};
}]);