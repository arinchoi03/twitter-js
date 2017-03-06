const express = require( 'express' );
const chalk = require('chalk');
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball'); //does volleyball need express to run before?

app.use(function(req,res,next) {
  console.log(chalk.red(req.method + req.path + res.statusCode))
  next();
})

app.use('/special/', function(req, res, next) {
  console.log("you reached the special area")
  next();
})

app.get('/', function(req, res) {
  res.send("Welcome home!")
})

app.get('/news', function(req, res) {
  res.send("Welcome to NEWS!")
})



var server = app.listen(3000, () => {console.log("Server listening")})
