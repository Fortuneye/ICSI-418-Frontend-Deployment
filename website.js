var express = require('express'); //require the express module
var app = express(); //create express object

//use ejs as the engine to view our page files
app.set('view engine', 'ejs');

// get the main page file
app.get('/', function(request, response) {
  response.render('index'); //render the page and send it to response
});

//in the browser address, if we put in something like this at the end of the address
//it will add 2 numbers using "GET"
app.get('/add/:number1/:number2', (request, response) => {

  //in the console, add our two numbers using request.params
  console.log(request.params.number1 + request.params.number2);

  //parse our two numbers using parseInt
  let num1 = parseInt(request.params.number1);
  let num2 = parseInt(request.params.number2);
  
  //send a response in the form of a json of our two numbers after being added
  response.json(num1 + num2);
});

//server
app.listen(8000, function() {
  console.log("Server running at Port 8000");
});
