const express = require("express");
const app = express();

var mod2 = express.Router();
mod2.get("/", (req, res) => {
    res.json({ "message": "module 2 get" });
})
mod2.get("/about", (req, res) => {
    res.json({ "message": "module 2 get about" });
})

mod2.post("/", (req, res) => {
    res.json({ "message": "module 2 post" });
})
mod2.post("/about", (req, res) => {
    res.json({ "message": "module 2 post about" });
})

module.exports = mod2;