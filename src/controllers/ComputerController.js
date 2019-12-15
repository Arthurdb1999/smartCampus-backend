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

        const { idPc } = req.body.computer;
        const { disponivel } = req.body.computer;

        const rescomputer = await Computer.updateOne({idPc: idPc}, {
            $set: {disponivel: disponivel}
        });
        
        console.log("updated idPc: ", idPc)

        const computersocket = {
            idPc: idPc,
            disponivel: disponivel,
        }

        req.io.emit('change_computer', computersocket);

        return res.json(rescomputer);

    }
} 
