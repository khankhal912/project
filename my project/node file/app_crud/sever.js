const express=require("express");
const app=express();

//bodyparser
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

//router
const rout=require("./server/routes/routes")
app.use("/",rout);

const port=process.env.PORT || 9090
app.listen(port,()=>{
    console.log(`listening port ${port}`)
})

app.use("/",(req,res)=>{
    res.send("NO PAGE...");
})