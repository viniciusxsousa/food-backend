const AppError = require("../utils/AppError");

class UserControllers {

    create(req, res) {
        const { name, email } = req.body;

        if(!name) {
            throw new AppError("Nome é obrigatório.");
        }

        res.status(201).send(`O usuário ${name} foi cadastrado com o e-mail ${email}`);
    }

}

module.exports = UserControllers;