const { Router } = require("express");

const DishesControllers = require('../Controllers/DishesControllers');

const dishesRoutes = Router();

const dishesControllers = new DishesControllers();

dishesRoutes.post('/', dishesControllers.create);
dishesRoutes.get('/:id', dishesControllers.show);
dishesRoutes.delete('/:id', dishesControllers.delete);

module.exports = dishesRoutes;