const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://smartcampus:smartcampus@researchroom-vdqcn.mongodb.net/researchroom', {
mongoose.connect('mongodb+srv://smartcampus:CFw4iLQn7RhZoEdb@cluster0-vanl8.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    
})
let db = mongoose.connection
db.once(`open`,()=>{
    console.log(`db connected`)
})
//site para verificar se a porta já está em uso: portquiz.net:27017


module.exports = db;

