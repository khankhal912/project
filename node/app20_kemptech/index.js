const express = require("express");
const app = express();
app.use(express.json())

const register = require("./router/router");
app.use("/register",register);

const port = 5151;
app.listen(port,()=>{
    console.log(`listing port : ${port}`)
    
});

//fallback function
app.use("/",(req,res)=>res.send("404 NO PAGE"));



// --> task :
// 1 : sign-up and login
// 2 : if login success, show dashboard in all use data without it
// 3 : update 
// 4 : delete
// 5 : ref email increment salary * 0.07

// --> model :
// email:
// password:
// ref:
// salary: