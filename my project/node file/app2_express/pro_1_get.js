const express = require("express");
const app = express();


app.get("/login",(req, res) => {
    // var uname = req.query.uname
    const uname = queryObject.uname;
    const upwd = queryObject.upwd;
    console.log(queryObject);
    uname === "skill" && upwd === "qode" ? res.write("<h1>Login Success</h1>") : res.write("<h1>Login Fail</h1>");
    res.end();
});
app.get("/",(req, res) => {
    res.sendFile(__dirname+"/form.html");
});
app.listen(5000, () => {
    console.log("server listening the port no. 5454");
});