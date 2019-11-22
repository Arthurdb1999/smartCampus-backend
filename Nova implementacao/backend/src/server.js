//facilita a criação de rotas (pesquisar pra explicar melhor)
const express = require('express');
const routes = require('./routes');
const db = require('./db');


const app = express();


// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição (put) e delete)
// req.body = acessar corpo da requisição (criar ou editar)

//Diz pra aplicação apenas utilizar formato json
app.use(express.json());

//Diz pra aplicação usar o arquivo routes.js
app.use(routes);

app.listen(3000);