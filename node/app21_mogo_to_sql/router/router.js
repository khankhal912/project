const express = require("express");
const app = express();
const controller = require("../controller/controller")

const register = express.Router();

register.get("/mysql", controller.MYSQL_to_mongoDB);
register.get("/mongodb", controller.mongoDB_to_MYSQL);


module.exports = register;



// {
//     "firstname":"Jaldip",
//     "lastname":"Bhalani",
//     "contact":"1234567890",
//     "email":"jaldipgmail.com",
//     "password":"123456",
//     "configpass":"123456"
// }