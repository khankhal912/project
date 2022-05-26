var express=require("express");
var app=express();
app.listen(5141,()=>{
    console.log("sever listen the port no.5141");
});
var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/form.html");
})
app.post("/login",(req,res)=>{
    console.log(req.body);
    if(req.body.uname=="skill"&&req.body.upwd=="qode"){
        res.send("login success");
    }
    else{
        res.send("login failed");
    }
});
//fallback function
app.use("/",(req,res)=>{
    res.send("no page")
});