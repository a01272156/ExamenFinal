const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const jsonParser = bodyParser.json();
const urlencoderParser = bodyParser.urlencoded({extended: true});


var express = require('express')
var app = express()

const ControllerTask = require('./controllers/tasks');

// respond with "hello world" when a GET request is made to the homepage

app.post('/api/tasks', function (req, res) {
  res.send('POST request to the homepage')
})
app.get('/api/tasks', function (req, res) {
  res.send('GET request to the homepage')
})
app.post('/api/auth/token', function (req, res) {
  res.send('POST request to the homepage')
})
exports.app = app