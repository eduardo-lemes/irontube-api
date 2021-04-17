require("dotenv").config();
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

//Middleware de authenticação

//Public Routes
app.use('/auth', authRoutes);

//Private Routes needed JWT

// Exported app

module.exports = app;