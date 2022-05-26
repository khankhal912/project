const express = require("express");
const app=express();

//middleware
const authorization=(req,res,next)=>{
    const allHeadrs=req.headrs;
    console.log(req.headrs)
    if(allHeadrs.token =="khankhal"){
        next();
    }
    else{
        res.send({"msg":"unauthorized user.."});
    }
}

app.get("/demo",[authorization],(req,res)=>{
    if(req.query.uname=="skill"&&req.query.upwd=="qode"){
        res.send({
            login:"success"
        })
    }
    else{
        res.send({
            login:"fail"
        })
    }
})

app.listen(5151,()=>{
    console.log("sever listeing the port no.5151");
});