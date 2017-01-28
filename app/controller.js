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
    .controller('PokeBodyController',['$scope', 'LocalStorage', PokeBodyController]);


  function PokeBodyController($scope, LocalStorage) {
    LocalStorage.getData().then(function(response) {
      $scope.pokeData = response.data;
      console.log($scope.pokeData);
    });
  }


})();