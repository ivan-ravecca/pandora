'use strict';

/**
 * @ngdoc DTO
 * @name demoAngularApp.GroupDTO
 * @description
 * # GroupDTO
 * Service in the demoAngularApp.
 */
angular.module('demoAngularApp')
  .factory('GroupDTO', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    // 
    function GroupDTO(id, name, url){
    	this.id 		= id 		|| null;
    	this.name 		= name 		|| null;
    	this.url 		= url 		|| null;
    }

    GroupDTO.prototype.getUrl = function () {
		return this.url + '/';
	};

    return GroupDTO;
  });