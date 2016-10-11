var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var pokemonSchema = new Schema({

  name: String,
  pkmnSprite: String,
  pkmnNum: Number


});

var Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;