const AppError = require("../utils/AppError");

const knex = require("../database/knex");

class UserControllers {

    async create(req, res) {
        const { name, email, password } = req.body;

        if(!name) {
            throw new AppError("O nome do usuário deve ser informado");
        }

        await knex("users").insert({
            name,
            email,
            password
        })

        res.status(201).json({
            name,
            email,
            password
        });
    }

}

module.exports = UserControllers;