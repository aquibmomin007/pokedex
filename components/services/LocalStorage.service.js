;(function() {


    'use strict';
    
    angular
      .module('pokedex')
      .factory('LocalStorage',['$injector', LocalStorageService]);
    

    function LocalStorageService($injector) {
          var factory = {};

          factory.getData = function() {
              console.log("inside get");
              var $http = $injector.get('$http');
                  return $http.get('/data/pokedex.json');
          };

          return factory;
              
          }


})();
