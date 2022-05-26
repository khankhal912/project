const express = require("express");
const rout = express.Router()

const controller = require("../controller/controller");

const services = require("../services/render");

rout.get("/",services.homeRoutes);

rout.get("/add-course",services.add_course);

rout.get("/update-course",services.update_course);

//API
rout.post("/api/course",controller.create);
rout.get("/api/course",controller.find);
rout.put("/api/course/:id",controller.update);
rout.delete("/api/course/:id",controller.delete);

module.exports = rout;