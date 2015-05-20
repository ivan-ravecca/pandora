'use strict';

/**
 * @ngdoc service
 * @name demoAngularApp.CategoryService
 * @description
 * # CategoryService
 * Service in the demoAngularApp.
 */
angular.module('demoAngularApp').service('CategoryService', ['$q', 'ProductDTO', 'CategoryDTO', function ($q, ProductDTO, CategoryDTO) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	// 
	var _getCategories = function(page){
		page = page || 0;

		var defer = $q.defer(),
		categories = [];

		for(var i =0; i< 100; i++){
			categories.push(new CategoryDTO(i, 'Cat name ' + i, 'cat_url_' + i));
		}

		defer.resolve(categories);

		return defer.promise;

	},
	_getCategoryByName = function(name){
		var defer = $q.defer(),
		i = 1,
		p = new CategoryDTO(i, 'Cat name ' + name, 'cat_url_' + name);
		
		defer.resolve(p);

		return defer.promise;
	},
	_getCategoryById = function(id){
		var defer = $q.defer();

		defer.resolve(new CategoryDTO(id, 'Cat name ' + id, 'cat_url_' + id));

		return defer.promise;	
	};

	return {
		getCategories 		: _getCategories,
		getCategoryByName 	: _getCategoryByName,
		getCategoryById 	: _getCategoryById
	};
}]);