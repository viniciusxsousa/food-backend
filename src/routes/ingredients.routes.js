const { Router } = require('express');
const IngredientsControllers = require('../Controllers/IngredientsControllers');

const verifyUserAuthorization = require('../middlewares/verifyUserAuthorization');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const ingredientsRouter = Router();
const ingredientsControllers = new IngredientsControllers();

ingredientsRouter.use(ensureAuthenticated);

ingredientsRouter.post('/', verifyUserAuthorization('admin'), ingredientsControllers.create);
ingredientsRouter.delete('/:id', verifyUserAuthorization('admin'), ingredientsControllers.delete);


module.exports = ingredientsRouter;