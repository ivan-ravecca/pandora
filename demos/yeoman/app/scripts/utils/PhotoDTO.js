'use strict';

/**
 * @ngdoc DTO
 * @name demoAngularApp.PhotoDTO
 * @description
 * # PhotoDTO
 * Service in the demoAngularApp.
 */
angular.module('demoAngularApp')
  .factory('PhotoDTO', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    // 
    function PhotoDTO(id, name, url){
    	this.id 		= id 		|| null;
    	this.name 		= name 		|| null;
    	this.url 		= url 		|| null;
    }

    PhotoDTO.prototype.getUrl = function () {
		return this.url + '/';
	};

    return PhotoDTO;
  });