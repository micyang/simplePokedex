var Pokemon = require('../models/pokemonModel');
var bodyParser = require('body-parser');
var getPromise = require('./promiseHelper');

module.exports = function(app) {

app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true}));
  app.get('/kanto', function(req, res) {
    Pokemon.find(function(err, pkmn){
      if(err) return console.error(err);
        res.send(pkmn);
    });
  });
};