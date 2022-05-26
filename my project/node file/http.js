//data read on server

var http = require("http");
var fs = require("fs");
var app = http.createServer((request, response) => {
    fs.readFile("files/Write.txt", "utf-8", (error, data) => {
        if (error) {
            response.write(404);
            response.write("Unble to Read...");
            response.end();
        }
        else {
            response.write(data);
            response.end();
        }
    });
});
app.listen(3000, () => {
    console.log("listing port no 5555");
});