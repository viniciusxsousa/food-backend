const { Router } = require("express");
const multer = require('multer');

const DishesControllers = require('../Controllers/DishesControllers');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const uploadConfig = require('../configs/upload');

const dishesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const dishesControllers = new DishesControllers();

dishesRoutes.use(ensureAuthenticated);

dishesRoutes.post('/', dishesControllers.create);
dishesRoutes.get('/:id', dishesControllers.show);
dishesRoutes.delete('/:id', dishesControllers.delete);
dishesRoutes.get('/', dishesControllers.all);
dishesRoutes.patch('/photo', upload.single('photo'), (req, res) => {
    console.log(req.file.filename);
    res.json();
})

module.exports = dishesRoutes;