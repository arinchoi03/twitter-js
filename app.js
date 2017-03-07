const express = require( 'express' );
const bodyParser = require('body-parser')
const chalk = require('chalk');
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball'); //does volleyball need express to run before?
const nunjucks = require('nunjucks');
const routes = require('./routes');

//we will use these three functions a LOT
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'))

app.use('/', routes);

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

app.use(function(req,res,next) {
  console.log(chalk.red(req.method + req.path + res.statusCode))
  next();
})

app.use('/special/', function(req, res, next) {
  console.log("you reached the special area")
  next();
})

// app.get('/', function(req, res) {
// //res.send("Welcome home!")
//   const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//   res.render( 'index', {title: 'Hall of Fame', people: people} );
// })


// app.get('/news', function(req, res) {
//   res.send("Welcome to ABC NEWS!")
// })



var server = app.listen(3000, () => {console.log("Server listening")})



