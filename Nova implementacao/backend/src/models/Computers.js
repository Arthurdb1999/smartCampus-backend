const mongoose = require('mongoose');

//Colunas do BD de um computador
const ComputerSchema = new mongoose.Schema({
    id: Number,
    aluno: String,
    matricula: Number,
    disponivel: Boolean
})

//Digo para o mongo que ao criar um Computer, ele deve utilizar o ComputerSchema
module.exports = mongoose.model('Computer', ComputerSchema);