const { Router } = require('express');

const userRoutes = Router();

userRoutes.post('/', (req, res) => {
    const { name, email } = req.body;

    res.send(`O usuário ${name} foi cadastrado com o e-mail ${email}`);

});

module.exports = userRoutes;