//                   http://localhost:5555/student/register
//                   http://localhost:5555/course/insert
const express = require('express');
const app = express();
const bcryptjs = require("bcryptjs")
const mongoose = require('mongoose')

//databasesz
const studModel = require('./database/studModel')
const couresModel = require('./database/courseModel')

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
// app.use(bodyparser.json());

const { studentRouter, courseRouter } = require("./rout/rout")
app.use("/student", studentRouter);
app.use("/course", courseRouter);

//mongoose connect
mongoose.connect("mongodb://localhost:27017/jaldip", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

async function insert(model, queryObject, id_start_no) {
    try {
        var count = await model.count().then(data => data)

        if (count == 0) {
            queryObject._id = id_start_no
        }
        else {
            var lastRecord = await model.find().select("_id").sort({ _id: -1 }).limit(1);
            queryObject._id = lastRecord[0]._id + 1
        }
        //data insert in database
        console.log(queryObject)
        model.insertMany(queryObject)
    }
    catch (error) {
        console.log(error)
    }
}

app.post("/submitStudent", (req, res) => insert(studModel, req.body, 1001))

app.post("/submitCourse/", async (req, res) => {
    req.body.fees = await bcryptjs.hash(req.body.fees, 10);
    insert(couresModel, req.body, 101)
})

app.post("/findCourse", async(req, res) => await couresModel.find({ coursename: req.body.value }).then(data => res.json(data)))

// listing port 
port = process.env.PORT || 5555
app.listen(port, () => console.log(`listing port ${port}`))

//fallback function
app.use("/", (req, res) => res.send("NO PAGE"))