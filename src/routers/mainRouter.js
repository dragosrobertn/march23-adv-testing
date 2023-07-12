const express = require('express');
const sendStatus200 = require('../controllers/sendStatus')

const mainRouter = express.Router();

mainRouter.get("/", sendStatus200);

module.exports = mainRouter;