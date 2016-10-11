var configValues = require('./config');

module.exports = {

  getDbString: function() {
    return 'mongodb://' + configValues.username + ':' + configValues.password + '@ds053156.mlab.com:53156/anawesomepokedexstuff776';
  }

}