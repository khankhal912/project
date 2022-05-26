const express=require("express");
var app=express();
var Module1=express.Router();

Module1.get("/",(req,res)=>{
    res.json({"message":"Module 1 get"});
});
Module1.post("/pro",(req,res)=>{
    res.json({"message":"Module 1 post"});
})

module.exports=Module1