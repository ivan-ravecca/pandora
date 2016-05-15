'use strict';

angular.module(__appModule + '.game')

.controller('PlayerEntryCtrl', 
	['$scope', '$location', 'GameService', function($scope, $location, GameService) {
	
	$scope.players = {playerA: {name: null}, playerB: {name: null}};

	$scope.isStartEnabled = function () {
		var shortCut = $scope.players;
		return angular.isString(shortCut.playerA.name)  
			&& angular.isString(shortCut.playerB.name)
			&& shortCut.playerA.name.length > 2
			&& shortCut.playerB.name.length > 2
			&& shortCut.playerA.name !== shortCut.playerB.name;
	};

	$scope.startGame = function () {
		if (!$scope.isStartEnabled()) { 
			return false; 
		}
		GameService.initGame($scope.players).then( function () {
			$location.path('play');
		});
	};

}]);
