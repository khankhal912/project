const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/pro_2_form.html");
})
app.post("/log",(req,res)=>{
    postdata = req.body
    console.log(postdata);
    const uname = postdata.uname;
    const upwd = postdata.upwd;
    uname === "skill" && upwd === "qode" ? res.write("<h1>Login Success</h1>") : res.write("<h1>Login Fail</h1>");
    res.end();
})

app.listen(5000,()=>{
    console.log("listing port 5000");
})

//fallback function
app.use("/",(req,res)=>{
    res.send("NO PAGE");
})

