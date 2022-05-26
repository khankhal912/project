const http=require("http");
const querustring=require("querystring");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    if(req.method=="POST"){
        var postparameters="";
        req.on("data",function(data){
            postparameters+=data;
        });
        req.on("end",function(){
            var postdata=querustring.parse(postparameters);
            console.log("postdata:",postdata);
            if(postdata["uname"]=="skill"&&postdata["upwd"]=="qode"){
                res.write("<h1>success</h1>");
            }
            else{
                res.write("<h1>fail</h1>");
            }
            res.end();
            // console.log("postparameters:",postparameters);
        });
    }
});
server.listen(5455,()=>{
    console.log("server listening 5455 run...");
});