const express=require("express");
const rout=express.Router();
const connectDB=require("../database/connection")
const controller=require("../controller/controller");

// //mongodb connect
connectDB();

//API

rout.post("/signup",controller.signup);
rout.get("/",controller.Alldatafind);
rout.post("/login",controller.login);

module.exports=rout;