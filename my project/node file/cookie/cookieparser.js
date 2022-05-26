const express =require("express");
const cookieparser=require("cookie-parser");
const app=express();
app.use(cookieparser());

app.get ("/setthecookies",(req,res)=>{
    res.cookie("sub_one","reactjs");
    res.cookie("sub_two","nodejs");
    res.cookie("sub_three","mongodb");
});

app.get ("/getthecookies",(req,res)=>{
    console.log("req.cookies");
    res.send(req.cookies);
});

app.get ("/deletethecookies",(req,res)=>{
    res.clearCookie("sub_one");
    res.send("cookies delete...");
});

app.listen(0912,()=>{
    console.log("listen run the port...")
})