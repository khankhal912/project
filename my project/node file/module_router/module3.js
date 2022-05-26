const express=require("express");
var app=express();

var module3=express.Router();
module3.delete("/delete",(req,res)=>{
    res.json({"message":"delet module.."});
})
module.exports=module3