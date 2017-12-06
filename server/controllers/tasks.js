var basicAuth = require('basic-auth');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var modelos = require ('../models/modelos').modelos;
var express = require('express');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

exports.guardar = function(req, res, datos){ 

	res.status(400).send('Something broke!');

}
exports.regresar = function(req, res){ 

}
exports.eliminar = function(req, res, id){ 

}
exports.token = function(req, res){ 
	res.status(404).send('Something broke!');
}