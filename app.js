var express = require('express');
var app = express();
var swig = require('swig');

app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/views");

swig.setDefaults({ cache: false });

app.use(function(req, res, next) {
  console.log(req.method);
  console.log(req.path);
  next();
});

app.use('/special/', function(req, res, next) {
  console.log('you reached this special area');
  next();
});

app.get('/', function(req, res, next) {
  var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.get('/news', function(req, res, next) {
  res.send("This is the news page!");
});



app.listen(3000, function() {
  console.log("server listening");
});
