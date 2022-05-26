const express = require('express');
const mongodb = require("mongodb");

// ==============================================================================================================================================
const studentRouter = express.Router();
studentRouter.get("/insert", (req, res) => res.sendFile(__dirname + "/studentForm.html"));
studentRouter.post("/submitStudent", (req, res) => {
    const connection = req.db;
    const db = connection.db(process.env.DATABASE_NAME);
    console.log(req.body)
    db.collection(process.env.COLLECTION_NAME).insertOne(req.body, (err) => {
        if (err) throw err;
        else {
            res.send("data submited...");
        }
    });
});
studentRouter.get("/find", (req, res) => {
    console.log("hello")
    const db = req.db.db(process.env.DATABASE_NAME);
    db.collection(process.env.COLLECTION_NAME).find().toArray((err, array) => {
        if (err) throw err;
        else {
            res.send(array)
        }
    })
});

// ==============================================================================================================================================

const courseRouter = express.Router();
courseRouter.get("/insert", (req, res) => res.sendFile(__dirname + "/courseForm.html"));
courseRouter.post("/submitCourse", (req, res) => {
    const connection = req.db;
    const db = connection.db(process.env.DATABASE_NAME);
    console.log(req.body)
    db.collection(process.env.COLLECTION_NAME2).insertOne(req.body, (err) => {
        if (err) throw err;
        else {
            res.send("data submited...");
        }
    });
});
courseRouter.get("/find", (req, res) => {
    console.log("hello")
    const connection = req.db;
    const db = connection.db(process.env.DATABASE_NAME);
    // console.log(db)
    db.collection(process.env.COLLECTION_NAME2).find().toArray((err, array) => {
        if (err) throw err;
        else {
            res.send(array)
        }
    })
});
courseRouter.get("/update", (req, res) => {
    const connection = req.db;
    const db = connection.db(process.env.DATABASE_NAME);
    console.log(req.body)
    db.collection(process.env.COLLECTION_NAME2).updateOne({"coursename":req.body.coursename}, (err) => {
        if (err) throw err;
        else {
            res.send("data submited...");
        }
    });
});

// ==============================================================================================================================================



module.exports =  { studentRouter, courseRouter};