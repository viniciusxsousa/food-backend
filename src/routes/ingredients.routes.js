const { Router } = require('express');
const IngredientsControllers = require('../Controllers/IngredientsControllers');

const ingredientsRouter = Router();
const ingredientsControllers = new IngredientsControllers();

ingredientsRouter.post('/', ingredientsControllers.create);
ingredientsRouter.delete('/:id', ingredientsControllers.delete);


module.exports = ingredientsRouter;