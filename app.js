require("dotenv").config();

const jwt = require('jsonwebtoken');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Connect DB
require("./config/db.config")

const app = express();

//Middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Routes
const authRoutes = require('./routes/auth.routes');


//Public Routes
app.use('/auth', authRoutes);

//Middleware of authentication
const authMiddleware = require('./middlewares/auth.middleware');
app.use(authMiddleware);

//Private Routes needed JWT

// Exported app

module.exports = app;