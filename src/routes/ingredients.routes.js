const { Router } = require('express');
const IngredientsControllers = require('../Controllers/IngredientsControllers');

const ingredientsRouter = Router();
const ingredientsControllers = new IngredientsControllers();

ingredientsRouter.post('/', ingredientsControllers.create);


module.exports = ingredientsRouter;