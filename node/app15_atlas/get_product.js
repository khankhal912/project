const express = require("express");
const mongodb = require("mongodb");
// const skill = mongodb.MongoClient;

const find = express.Router()
find.get("/", (req, res, next) => {
    const connection = req.db
    // console.log(req.db)
    const db = connection.db(process.env.DATABASE_NAME, {
        useNewurlPareser: true,
        useUnifiedTopology: true
    })
    console.log(req.query)
    db.collection(process.env.COLLECTION_NAME).find().toArray((err, data) => {
    // db.collection(process.env.COLLECTION_NAME).find({p_name:req.query.p_name}).toArray((err, array) => {
        if (err) throw err;
        else {
            res.send(data);
        }
    })
})
module.exports = find