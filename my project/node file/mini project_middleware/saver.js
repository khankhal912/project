const express=require("express");
const loginModule =require("./Login/login");
const module1=require("./Module1/module1");
const module2=require("./Module2/module2");
const module3=require("./Module3/module3");
// const middleware=require("./middlelayer/middleware");
const app=express();
app.use(express.json());

app.use("/login",loginModule);
app.use("/module1",module1);
app.use("/module2",module2);
app.use("/module3",module3);

app.listen(0912,()=>{
    console.log("saver is run...")
})