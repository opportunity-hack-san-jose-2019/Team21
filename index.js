var express = require('express');
var app = express();
//setting middleware

app.use(express.static('public')); 
app.use('/', express.static('./'));

var server = app.listen(5000);