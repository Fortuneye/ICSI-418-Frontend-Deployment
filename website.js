var express = require('express');
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//use ejs as the engine to view our page files
app.set('view engine', 'ejs');


// get the main page file
app.get('/', function(req, res) {
  res.render('index');
});

//get adding page
app.get('/adding.ejs', function(req, res) {
  res.render('adding');
});

app.post("/add", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  res.send({
    result: parseInt(num1) + parseInt(num2)
  });
});

//server
app.listen(8000,function(){
  console.log("Server running at Port 8000");
});
