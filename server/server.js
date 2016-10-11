var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
var pkmnDbSetup = require('./controllers/seedController');
var kantoPkmn = require('./controllers/pkmnController');

var port = process.env.PORT || 3000;

// Middleware setup
// Use bodyparser in app
app.use(bodyParser.json());

// CORS STUFF!
// http://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// rootDirectoryRoute

// Connect to mongooseDB
mongoose.connect(config.getDbString());

// Endpoints

// Uncomment if wanting to add to DB!
// pkmnDbSetup(app);
kantoPkmn(app);

app.listen(port);
console.log(`Server listing on port: ${port}`);