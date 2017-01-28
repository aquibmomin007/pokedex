/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {
  var myApp = angular.module('pokedex');

  myApp.controller('PokeBodyController',['$scope', 'LocalStorage', PokeBodyController]);


  function PokeBodyController($scope, LocalStorage) {
    $scope.sortOptions = {
      'ename' : 'Name',
      'id'    : 'ID',
      'type'  : 'Type'
    };
    $scope.sort = "ename";

    $scope.setSort = function(type) {
      if ($scope.sort === type.toLowerCase()) {
          $scope.sort = '-' + type.toLowerCase();
      } else if ($scope.sort === '-' + type.toLowerCase()) {
          $scope.sort = type.toLowerCase();
      } else {
          $scope.sort = type.toLowerCase();
      } 
    };


    LocalStorage.getData().then(function(response) {
      $scope.pokeData = response.data;
    });

    LocalStorage.getTypes().then(function(response) {
      $scope.pokeTypes = response.data;
    });
  }

})();