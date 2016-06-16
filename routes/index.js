var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  var name = '';
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true, name: name } );
}); // Howcome we can use render since it's a swig method, and swig isn't required into this module??

router.get('/users/:name', function (req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Twitter.js - Posts by '+ name, tweets: list, showForm: true, name: name } );
});

router.get('/tweets/:id', function (req, res) {
  var id = req.params.id; // IMPORTANT (params)!!!
  var list = tweetBank.find( {id: id} );
  res.render( 'index', { title: 'Twitter.js - tweet with id: ' + id, tweets: list } );
});

router.post('/tweets', function (req, res) {
  var name = req.body.name; // Uses bodyParser
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
