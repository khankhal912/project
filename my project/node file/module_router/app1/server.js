const express =require("express");
const app=express();
//const cors=require("cors");
const data = require("./data");
const user =require("./user");
const { default: mongoose } = require("mongoose");
app.use(express.json());
//app.use (cors());

mongoose.connect('mongodb://localhost:27017/skilldata',{
    useNewurlParser:true,
    useunifiedToPology:true
});
app.get("/insert",(req,res)=>{
    const result=user.insertMany(data.users);
    res.send(result);
});
const port=process.env.port || 9292
app.listen(port,()=>{
    console.log(`listen port no.${port}`)
});