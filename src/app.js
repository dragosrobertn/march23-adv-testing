const express = require('express');
const mainRouter = require('./routers/mainRouter')

const app = express();

app.use(express.json());

app.use(mainRouter);

module.exports = app;