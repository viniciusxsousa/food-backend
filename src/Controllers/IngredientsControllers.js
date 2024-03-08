const AppError = require('../utils/AppError');
const knex = require('../database/knex');

class IngredientsControllers {

    async create(req, res) {
        const { name, dishe_id } = req.body;

        if(!name) {
            throw new AppError('O nome do igrediente dever ser informado.');
        }

        if(!dishe_id) {
            throw new AppError('O id do prato do igrediente não foi informado.');
        }

        const [ingredient_id] = await knex('ingredients').insert({name, dishe_id});

        res.json({id: ingredient_id, name, dishe_id});

    }

    async delete(req, res) {
        const { id } = req.params;

        await knex('ingredients').where({id}).delete();

        res.json({message: "Igrediente deletado."});
    }

} 

module.exports = IngredientsControllers