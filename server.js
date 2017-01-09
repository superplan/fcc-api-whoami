//Get packages
var express = require('express');
var morgan = require("morgan");
var path = require("path");

// Invoke App
var app = express();

//Logger
app.use(morgan('dev'));

//Global variables
var myPort = process.env.PORT;
// var myHost = process.env.IP;


//Middleware: homepage
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/home.html'));
});

//Middleware: service
app.get('/:input', function (req, res) {
  
  //Initialize variables
  var output = {"unix": null, "natural": null};
  
  //Write response
  console.log(output);
  res.send(output);
});

app.listen(myPort, function () {
  console.log('Example app listening on port '+myPort+'!');
});


/*
 * Functions
 */
