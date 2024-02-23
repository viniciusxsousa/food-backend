const { Router } = require("express");

const DishesControllers = require('../Controllers/DishesControllers');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const dishesRoutes = Router();

const dishesControllers = new DishesControllers();

dishesRoutes.use(ensureAuthenticated);

dishesRoutes.post('/', dishesControllers.create);
dishesRoutes.get('/:id', dishesControllers.show);
dishesRoutes.delete('/:id', dishesControllers.delete);
dishesRoutes.get('/', dishesControllers.all);

module.exports = dishesRoutes;