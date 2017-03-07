const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  // let user = tweetBank.add({user: "Arin"})
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} ); //returns array
  res.render( 'index', { tweets: list , showForm: true} ); //nunjucks recognizes 'tweets' in the index.html file
});

router.get('/tweets/:id', function(req, res) {
  var tweets = tweetBank.find({id: req.params.id})
  res.render( 'index', { tweets: tweets } ); //nunjucks recognizes 'tweets' in the index.html file
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
