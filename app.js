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

// Exported app

module.exports = app;