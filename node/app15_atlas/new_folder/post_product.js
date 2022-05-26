const express = require("express")
const mongodb = require("mongodb")

const insert = express.Router()
// using POST method
insert.post("/", (req, res) => {
    mongodb.MongoClient.connect(process.env.CONNECTION_URL, (err, connection) => {
        if (err) throw err;
        else {
            const db = connection.db(process.env.DATABASE_NAME, {
                useNewurlPareser: true,
                useUnifiedTopology: true
            })
            console.log(req.body)
            // db.collection(process.env.COLLECTION_NAME).insertOne(req.body, (err, result) => {
            db.collection(process.env.COLLECTION_NAME).insertMany(req.body , (err, result) => {
                if (err) throw err;
                else {
                    res.send("data insert....");
                }
            })
        }
    })
})



// using GET method
// insert.get("/",(req,res)=>{
//     const data = {
//         p_id : "204",
//         p_name:"vivo",
//         p_price:30000
//     }
//     mongodb.MongoClient.connect(process.env.CONNECTION_URL,(err,connection)=>{
//         if(err) throw err;
//         else{
//             const db = connection.db(process.env.DATABASE_NAME)
//             db.collection(process.env.COLLECTION_NAME).insertOne(data,(err,result)=>{
//                 if(err) throw err;
//                 else{
//                     res.send("data insert....");
//                 }
//             })
//         }
//     })
// })
module.exports = insert