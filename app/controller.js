/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('pokedex')
    .controller('PokeBodyController', PokeBodyController);

  PokeBodyController.$inject = ['LocalStorage'];


  function PokeBodyController(LocalStorage) {

    // 'controller as' syntax
    var self = this;

    LocalStorage.get();
    LocalStorage.list();
  }


})();