const { Router } = require("express");
const multer = require('multer');

const DishesControllers = require('../Controllers/DishesControllers');
const DishesPhotoController = require('../Controllers/DishesPhotoController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const verifyUserAuthorization = require('../middlewares/verifyUserAuthorization')
const uploadConfig = require('../configs/upload');

const dishesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const dishesControllers = new DishesControllers();
const dishesPhotoController = new DishesPhotoController();

dishesRoutes.use(ensureAuthenticated);

dishesRoutes.post('/',verifyUserAuthorization('admin') , dishesControllers.create);
dishesRoutes.get('/:id', dishesControllers.show);
dishesRoutes.delete('/:id',verifyUserAuthorization('admin'),  dishesControllers.delete);
dishesRoutes.get('/', dishesControllers.all);
dishesRoutes.patch('/photo/:id', upload.single('photo'), dishesPhotoController.update);
dishesRoutes.put('/:id',verifyUserAuthorization('admin'),  dishesControllers.update);

module.exports = dishesRoutes;