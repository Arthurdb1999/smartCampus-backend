//index, show, store, update, destroy
//Métodos de um controller MVC

const Computer = require('../models/Computers');

module.exports = {
    async index(req, res) {

        const computers = await Computer.find(req.query).sort({ idPc: 1 });
        console.log("retrieved");
        return res.json(computers);
        
    },

    async update(req, res){

        const rescomputer = await Computer.updateOne({idPc: req.body.computer.idPc}, {
            $set: {disponivel: req.body.computer.disponivel}
        });
        console.log("updated idPc: ", req.body.computer.idPc)
        return res.json(rescomputer);
    }
} 
