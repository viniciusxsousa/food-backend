class UserControllers {

    create(req, res) {
        const { name, email } = req.body;

        res.status(201).send(`O usuário ${name} foi cadastrado com o e-mail ${email}`);
    }

}

module.exports = UserControllers;