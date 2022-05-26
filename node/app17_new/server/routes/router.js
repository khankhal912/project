const express = require("express");
const rout = express.Router()

const controller = require("../controller/controller");

const services = require("../services/render");

rout.get("/",services.homeRoutes);

rout.get("/add-product",services.add_product);

// rout.get("/update-product",services.update_product);

//API
rout.post("/api/product",controller.create);
rout.get("/api/product",controller.find);
rout.put("/api/product/:id",controller.update);
rout.delete("/api/product/:id",controller.delete);

module.exports = rout;