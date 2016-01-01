var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);

app.get('/',function(req, res) {
  res.sendFile(path.join(__dirname + '/../app/index.html'));
});

app.use(express.static(path.join(__dirname,'../')));
http.listen(8080);
