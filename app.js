var express = require('express');
var app = express();
var swig = require('swig');
var routes = require('./routes/');
var socketio = require('socket.io');

app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/views");

swig.setDefaults({ cache: false });

app.use('/', routes);

app.use(express.static('public'));


var server = app.listen(3000);
var io = socketio.listen(server);
