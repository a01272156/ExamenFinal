const basicAuth = require('basic-auth');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const modelos = require ('../models/models').modelos;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

exports.guardar = function(req, res, datos){ 

	res.status(400).send('Something broke!');

}
exports.regresar = function(req, res){ 
	response.setHeader('Content-Type', 'application/json');
    response.send(modelos);
}
exports.eliminar = function(req, res, id){ 

}
exports.token = function(req, res){ 
	res.status(404).send('Something broke!');
}