const { Router } = require("express");

const DishesControllers = require('../Controllers/DishesControllers');

const dishesRoutes = Router();

const dishesControllers = new DishesControllers();

dishesRoutes.post('/', dishesControllers.create);

module.exports = dishesRoutes;