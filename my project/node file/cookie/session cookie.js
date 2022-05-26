const express = require("express");

const app = express();
// cookie-parse
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const session = require("express-session");

// app.use(session({genid:(req)=>{return gennu}})
app.use(session({ secret: "skillqode@123", resave: true, saveUninitialized: true, cookie: { maxAge: 15 * 1000 } }));
app.get("/setthesession", (req, res) => {
    req.session.uname = "admin";
    req.session.upwd = "admin@123";
    res.send("session created...");
});
app.get("/getthesession", (req, res) => {
    res.send(`session uname:${req.session.uname}and upwd:${req.session.upwd}`);
});
app.get("/deletethesession", (req, res) => {
    req.session.destroy()
    res.send("session delete...");
});

port = process.env.port || 5151;
app.listen(port, () => {
    console.log(`listen ${port}...`)
})