var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);

app.get('/',function(req, res) {
  res.sendFile(path.join(__dirname,'../build/index.html'));
});
console.log(path.join(__dirname ,'../build/index.html'));
app.use(express.static(path.join(__dirname,'../build')));
http.listen(8080);
