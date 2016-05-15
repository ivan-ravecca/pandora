'use strict';

angular.module(__appModule + '.game')
.factory('GameRulesService', ['$q', '$timeout', function($q, $timeout) {
	var that = this;
	var rules = {
		rock: {beats: ['scissors']},
		paper: {beats: ['rock']},
		scissors: {beats: ['paper']}
	};

	var runRules = function(optA, optB) {
		if (rules[optA].beats.indexOf(optB) > -1) {
			return 1;
		} else if (rules[optB].beats.indexOf(optA) > -1) {
			return -1;
		}
		return 0;
	};

	return {
		runRules: runRules
	};
}]);
