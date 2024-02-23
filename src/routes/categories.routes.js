const { Router } = require('express');

const CategoriesControllers = require('../Controllers/CategoriesControllers');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const categoriesRouter = Router();

const categoriesControllers = new CategoriesControllers();

categoriesRouter.get('/', ensureAuthenticated, categoriesControllers.all);

module.exports = categoriesRouter;