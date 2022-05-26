// http://localhost:5454/?uname=skill&upwd=qode
const express = require("express");
const url = require("url");
const app = express();

app.get("/",(req, res) => {
    console.log("Hello")
    res.writeHead(200, { "Content-Type": "text/html" });
    const queryObject = url.parse(req.url, true).query
    console.log(queryObject);                           //[Object: null prototype] { uname: 'skill', upwd: 'qode' }

    const uname = queryObject.uname;
    const upwd = queryObject.upwd;
    uname === "skill" && upwd === "qode" ? res.write("<h1>Login Success</h1>") : res.write("<h1>Login Fail</h1>");
    res.end();
});
app.listen(5454, () => {
    console.log("server listening the port no. 5454");
});
