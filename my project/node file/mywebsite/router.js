var express=require("express");
var app=express();

app.listen(3000);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

var adminRouter=express.Router();
app.use("/admin",adminRouter);
adminRouter.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/admin/home.html");
})
adminRouter.get("/aboutus",(req,res)=>{
    res.sendFile(__dirname+"/admin/aboutus.html");
})
adminRouter.get("/insert",(req,res)=>{
    res.sendFile(__dirname+"/admin/insert.html");
})
adminRouter.get("/getinfo",(req,res)=>{
    res.sendFile(__dirname+"/admin/getinfo.html");
})

var adminRouter=express.Router();
app.use("/admin",adminRouter);
adminRouter.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/admin/home.html");
})
adminRouter.get("/aboutus",(req,res)=>{
    res.sendFile(__dirname+"/admin/aboutus.html");
})
adminRouter.get("/insert",(req,res)=>{
    res.sendFile(__dirname+"/admin/insert.html");
})
adminRouter.get("/getinfo",(req,res)=>{
    res.sendFile(__dirname+"/admin/getinfo.html");
})

var adminRouter=express.Router();
app.use("/admin",adminRouter);
adminRouter.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/admin/home.html");
})
adminRouter.get("/aboutus",(req,res)=>{
    res.sendFile(__dirname+"/admin/aboutus.html");
})
adminRouter.get("/insert",(req,res)=>{
    res.sendFile(__dirname+"/admin/insert.html");
})
adminRouter.get("/getinfo",(req,res)=>{
    res.sendFile(__dirname+"/admin/getinfo.html");
})