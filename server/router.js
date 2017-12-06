const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const jsonParser = bodyParser.json();
const urlencoderParser = bodyParser.urlencoded({extended: true});
const cookieParser = require('cookie-parser');

var express = require('express')
var app = express()

const ControllerTask = require('./controllers/tasks');

app.use(bodyParser.json());

// respond with "hello world" when a GET request is made to the homepage

app.post('/api/tasks', tasks.guardar);

app.get('/api/tasks', tasks.regresar);

app.delete('/api/tasks/:id', tasks.eliminar);

app.post('/api/auth/token', tasks.token );
exports.app = app