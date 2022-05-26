const express = require("express");
const app = express();

var mod1 = express.Router();
mod1.get("/", (req, res) => {
    res.json({ "message": "module 1 get" });
})
mod1.get("/about", (req, res) => {
    res.json({ "message": "module 1 get about" });
})

mod1.post("/", (req, res) => {
    res.json({ "message": "module 1 post" });
})
mod1.post("/about", (req, res) => {
    res.json({ "message": "module 1 post about" });
})

module.exports = mod1;