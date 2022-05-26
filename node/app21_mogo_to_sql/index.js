const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json())

const rout = require("./router/router");
app.use("/",rout);


const cors = require("cors");
app.use(cors());

mongoose.connect("mongodb://localhost:27017/transDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const port = 5151;
app.listen(port,()=>{
    console.log(`listing port : ${port}`)
    
});

//fallback function
app.use("/",(req,res)=>res.send("404 NO PAGE"));