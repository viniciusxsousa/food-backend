const { Router } = require('express');

const usersRoutes = require('./users.routes');
const dishesRoutes = require('./dishes.routes');
const categoriesRoutes = require('./categories.routes');

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/dishes', dishesRoutes);
routes.use('/categories', categoriesRoutes);

module.exports = routes;