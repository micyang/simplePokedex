// Overwrite node Promise
var Promise = require('bluebird')

var request = Promise.promisify(require('request'));
Promise.promisifyAll(request);

module.exports.promisePokemon = function(url) {
    return request(url);
}