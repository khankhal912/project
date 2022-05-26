const express=require("express");
const tokenobj=require("../Token/token");

const module1=express.Router();

module1.get("/",require("../middlelayer/middleware"),(req,res)=>{
    // const reqHeaders=req.headers;
    res.json({"msg":"welcome to module 1 middleware.."})
    // console.log(tokenobj.token);
    // if(reqHeaders.token==tokenobj.token){
    // }
    // else{
    //     res.json({"msg":"unauthorized user..."})
    // }
})

module.exports=module1;