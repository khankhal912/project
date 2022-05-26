const express = require("express");
const app = express();
const controller = require("../controller/controller")

const register = express.Router();

register.get("/create_table",controller.create_table)
register.post("/insert",controller.insert);
register.get("/find", controller.find);
register.put("/update", controller.update)
register.delete("/delete", controller.delete)
register.get("/orderby", controller.orderby)

module.exports = register;



// {
//     "firstname":"Jaldip",
//     "lastname":"Bhalani",
//     "contact":"1234567890",
//     "email":"jaldipgmail.com",
//     "password":"123456",
//     "configpass":"123456"
// }