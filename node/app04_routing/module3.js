const express = require("express");
const app = express();

var mod3 = express.Router();

mod3.delete("/", (req, res) => {
    res.json({ "message": "module 3 dele" });
})
mod3.post("/delete", (req, res) => {
    res.json({ "message": "module 3 dele about" });
})

module.exports = mod3;