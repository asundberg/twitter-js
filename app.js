var express = require('express');
var app = express();
var swig = require('swig');
var routes = require('./routes/');
var socketio = require('socket.io');

app.set('views', __dirname + '/views'); // First it finds what it's looking for by looking in the 'views' folder.
app.set('view engine', 'html'); // This is how it knows that it should produce html.
app.engine('html', swig.renderFile); // This is where we tell express to use the swig rendering function for rendering, and it knows it because it is looking for html.

swig.setDefaults({ cache: false });

var server = app.listen(3000);
var io = socketio.listen(server);
// Didn't implement io yet.

app.use('/', routes);

app.use(express.static('public'));
// Will automatically check 'public' folder for any file corresponding to the URI.
// If that file exists, send it to the client.
// Else, call 'next' (move on to our hand-written routes).
