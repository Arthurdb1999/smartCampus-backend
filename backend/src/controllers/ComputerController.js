//index, show, store, update, destroy
//Métodos de um controller MVC

const Computer = require('../models/Computers');

module.exports = {
    async index(req, res) {

        const computers = await Computer.find(req.query).sort({ idPc: 1 });
        console.log("retrieved")
        return res.json(computers);
        
    },

    async update(req, res){

        const rescomputer = await Computer.updateOne(req.body.computer.idPc, {
            $set: {disponivel: req.body.computer.disponivel}
        });
        console.log("updated")
        return res.json(rescomputer);
    }
}    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
