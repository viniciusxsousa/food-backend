const { Router } = require('express');

const UserControllers = require('../Controllers/UserControllers');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const userRoutes = Router();

const userControllers = new UserControllers();

userRoutes.post('/', userControllers.create);
userRoutes.put('/', ensureAuthenticated, userControllers.update);

module.exports = userRoutes;