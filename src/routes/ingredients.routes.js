const { Router } = require('express');
const IngredientsControllers = require('../Controllers/IngredientsControllers');

const verifyUserAuthorization = require('../middlewares/verifyUserAuthorization');

const ingredientsRouter = Router();
const ingredientsControllers = new IngredientsControllers();

ingredientsRouter.post('/', verifyUserAuthorization('admin'), ingredientsControllers.create);
ingredientsRouter.delete('/:id', verifyUserAuthorization('admin'), ingredientsControllers.delete);


module.exports = ingredientsRouter;