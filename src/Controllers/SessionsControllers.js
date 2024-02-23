const knex = require('../database/knex/index');
const AppError = require('../utils/AppError');
const authConfig = require('../configs/auth');
const { sign } = require('jsonwebtoken');

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

        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        });

        return res.json({user, token});
    }

}

module.exports = SessionsControllers