//facilita a criação de rotas (pesquisar pra explicar melhor)
require("dotenv").config();

const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

console.log(`db connected`);

// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição (put) e delete)
// req.body = acessar corpo da requisição (criar ou editar)

//Cross-Origin Resource Sharing
app.use(cors());
//Diz pra aplicação apenas utilizar formato json
app.use(express.json());
//Diz pra aplicação usar o arquivo routes.js
app.use(routes);

app.listen(process.env.PORT || 3000);