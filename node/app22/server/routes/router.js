const express = require('express');
const connectDB = require('../database/connection')
const controller = require("../controller/controller")
const services = require("../services/render")
const auth = require("../middleware/auth")

const rout = express.Router();

connectDB()

rout.get("/", services.index);
rout.get("/register", services.register);
rout.get("/login", services.login);
rout.get("/secret", auth, services.secret);

//API
rout.post("/submitUser", controller.submitUser);
rout.post("/submitLogin", controller.submitLogin);
rout.get("/logout", controller.logout);


module.exports = rout