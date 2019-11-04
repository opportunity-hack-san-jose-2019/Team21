var express = require('express');
var app = express();
var http = require("http");
//setting middleware

app.use(express.static('public')); 
app.use('/', express.static('./'));


var server = http.createServer(app);

//socketIO.on('connection', function(socket){
//	console.log('a user has connected');
//});

/*socketIO.on('connection', function(socket){
  console.log('a user connected');
});
*/

/* var io = socketIO.listen(server, {log: false});

io.sockets.on("connection", function(socket){
    socket.on("sendVar", function(value){

        console.log("A user has connected");

    });
}); */

server.listen(5000);

/*const request = require('request');*/

/*request('', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});*/


