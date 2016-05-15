'use strict';

angular.module(__appModule + '.game')
.directive('scoreTable', [function() {
	
	return {
		restrict: 'E',
		replace: false,
		transclude : false,
		scope: {
			players: '=',
			rounds: '='
		},
		templateUrl: 'templates/score.html',
		link: function (scope, element, attrs) {
			console.log("Directive linking",scope);

		},
		controller : ['$scope', '$rootScope', function(scope, rootScope){
			console.log("Directive controller");
		}]
	};

}]);
