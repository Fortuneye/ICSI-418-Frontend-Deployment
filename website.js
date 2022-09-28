var express = require('express'); //require the express module
var app = express(); //create express object
const bodyParser = require("body-parser"); //bodyparser parses an html request body for POST data
app.use(bodyParser.json()); //use json body parser for the express object

//use ejs as the engine to view our page files
app.set('view engine', 'ejs');


// get the main page file
app.get('/', function(request, response) {
  response.render('index'); //render the page and send it to response
});

//get adding page
app.get('/adding.ejs', function(request, response) {
  response.render('adding'); //render the page and send it to response
});

//post request for adding two numbers
app.post("/add", (request, response) => {
  const num1 = request.body.num1; //first number
  const num2 = request.body.num2; //second number
  const result = parseInt(num1) + parseInt(num2); //add the two and set them to result
  response.send({ //send all to response
    num1: num1,
    num2: num2,
    result: result
  });
});

//server
app.listen(8000,function(){
  console.log("Server running at Port 8000");
});
