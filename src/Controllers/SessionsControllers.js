const knex = require('../database/knex/index');
const AppError = require('../utils/AppError');

const { compare } = require('bcryptjs');

class SessionsControllers {

    async create(req, res) {
        const { email, password } = req.body;

        const user = await knex('users').where({email}).first();

        if(!user) {
            throw new AppError('E-mail ou senha inválido.', 401);
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new AppError('E-mail ou senha inválido.', 401);
        }

        return res.json(user);
    }

}

module.exports = SessionsControllers