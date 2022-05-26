const express=require("express");
const tokenobj=require("../Token/token");

const module2=express.Router();

module2.get("/",require("../middlelayer/middleware"),(req,res)=>{
    // const reqHeaders=req.headers;
    res.json({"msg":"welcome to module 2 middleware.."})
    // console.log(tokenobj.token);
    // if(reqHeaders.token==tokenobj.token){
    // }
    // else{
    //     res.json({"msg":"unauthorized user..."})
    // }
})

module.exports=module2;