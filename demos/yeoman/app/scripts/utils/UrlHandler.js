'use strict';

/**
 * @ngdoc url handler/util
 * @name demoAngularApp.UrlHandler
 * @description
 * # UrlHandler
 * Service in the demoAngularApp.
 */
angular.module('demoAngularApp')
  .factory('UrlHandler', [function () {

        var UrlHandler = {
            getStringFromUrl : function (url){
                return (!!url)? (url.split('-')).join(' ') : '';
            },
            getUrlFromString : function(url){
                //TODO improve this to be smart
                return url.replace(' ', '-');
            }

        };
  
      return UrlHandler;
    }]);