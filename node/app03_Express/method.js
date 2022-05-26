var express = require("express");
var app =express();

app.get("/",(req,res)=>{
    console.log("req.url:",req.url)
    console.log("req.method:",req.method)
    console.log("req.header:",req.header)
    console.log("req.query:",req.query)
    console.log("req.body:",req.body)
    res.write("hellooooo");
});

app.listen(4040,()=>{
    console.log("listing port 4040");
});