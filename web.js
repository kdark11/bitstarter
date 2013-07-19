var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.use("/styles", express.static(__dirname + '/styles'));

app.get('/', function(request, response) {
  var buf = new Buffer(256);
  response.send(fs.readFileSync('./index.html', 'utf8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
