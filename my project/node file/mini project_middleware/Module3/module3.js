const express=require("express");
const tokenobj=require("../Token/token");

const module3=express.Router();

module3.get("/",require("../middlelayer/middleware"),(req,res)=>{
    // const reqHeaders=req.headers;
     res.json({"msg":"welcome to module 3 useing middleware"})
    // console.log(tokenobj.token);
//     if(reqHeaders.token==tokenobj.token){
//     }
//     else{
//         res.json({"msg":"unauthorized user..."})
//     }
})

module.exports=module3;