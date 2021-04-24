require("dotenv").config();

const jwt = require("jsonwebtoken");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Connect DB
require("./configs/db.config");

const app = express();

//Middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
const authRoutes = require("./routes/auth.routes");
const videosRoutes = require("./routes/video.routes");
const commentRoutes = require("./routes/comment.route");

//Public Routes
app.use("/auth", authRoutes);
app.use("/videos", videosRoutes);
app.use("/comments", commentRoutes);


//Middleware of authentication
const authMiddleware = require("./middlewares/auth.middleware");
app.use(authMiddleware);

//Private Routes needed JWT

// Exported app

module.exports = app;
