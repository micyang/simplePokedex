pokedex.controller('nationalPokedexCtrl', function ($http) {
  var vm = this;
  vm.pkmns;
  vm.status = "Loading...";
  $http({
    method: 'GET',
    url:'/national'
    }).then(function (res) {
      vm.pkmns = res.data;
      vm.status = "";
    }, function (err) {
  });
});

pokedex.factory('nationalPokedexFactory', function () {
    
});