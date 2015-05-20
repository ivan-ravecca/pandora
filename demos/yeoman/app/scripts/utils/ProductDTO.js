'use strict';

/**
 * @ngdoc DTO
 * @name demoAngularApp.ProductDTO
 * @description
 * # ProductDTO
 * Service in the demoAngularApp.
 */
angular.module('demoAngularApp').factory('ProductDTO', ['CategoryDTO', function (CategoryDTO) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    // 
    function ProductDTO(id, name, url, category, photo, group){
    	this.id 		= id 		|| null;
    	this.name 		= name 		|| null;
    	this.url 		= url 		|| null;
	    this.category 	= category 	|| new CategoryDTO();
	    this.photo 		= photo 	|| [];
	    this.group 		= group 	|| [];
    }

    ProductDTO.prototype.getUrl = function () {
		return this.category.getUrl() + this.url + '/';
	};

    return ProductDTO;
  }]);