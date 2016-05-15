'use strict';

angular.module(__appModule + '.game')
.controller('PlayingCtrl', ['$scope', '$location', 'GameService', function($scope, $location, GameService) {
	var game = {
			playerA : null,
			playerB: null
		};
	$scope.players = null;
	$scope.currentPlayer = null;
	$scope.roundNumber = null;

	var init = function() {
		$scope.players = null;
		$scope.currentPlayer = null;
		$scope.roundNumber = null;
		game = {
			playerA : null,
			playerB: null
		};

		GameService.getCurrentGames().then(function(game) {
			$scope.players = game.players;
			$scope.rounds = game.rounds;
			$scope.currentPlayer = game.players.playerA;
			$scope.roundNumber = $scope.rounds.length + 1;
		}, function() {
			$location.path('/'); // no players
		});
	}

	var performOption = function(game) {
		GameService.performRound(game.playerA, game.playerB).then(function(result) {
			if (result.doWeHaveAWinner) {
				$location.path('won');
			} else {
				init();
			}
		});
	};

	var listener = $scope.$on('moves:update-selection', function(event, value) {
		if (game.playerA === null) {
			game.playerA = value;
			$scope.currentPlayer = $scope.players.playerB;
		} else if (game.playerB === null) {
			game.playerB = value;
		}
		if (game.playerA && game.playerB) {
			performOption(game);
		}
	});

	$scope.$on('$destroy', function() {
		// what  should i destroy?
		listener();
	});

	// bootstrap game
	init();

}]);
