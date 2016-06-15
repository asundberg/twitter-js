var express = require('express');
var app = express();
var swig = require('swig');
var routes = require('./routes/');

app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/views");

swig.setDefaults({ cache: false });

app.use('/', routes);


app.listen(3000, function() {
  console.log("server listening");
});
