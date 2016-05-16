'use strict';

angular.module(__appModule + '.game')
.factory('GameService', ['$q', '$timeout', 'GameRulesService', function($q, $timeout, GameRulesService) {
	var that = this;
	var players = null;
	var rounds = [];
	
	that.players = null;
	that.rounds = [];

	var initGame = function(players) {
		var deferred = $q.defer();

		that.rounds = [];
		that.players = players ? players : null;

		$timeout(function (){
			deferred.resolve(true);
		}, 100);
		return deferred.promise;
	};

	var getCurrentGames = function() {
		var deferred = $q.defer();
		$timeout(function (){
			if (that.players) {
				deferred.resolve({players: that.players, rounds: that.rounds});
			} else {
				deferred.reject();
			}
		}, 100);
		return deferred.promise;
	};

	var getWinnerObj = function() {
		var players = {};
		var shortCut = that.players;
		if (shortCut === null){
			return false; // you are getting directly to this controller
		}
		players[shortCut.playerA.name] = 0;
		players[shortCut.playerB.name] = 0;
		angular.forEach(that.rounds, function(round) {
			if (round.winnerExist) {
				players[round.player.name]++;
			}
		});
		if (players[shortCut.playerA.name] > 2) {
			return shortCut.playerA;
		} else if (players[shortCut.playerB.name] > 2) {
			return shortCut.playerB;
		} else {
			return false;
		}
	};

	var performRound = function(optionPlayerA, optionPlayerB) {
		var deferred = $q.defer();
		var winner = null;

		switch(GameRulesService.runRules(optionPlayerA, optionPlayerB)){
			case 1: 
				winner = that.players.playerA;
				break;
			case -1: 
				winner = that.players.playerB;
				break;
			case 0: 
				winner = null;
				break;
		}

		that.rounds.push({
			stage: that.rounds.length + 1,
			winnerExist: winner !== null,
			player: winner
		});
		
		$timeout(function (){
			deferred.resolve({doWeHaveAWinner: (getWinnerObj()), rounds: that.rounds, players: that.players});
		}, 100);
		return deferred.promise;
	};

	var getWinner = function() {
		var deferred = $q.defer();
		$timeout(function (){
			deferred.resolve(getWinnerObj());
		}, 100);
		return deferred.promise;
	};

	return {
		initGame: initGame,
		getCurrentGames: getCurrentGames,
		performRound: performRound,
		getWinner: getWinner
	};
}]);
