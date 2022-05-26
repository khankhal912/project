var http = require("http");
var server = http.createServer((request, response) => {
    console.log("request recieved");
    response.setHeader("content-type", "text/html");
    response.write("Hello");
    response.write("<h1>Hello i am skill qode </h1>");
    response.write("<h1>Course</h1>");
    response.write("<h1>NodeJs</h1>");
    response.write("hello");
    response.write("<br>Request url" + request.url);
    response.write("<br>Request method" + request.method);
    response.write("<br>hello");
    response.end();
});
server.listen(1024, () => {
    console.log("listing port no.1024");
});
