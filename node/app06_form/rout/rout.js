const express = require('express');
const studModel = require('../database/studModel')
const couresModel = require('../database/courseModel')

const studentRouter = express.Router();
studentRouter.get("/register", (req, res) => res.sendFile(__dirname + "/studentForm.html"));
studentRouter.get("/find", (req, res) => studModel.find(req.query).then(data => res.json(data)));

const courseRouter = express.Router();
courseRouter.get("/insert", (req, res) => res.sendFile(__dirname + "/courseForm.html"));
courseRouter.get("/find/:value", async(req, res) => {
    const id = req.params.value
    console.log(id)
    
   const result = await couresModel.find({coursename:id})
//    const result = await couresModel.findById(_id)
   res.send(result)
//    const result = await couresModel.find()
//    res.send(result)
});

module.exports = { studentRouter, courseRouter }