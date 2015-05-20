'use strict';

/**
 * @ngdoc DTO
 * @name demoAngularApp.CategoryDTO
 * @description
 * # CategoryDTO
 * Service in the demoAngularApp.
 */
angular.module('demoAngularApp')
  .factory('CategoryDTO', [function () {
      // AngularJS will instantiate a singleton by calling "new" on this function
      // 
      function CategoryDTO(id, name, url){
          this.id         = id         || null;
          this.name       = name         || null;
          this.url        = url         || null;
      }
  
      CategoryDTO.prototype.getUrl = function () {
          return this.url + '/';
      };
  
      return CategoryDTO;
    }]);