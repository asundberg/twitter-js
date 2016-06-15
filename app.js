var express = require('express');
var app = express();

app.use(function(req, res, next) {
  console.log(req.method);
  console.log(req.path);
  console.log(res.status());
  next();
});

app.use('/special/', function(req, res, next) {
  console.log('you reached this special area');
  next();
});

app.get('/', function(req, res, next) {
  res.send("Welcome!");
});

app.get('/news', function(req, res, next) {
  res.send("This is the news page!");
});



app.listen(3000, function() {
  console.log("server listening");
});
