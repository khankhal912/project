const express = require("express");
const cookieParser = require("cookie-Parser");
const app = express();
app.use(cookieParser());
app.get("/setthecookise", (req, res) => {
    res.cookie("sub-one", "reactjs");
    res.cookie("sub-two", "NodeJS");
    res.cookie("sub-three", "MongoDB");
    res.send({ "MSG": "cookies aer set" });
})
app.get("/getthecookise", (req, res) => {
    console.log(req.cookies);
    res.send(req.cookies)
})

app.get("/deletecookise", (req, res) => {
    res.clearCookie("sub-one");
    res.send("cookie delete");
})

app.listen(5151, () => {
    console.log("port listen 5151");
})