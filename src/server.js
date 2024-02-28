require('express-async-errors');

const express = require('express');
const cors = require('cors')

const AppError = require('./utils/AppError');
const uploadConfig = require('../src/configs/upload');

const routes = require('./routes');

const PORT = 3333;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

app.use((error, request, response, next) => {

    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "Error",
            message: error.message
        })
    }

    console.error(error);

    return response.status(500).json({
        status: "Error",
        message: "Error Internal Server"
    })

})

app.listen(PORT, () => console.log(`the app is running on the door ${PORT}`));