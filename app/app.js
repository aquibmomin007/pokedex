
;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('pokedex', ['ngRoute'])
    .config(config);

  config.$inject = ['$routeProvider', '$httpProvider'];

  function config($routeProvider, $httpProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/pokedex-body.html',
        controller: 'PokeBodyController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();