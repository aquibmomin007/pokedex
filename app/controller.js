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

    $scope.typeIncludes = [];
    
    $scope.includeType = function(type) {
        
        var i = $.inArray(type, $scope.typeIncludes);
        if (i > -1) {
            $scope.typeIncludes.splice(i, 1);
        } else {
            $scope.typeIncludes.push(type);
        }
    }

    $scope.filterType = function(pokeData) {
      
        if ($scope.typeIncludes.length > 0) {
            console.log(hasCommonElement(pokeData.type, $scope.typeIncludes));
            if (!hasCommonElement(pokeData.type, $scope.typeIncludes)){
                return;
            }
        }
        
        return pokeData;
    }


    LocalStorage.getData().then(function(response) {
      $scope.pokeData = response.data;
    });

    LocalStorage.getTypes().then(function(response) {
      $scope.pokeTypes = response.data;
    });
  }


var hasCommonElement = function (arr1,arr2){
   var bExists = false;
   $.each(arr2, function(index, value){

     if($.inArray(value,arr1)!=-1){
        console.log(value);
        bExists = true;
     }

     if(bExists){
         return false;  //break
     }
   });
   return bExists;
}

})();