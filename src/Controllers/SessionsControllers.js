const knex = require('../database/knex/index');
const AppError = require('../utils/AppError');

class SessionsControllers {

    async create(req, res) {
        const { email, password } = req.body;

        const user = await knex('users').where({email}).first();

        if(!user) {
            throw new AppError('E-mail ou senha inválido.', 401);
        }

        return res.json({user});
    }

}

module.exports = SessionsControllers