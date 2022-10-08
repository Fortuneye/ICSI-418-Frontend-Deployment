var express = require('express'); //require the express module
var app = express(); //create express object

//use ejs as the engine to view our page files
app.set('view engine', 'ejs');

// get the main page file
app.get('/', function(request, response) {
  response.render('index'); //render the page and send it to response
});

//server
app.listen(8000, function() {
  console.log("Server running at Port 8000");
});
