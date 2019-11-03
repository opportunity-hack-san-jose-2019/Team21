var express = require('express');
var app = express();
var http = require("http");

//setting middleware
app.use(express.static('public')); 
app.use('/', express.static('./'));

var server = http.createServer(app);

server.listen(5000);



