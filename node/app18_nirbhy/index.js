const express = require("express");
const app = express();
const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:true}))

const dotenv = require('dotenv')
dotenv.config();

const cors = require("cors");
app.use(cors());

const register = require("./server/routers/router")
app.use("/register",register);

const port = process.env.PORT || 1234
app.listen(port,()=>console.log(`listing port ${port}`))

//fallback function
app.use("/",(req,res)=>res.send("404 NO PAGE"));