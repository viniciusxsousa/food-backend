const AppError = require('../utils/AppError');
const knex = require('../database/knex');

class DishesControllers {

    async create(req, res){
        const {name, description, category, price} = req.body;

        if(!name) {
            throw new AppError("O nome do prato deve ser informado.");
        }

        if(!price) {
            throw new AppError("O valor do prato deve ser informado.");
        }

        await knex('dishes').insert({
            name,
            description,
            category,
            price
        })

        res.status(201).json({name, description, category, price});
    }

}

module.exports = DishesControllers