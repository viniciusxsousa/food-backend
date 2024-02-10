const AppError = require('../utils/AppError');
const knex = require('../database/knex');

class DishesControllers {

    async all(req, res) {
        const { name, ingredients } = req.query;

        let dishes;

        if(ingredients) {

            const filterIngredients = ingredients.split(',').map(ingredient => ingredient.trim());

            dishes = await knex("ingredients")
                            .select([
                                "dishes.name",
                                "dishes.description",
                                "dishes.price"
                            ])
                            .whereLike('dishes.name', `%${name}%`)
                            .whereIn('ingredients.name', filterIngredients)
                            .innerJoin('dishes', 'dishes.id', "ingredients.dishe_id")
                            .orderBy('dishes.name');

            

        } else {

            dishes = await knex('dishes').whereLike('name', `%${name}%`).orderBy('name');

        }

        res.json(dishes);
    }
    
    async create(req, res){
        const {name, description, category, price, ingredients} = req.body;

        if(!name) {
            throw new AppError("O nome do prato deve ser informado.");
        }

        if(!price) {
            throw new AppError("O valor do prato deve ser informado.");
        }

        const [dished] = await knex('dishes').insert({
            name,
            description,
            category,
            price
        })


        const ingredientsList = ingredients.map((ingredient) => {
            return {
                name: ingredient,
                dishe_id: dished
            }
        })

        await knex("ingredients").insert(ingredientsList);

        res.status(201).json({name, description, category, price});
    }

    async show(req, res){
        const { id } = req.params;

        const dished = await knex('dishes').where({id}).first();

        const ingredients = await knex('ingredients').where({dishe_id: dished.id});

        res.json({
            dished,
            ingredients
        });
    }

    async delete(req, res) {
        const { id } = req.params;

        await knex('dishes').where({id}).delete();

        res.json();
    }

}

module.exports = DishesControllers