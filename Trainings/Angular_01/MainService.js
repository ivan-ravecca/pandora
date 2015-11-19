'use strict';

angular.module('demoAngularApp').service('MainService', ['$q', '$timeout', '$http', function ($q, $timeout, $http) {
	// AngularJS will instantiate a singleton by calling 'new' on this function

	var _getGitGubInfo = function (user) {
		var defer = $q.defer();

		var url = "https://api.github.com/users/"+ user +"/repos";

		$http({
			method: 'GET',
			url: url
		}).then(function (response) {
			defer.resolve(response.data);
		}, function (response) {
			defer.resolve({'error': 'Some error trying fetching'});
		});
		
		return defer.promise;
	};

	return {
		getGitGubInfo: _getGitGubInfo
	};
}]);