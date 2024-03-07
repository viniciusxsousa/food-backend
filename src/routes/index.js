const { Router } = require('express');

const usersRoutes = require('./users.routes');
const dishesRoutes = require('./dishes.routes');
const categoriesRoutes = require('./categories.routes');
const sessionsRoutes = require('./sessions.routes');
const ingredientsRouter = require('./ingredients.routes');

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/dishes', dishesRoutes);
routes.use('/categories', categoriesRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/ingredients', ingredientsRouter);

module.exports = routes;