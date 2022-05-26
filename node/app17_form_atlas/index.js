const express = require("express");
const app = express();

const path = require("path");

const dotenv = require("dotenv");
dotenv.config({path:'config.env'})

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

const ejs = require("ejs");

const connectDB = require("./server/database/connection")
connectDB();

//set view engine
app.set("view engine","ejs");


// load router
app.use("/",require("./server/routes/router"));

//load assent
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))



const port = process.env.PORT || 1234
app.listen(port,()=>console.log(`server listing ${port}`));

//fallback function
app.use("/",(req,res)=>res.send("NO Page"));