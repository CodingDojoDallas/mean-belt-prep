var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

require('./server/config/mongoose.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/client')));
app.use(express.static(path.join(__dirname + '/bower_components')));

app.listen(3000, function(){
	console.log('listening on port 3000');
})