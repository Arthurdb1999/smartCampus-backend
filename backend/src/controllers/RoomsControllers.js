//index, show, store, update, destroy
//Métodos de um controller MVC

const Computer = require('../models/Computers');

module.exports = {
    async index(req, res) {

        const rooms = await Computer.find(req.query).sort({ idPc: 1 });
        console.log("retrieved aaa");
        return res.json(rooms);   
    }
} 
