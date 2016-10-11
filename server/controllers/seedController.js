var Pokemon = require('../models/pokemonModel');
var getPromise = require('./promiseHelper');

module.exports = function(app) {
    // Learned that I can't make that many calls...
    app.get('/api/getPkmnDB', function(req, res) {
        // PING the pokemon API to get 721 pokemon...
        // THIS SCOPE ITS 151 ONLY
        var urlBase = 'http://pokeapi.co/api/v2/pokemon/';
        var data;
        //console.log("~~~~~~~~~~~~~THIS IS REQ:", req.query);
        //console.log("~~~~~~~~~~~~~THIS IS RES:", res);
        for(let i = 26; i <= 50; i++) {
            getPromise.promisePokemon(urlBase + i)
            .then(function(res) {
                data = JSON.parse(res.body)
                //console.log("res.body.name: ", data.name);
                Pokemon.create({

                    name: data.name,
                    pkmnSprite: data.sprites.front_default,
                    pkmnNum: data.id

                }, function(err, res){
                    if (err) {
                        console.error("Err!", err)
                    } else {
                        console.log("Successful add for #", i);
                    }
                });
            })
            .catch(function(err) {
                console.error("Err! for ", i);
            })
        }
        res.send("Does this end it?");
    })
}