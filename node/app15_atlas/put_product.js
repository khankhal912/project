const express = require("express");
const mongodb = require("mongodb");
const skill = mongodb.MongoClient;

const update = express.Router()
update.put("/", (req, res, next) => {
    const connection = req.db
    const db = connection.db(process.env.DATABASE_NAME, {
        useNewurlPareser: true,
        useUnifiedTopology: true
    })
    console.log(req.body)
    db.collection(process.env.COLLECTION_NAME).updateOne({ "p_id": req.body.p_id }, {
        // db.collection(process.env.COLLECTION_NAME).updateMany({ "p_name": req.body.p_name }, {
        $set: {
            // "p_name": req.body.p_name,
            "p_price": req.body.p_price
        }
    }, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "document updated...." });
        }
    });
});
module.exports = update