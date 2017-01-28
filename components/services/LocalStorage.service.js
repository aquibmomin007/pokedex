;(function() {


    'use strict';
    
    angular
      .module('pokedex')
      .factory('LocalStorage',['$injector', LocalStorageService]);
    

    function LocalStorageService($injector) {
          var factory = {};

          factory.getData = function() {
              var $http = $injector.get('$http');
                  return $http.get('/data/pokedex.json');
          };

          factory.getTypes = function() {
              var $http = $injector.get('$http');
                  return $http.get('/data/types.json');
          };

          return factory;
              
    }


})();
