var express = require('express');
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//view ejs files
app.set('view engine', 'ejs');


// get the main page file
app.get('/', function(req, res) {
  res.render('index');
});

app.addEventListener("submit", addTwoNums);

function addTwoNums(){
    fetch("/add", {
        method: "POST"
    })
}
  
//server
app.listen(3000,function(){
  console.log("Server running at Port 3000");
});
