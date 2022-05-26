const express =require("express");
const Module1=require("./Module1");
const module3=require("./module3");

const app = express();

app.use("/m1",Module1)
app.use("/m3",module3);

let port=process.env.port || 5151
app.listen(port,()=>{
    console.log(`server listen port ${port}`);
});