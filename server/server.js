var http = require('http');
var express = require('express');
var parser = require('body-parser');
var routeAPI = require('./routesAPI.js')
var routeSign = require('./routesSign.js');
var db = require('./db/db.js');
var app = express();
module.exports.app = app;

app.use(parser.json());
app.use('/api', routeAPI);
app.use('/', routeSign);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.static('/public'));
app.set('port', process.env.PORT || 1337); // for deployment

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});