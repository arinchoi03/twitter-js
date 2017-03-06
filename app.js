const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.get('/', function(req, res) {
  res.send("Welcome!")
})

var server = app.listen(3000, () => {console.log("Server listening")})
