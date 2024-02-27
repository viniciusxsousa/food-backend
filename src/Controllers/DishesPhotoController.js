const knex = require('../database/knex');
const AppError = require('../utils/AppError');
const DiskStorage = require('../providers/DiskStorage');

class DishesPhotoController {

    async update(req, res) {
        const userId = req.user.id;
        const fileName = req.file.filename;
        const dishedId = req.params.id

        const user = await knex("users").where({ id: userId }).first();
        const dished = await knex("dishes").where({id: dishedId}).first();

        const diskStorage = new DiskStorage();

        if(!user) {
            throw new AppError('Somente usuários autorizados podem trocar a imagem.', 401);
        }

        if(dished.picture) {
            await diskStorage.deleteFile(dished.picture);
        }

        const file = await diskStorage.saveFile(fileName);
        dished.picture = file;

        await knex('dishes').update(dished).where({id: dishedId});

        return res.json(dished);
      
    }

}

module.exports = DishesPhotoController