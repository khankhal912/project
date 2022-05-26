const http = require("http");
const { writer } = require("repl");
const server = http.createServer((req,res)=>{
    // console.log(req.url);               // /about/contect
    if(req.url=="/"){
        res.end("Hello from the home page side.");
    }
    else if(req.url=="/about"){
        res.end("Hello from the about page side.");
    }
    else if(req.url=="/contact"){
        res.end("Hello from the contact page side.");
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end("<h1>not found</h1>");
    }
}) 

server.listen(5000,()=>{
    console.log("listing port 5000");
})