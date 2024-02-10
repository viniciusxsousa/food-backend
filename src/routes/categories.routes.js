const { Router } = require('express');

const CategoriesControllers = require('../Controllers/CategoriesControllers');

const categoriesRouter = Router();

const categoriesControllers = new CategoriesControllers();

categoriesRouter.get('/', categoriesControllers.all);

module.exports = categoriesRouter;