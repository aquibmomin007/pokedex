;(function() {


    'use strict';
    
    angular
      .module('pokedex')
      .factory('LocalStorage', ['$http', LocalStorageService]);


    function LocalStorageService($http) {

        return {
          get: get,
          list: list
        };


         function get() {
          console.log("inside get");
         }


         function list() {
           console.log("inside list");
         }
        
    }


})();
