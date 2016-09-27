// Requires JS and allows app to use Express API with the var express
var express = require('express');

// Create our app
var app = express();

// Call which folder to use, express starts static server, serving the directory "public"
app.use(express.static('public'));

// Runs on port 3000
app.listen(3000, function() {
  console.log('Express server running on port 3000');
});
