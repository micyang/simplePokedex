pokedex.controller('pokedexCtrl', function ($http) {
  var vm = this;
  vm.pkmns;
  vm.status = "Loading...";
  $http({
    method: 'GET',
    url: '/kanto'
    }).then(function (res) {
      vm.pkmns = res.data;
      vm.status = "";
    }, function (err) {
  });
});

pokedex.factory('pokedexFactory', function () {
    
});