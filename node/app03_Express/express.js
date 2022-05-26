var express = require("express");
var app =express();
app.listen(5555,()=>{
    console.log("listing port 5555");
});
app.get("/",(req,res)=>{
    res.write("hello world");
    res.end();
});
