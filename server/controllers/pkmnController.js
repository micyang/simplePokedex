var Pokemon = require('../models/pokemonModel');
var bodyParser = require('body-parser');
var getPromise = require('./promiseHelper');

module.exports = function(app) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true}));

  app.get('/kanto', function(req, res) {
    console.log("get request from kanto");
    Pokemon.find(function(err, pkmn){
      console.log("PKMN GET! FROM KANTO!");
      if(err) return console.error(err);
        res.send(pkmn);
    });
  });

  app.get('/national', function(req, res) {
    // Ping PKMN API logic.......
    getPromise.promisePokemon('http://pokeapi.co/api/v2/pokemon/')
    .then(function(firstPromise) {
      // console.log("The first PROMISE:", firstPromise);
      var data = JSON.parse(firstPromise.body);
      console.log("The first PROMISE.body parsed:", data);
      res.send(data.results);
    })
    .catch(function(err) {
      console.error("Err! national pkdex", err);
    })
  });

  // app.get('/national/pokemon', function(req, res) {
  //   // Ping PKMN API logic.......
  //   getPromise.promisePokemon('http://pokeapi.co/api/v2/pokemon/')
  //   .then(function(firstPromise) {
  //     // console.log("The first PROMISE:", firstPromise);
  //     var data = JSON.parse(firstPromise.body);
  //     console.log("The first PROMISE.body parsed:", data);
  //     res.send(data);
  //   })
  //   .catch(function(err) {
  //     console.error("Err! national pkdex", err);
  //   })
  // });
};