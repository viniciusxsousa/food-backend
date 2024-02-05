const express = require('express');

const PORT = 3333;

const app = express();

app.listen(PORT, () => console.log(`the app is running on the door ${PORT}`));