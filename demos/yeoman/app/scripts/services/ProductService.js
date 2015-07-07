'use strict';

/**
 * @ngdoc service
 * @name demoAngularApp.ProductService
 * @description
 * # ProductService
 * Service in the demoAngularApp.
 */
angular.module('demoAngularApp').service('ProductService', ['$q', 'ProductDTO', 'CategoryDTO', function ($q, ProductDTO, CategoryDTO) {
	// AngularJS will instantiate a singleton by calling 'new' on this function
	// 
	var _getProducts = function(page){
		page = page || 0;

		var defer = $q.defer(),
		products = [],
		categories = [],
		i=null;

		for(i =0; i< 100; i++){
			categories.push(new CategoryDTO(i, 'Cat name ' + i, 'cat_url_' + i));
		}

		for(i=0; i<100; i++){
			products.push(new ProductDTO(i, 'Prod name ' + i, 'prod_url_' + i, (categories[i])));
		}
		defer.resolve(products);

		return defer.promise;

	},
	_getProductByName = function(name){
		var defer = $q.defer(),
		i = 1,
		products = new ProductDTO(i, 'Prod  ' + name + i, 'prod_url_' + i, (
				new CategoryDTO(i, 'Cat name ' + i, 'cat_url_' + i)));
		
		defer.resolve(products);

		return defer.promise;
	},
	_getProductById = function(id){
		var defer = $q.defer(),
		i = id,
		products = new ProductDTO(id, 'Prod name ' + i, 'prod_url_' + i, (
				new CategoryDTO(i, 'Cat name ' + i, 'cat_url_' + i)));
		
		defer.resolve(products);

		return defer.promise;	
	},

	_getProductsByCategory = function(category, page){
		page = page || 0;

		var defer = $q.defer(),
		products = [];

		category = new CategoryDTO(category.id, category.name, category.getUrl() );

		for(var i=0; i<100; i++){
			products.push(new ProductDTO(i, 'Prod name ' + i, 'prod_url_' + i, category));
		}
		defer.resolve(products);

		return defer.promise;
	};

	return {
		getProducts 		: _getProducts,
		getProductByName 	: _getProductByName,
		getProductById 		: _getProductById,
		getProductsByCategory 	: _getProductsByCategory
	};
}]);