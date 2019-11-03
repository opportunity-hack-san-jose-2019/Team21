var express = require('express');
var app = express();
var http = require("http");
var socketIO = require("socket.io")();
//setting middleware

app.use(express.static('public')); 
app.use('/', express.static('./'));


var server = http.createServer(app);

socketIO.on('connection', function(socket){
	console.log('a user has connected');
});


server.listen(5000);


//var server = app.listen(5000);

