//                   http://localhost:5555/student/insert
//                   http://localhost:5555/course/insert

const express = require("express")
const app = express()
// app.use(express.json())


const cors = require("cors")
app.use(cors())

const dotenv = require("dotenv")
dotenv.config()

const bcryptjs = require("bcryptjs")

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

const mongoExpressReq = require("mongo-express-req");
app.use(mongoExpressReq(process.env.CONNECTION_URL));

const { studentRouter, courseRouter } = require("./rout/rout")
app.use("/student", studentRouter);
app.use("/course", courseRouter);


// listing port 
port = process.env.PORT || 5555
app.listen(port, () => console.log(`listing port ${port}`))

//fallback function
app.use("/", (req, res) => res.send("NO PAGE"))