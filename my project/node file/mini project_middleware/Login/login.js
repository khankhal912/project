const express =require("express");
const jwt =require("jwt-simple");
const tokenobj=require("../Token/token");
const loginModule =express.Router();

loginModule.post("/",(req,res)=>{
    const uname = req.body.uname;
    const upwd =req.body.upwd;
    if(uname==="skill"&&upwd==="qode"){
        const token = jwt.encode({"uname":uname,"upwd":upwd},"skillqode@123")
        tokenobj.token=token;
        console.log(tokenobj.token)
        res.json({"msg":"login success...",token})
    }
    else{
        res.json({"msg":"login fail..."})
    }
})
module.exports=loginModule;