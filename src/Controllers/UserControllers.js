const { hash, compare } = require('bcryptjs');

const AppError = require("../utils/AppError");
const knex = require("../database/knex");


class UserControllers {

    async create(req, res) {
        const { name, email, password } = req.body;

        if(!name) {
            throw new AppError("O nome do usuário deve ser informado");
        }

        const emailInUse = await knex("users").where({email}).first();

        if(emailInUse) {
            throw new AppError("O e-mail já está em uso.");
        }

        const passwordHash = await hash(password, 8);

        await knex("users").insert({
            name,
            email,
            password: passwordHash
        })

        res.status(201).json({
            name,
            email,
            password: passwordHash
        });
    }

    async update(req, res) {
        const { name, email, old_password, password } = req.body;
        const { id } = req.user;
        
        const user = await knex("users").where({id}).first();

        if(!user) {
            throw new AppError("Usuário não encontrado.");
        }

        const emailInUse = await knex("users").where({email}).first();

        if(emailInUse && emailInUse.id !== user.id ) {
            throw new AppError("Este e-mail já está em uso.");
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if(password && !old_password) {
            throw new AppError("Para atualizar a senha, a senha antiga deve ser informada.");
        }

        if(password && old_password) {
            const checkPassword = await compare(old_password, user.password);

            if(!checkPassword) {
                throw new AppError("A senha antiga está incorreta.");
            }

            user.password = await hash(password, 8);
        }

        await knex("users").where({id}).update(user);

        res.status(200).json(user);
    }

}

module.exports = UserControllers;