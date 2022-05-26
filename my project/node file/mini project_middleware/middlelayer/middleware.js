const express=require("express");
const tokenobj=require("../Token/token");

const middleware=(req,res,next)=>{
    const reqHeaders=req.headers;
    if(reqHeaders.token==tokenobj.token){
        // res.json({"msg":"welcome to module 3"})
        next()
    }
    else{
        res.json({"msg":"unauthorized user..."})
    }
}
module.exports=middleware