const { listen } = require("express/lib/application");
var http=require("http");
var server=http.createserver((request,response)=>{
    console.log("request recieved...");
    response.setheader("content-type","text/html");
    
    response.write("hello");
    response.write("<h1>hello, i am skillqode<h1>");
    response.write("<h1>course</h1>");
    response.write("<h1>Node.js</h1>");
    response.write("<h1>Hello</h1>");
    response.write("request + url"+request.url);
    response.write("request + method"+request.method);
    response.end();
});
server.listen(5050,()=>{
    console.log("listening 5050  run");
});