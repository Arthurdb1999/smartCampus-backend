const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    nome: String,
    matricula: Number,
});

module.exports = mongoose.model('User', UserSchema);