const knex = require('../database/knex');

class CategoriesControllers {

    async all(req, res) {

        const categories = await knex('categories').orderBy('name');

        res.json(categories)
    }

}

module.exports = CategoriesControllers;