const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.end("Hello from the home page side.");
})
app.get("/about",(req,res)=>{
    res.end("Hello from the about page side.");
})
app.get("/contact",(req,res)=>{
    res.end("Hello from the contact page side.");
})

//fallback function
app.use("/",(req,res)=>{
    res.writeHead(404,{"content-type":"text/html"})
    res.end("<h1>not found</h1>");  
})
    

app.listen(5000,()=>{
    console.log("listing port 5000");
})