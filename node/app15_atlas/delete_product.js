const express = require("express");
const mongodb = require("mongodb");

const dele = express.Router()
dele.delete("/", (req, res, next) => {
    const connection = req.db;
    const db = connection.db(process.env.DATABASE_NAME, {
        useNewurlPareser: true,
        useUnifiedTopology: true
    })
    console.log(req.body);
    db.collection(process.env.COLLECTION_NAME).deleteOne(req.body, (err, result) => {
        // db.collection(process.env.COLLECTION_NAME).deleteMany(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "document deleted..." });
        }
    });

});
module.exports = dele;