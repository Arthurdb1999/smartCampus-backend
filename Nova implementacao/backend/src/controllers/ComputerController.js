//index, show, store, update, destroy
//Métodos de um controller MVC

const Computer = require('../models/Computers');
const db = require('../db');

module.exports = {
    async index(req, res) {
        //store and destroy
        Computer.find({},(err, docs)=>{
            if (err) res.send(err)
            res.send(docs)
        })
        //db.collections.find()
        
    }
}