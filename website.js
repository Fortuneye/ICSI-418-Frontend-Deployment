var express = require('express');
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//use ejs as the engine to view our page files
app.set('view engine', 'ejs');


// get the main page file
app.get('/', function(request, response) {
  response.render('index');
});

//get adding page
app.get('/adding.ejs', function(request, response) {
  response.render('adding');
});

app.post("/add", (request, response) => {
  const num1 = request.body.num1;
  const num2 = request.body.num2;
  const result = arseInt(num1) + parseInt(num2);
  response.send({
    result: result
  });
});

//server
app.listen(8000,function(){
  console.log("Server running at Port 8000");
});
