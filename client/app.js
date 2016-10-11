var pokedex = angular.module('pokedex', ['ui.router']);

pokedex.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'components/home/home.html',
    })
    .state('kanto', {
      url: '/kanto',
      templateUrl: 'components/kanto/pokedex.html',
      controller: 'pokedexCtrl as vm'
    })
    .state('national', {
      url: '/national',
      templateUrl: 'components/national/pokedex.html',
      controller: 'nationalPokedexCtrl as vm'
    })
});

pokedex.controller('mainController', ['$location', '$log', function(){

  var vm = this;

}]);