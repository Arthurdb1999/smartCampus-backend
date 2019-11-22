//index, show, store, update, destroy
//Métodos de um controller MVC

const Computer = require('../models/Computers');

module.exports = {
    async index(req, res) {

        const computers = await Computer.find(req.query);

        return res.json(computers);
        
    },

    async update(req, res){

        const computers = await Computer.updateOne(req.query, {
            $set: {disponivel: req.body.disponivel},
            $set: {montado: req.body.montado}
        });
        console.log("updated")
        return res.json(computers);
        console.log("updated2")
    }
}    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
