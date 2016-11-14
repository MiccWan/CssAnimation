'use strict'

var path = require('path');
var bodyParser = require('body-parser');

var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var http =  require('http');

app.use('/', express.static(__dirname+'/src'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
	res.sendFile(__dirname+'/index.html', function(){
		res.end();
	})
})


server.listen(9001);
