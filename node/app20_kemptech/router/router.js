const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("../model/model");
const controller = require("../controller/controller");

// mongoose connect
mongoose.connect("mongodb://localhost:27017/userDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const register = express.Router();

//API
register.post("/signup", controller.signup);
register.post("/login", controller.login);
register.put("/update", controller.update);
register.delete("/delete", controller.delete);

module.exports = register;


// [
//     {
//         "email": "jaldip@gmail.com",
//         "password": "jaldip123",
//         "salary.total_salary": 10000
//     },
//     {
//         "email": "jatin@gmail.com",
//         "password": "jatin123",
//         "salary.total_salary": 20000
//     },
//     {
//         "email": "rakesh@gmail.com",
//         "password": "rakesh123",
//         "salary.total_salary": 30000
//     },
//     {
//         "email": "jay@gmail.com",
//         "password": "jay123",
//         "salary.total_salary": 40000
//     },
//     {
//         "email": "jayesh@gmail.com",
//         "password": "jayesh123",
//         "salary.total_salary": 50000
//     }

// ]
