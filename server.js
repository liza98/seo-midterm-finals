//server.js
//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/HOME.html'));
});
app.get('/ARTICLE1', function(req, res){
  res.sendFile(path.join(__dirname, 'views/ARTICLE1.html'));
});
app.get('/ARTICLE2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/ARTICLE2.html'));
});
app.get('/ARTICLE3', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/ARTICLE3.html'));
});
app.get('/ARTICLE4', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/ARTICLE4.html'));
});
app.get('/ARTICLE5', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/ARTICLE5.html'));
});
app.get('/ARTICLE6', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/ARTICLE6.html'));
});
app.get('/ARTICLE7', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/ARTICLE7.html'));
});
app.get('/ARTICLE8', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/ARTICLE8.html'));
});
app.get('/ARTICLE9', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/ARTICLE9.html'));
});
app.get('/ARTICLE10', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/ARTICLE10.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});