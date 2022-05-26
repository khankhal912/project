var express = require("express");
var app = express();

app.listen(5000)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

// app.get("/admin/home",(req,res)=>{
//     res.sendFile(__dirname+"/admin/home.html")
// })
// app.get("/admin/about",(req,res)=>{
//     res.sendFile(__dirname+"/admin/about.html")
// })

var adminRouter = express.Router();
app.use("/admin", adminRouter);
adminRouter.get("/", (req, res) => {
    res.sendFile(__dirname + "/admin/home.html");
})
adminRouter.get("/home", (req, res) => {
    res.sendFile(__dirname + "/admin/home.html");
})
adminRouter.get("/about", (req, res) => {
    res.sendFile(__dirname + "/admin/about.html");
})
adminRouter.get("/getinfo", (req, res) => {
    res.sendFile(__dirname + "/admin/getInfo.html");
})
adminRouter.get("/insert", (req, res) => {
    res.sendFile(__dirname + "/admin/insert.html");
})

var userRouter = express.Router();
app.use("/user", userRouter);
userRouter.get("/", (req, res) => {
    res.sendFile(__dirname + "/user/home.html");
})
userRouter.get("/home", (req, res) => {
    res.sendFile(__dirname + "/user/home.html");
})
userRouter.get("/about", (req, res) => {
    res.sendFile(__dirname + "/user/about.html");
})
userRouter.get("/getinfo", (req, res) => {
    res.sendFile(__dirname + "/user/getInfo.html");
})
userRouter.get("/insert", (req, res) => {
    res.sendFile(__dirname + "/user/insert.html");
})

var managerRouter = express.Router();
app.use("/manager", managerRouter);
managerRouter.get("/", (req, res) => {
    res.sendFile(__dirname + "/manager/home.html");
})
managerRouter.get("/home", (req, res) => {
    res.sendFile(__dirname + "/manager/home.html");
})
managerRouter.get("/about", (req, res) => {
    res.sendFile(__dirname + "/manager/about.html");
})
managerRouter.get("/getinfo", (req, res) => {
    res.sendFile(__dirname + "/manager/getInfo.html");
})
managerRouter.get("/insert", (req, res) => {
    res.sendFile(__dirname + "/manager/insert.html");
})

app.use("/",(req,res)=>{
    res.send("...NO PAGE...");
})