// const express = require("express");
// const jwt = require("jwt-simple");
// const LoginbModule = express.Router()

// const tokenObj = require("../Token/token")

// LoginbModule.post("/", async(req, res) => {

//     console.log(req.body)
//     const uname = req.body.uname
//     const upwd = req.body.upwd
//     if (uname == "a" && upwd == "b") {
//         const token = jwt.encode({ "uname": uname, "upwd": upwd }, "admin@123")          //token generate
//         tokenObj.token = token
//         // console.log(tokenObj.token)
//         res.json({ "message": "Login success", "token": token });
//     } else {
//         res.json({ "message": "Login file" });
//     }
// })

// module.exports = LoginbModule; 

const express = require("express");
const jwt = require("jsonwebtoken");
const LoginbModule = express.Router()

const tokenObj = require("../Token/token")

LoginbModule.post("/", async(req, res) => {
    console.log("hiii")
    console.log(req.body)
    const uname = req.body.uname
    const upwd = req.body.upwd
    if (uname == "a" && upwd == "b") {
        const token = jwt.sign({ "uname": uname, "upwd": upwd }, "admin@123",{expiresIn:"10 seconds"})           //token generate
        console.log("token",token)
    
        const verify = await jwt.verify(token,"admin@123")
        console.log("verify",verify);
        tokenObj.token = token
        // console.log(tokenObj.token)
        res.json({ "message": "Login success", "token": token });
    } else {
        res.json({ "message": "Login file" });
    }
})

module.exports = LoginbModule; 