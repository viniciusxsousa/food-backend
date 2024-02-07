const express = require('express');

const routes = require('./routes');

const PORT = 3333;

const app = express();
app.use(express.json());

app.use(routes)

app.listen(PORT, () => console.log(`the app is running on the door ${PORT}`));