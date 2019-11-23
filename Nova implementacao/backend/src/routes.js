const express = require('express');
const ComputerController = require('./controllers/ComputerController');

//const initial = require

// Router é responsavel pelas rotas
const routes = express.Router();

// dentro do routes temos get, post, put, delete, etc
// Define se será put, post, get, delete e escolhe a rota 
// req é oq o usuario manda e res é a resposta do backend (vai retornar em formato json

routes.get('/computers', ComputerController.index);
routes.post('/computers', ComputerController.update);

//routes.post('/intial', )

//Exporta as rotas
module.exports = routes;