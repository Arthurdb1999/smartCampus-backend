//index, show, store, update, destroy
//Métodos de um controller MVC

const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { nome, matricula } = req.body;
        
        //Procura se ja tem algum usuario cadastrado com aquele email
        let user = await User.findOne({ matricula });

        if (!user) {
            user = await User.create({ nome, matricula });
        }

        return res.json(user);
    }
};