// http://localhost:5050/?uname=skill&upwd=qode
const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
    console.log("Hello")
    res.writeHead(200, { "Content-Type": "text/html" });
    const queryObject = url.parse(req.url, true).query
    console.log(queryObject);                           //[Object: null prototype] { uname: 'skill', upwd: 'qode' }

    const uname = queryObject.uname;
    const upwd = queryObject.upwd;
    uname === "skill" && upwd === "qode" ? res.write("<h1>Login Success</h1>") : res.write("<h1>Login Fail</h1>");
    res.end();
});
server.listen(5454, () => {
    console.log("server listening the port no. 5454");
});

// //without query
// const queryObject = url.parse(req.url, true)
// console.log(queryObject);           // Url {
//                                     //     protocol: null,
//                                     //     slashes: null,
//                                     //     auth: null,
//                                     //     host: null,
//                                     //     port: null,
//                                     //     hostname: null,
//                                     //     hash: null,
//                                     //     search: null,
//                                     //     query: [Object: null prototype] {},
//                                     //     pathname: '/favicon.ico',
//                                     //     path: '/favicon.ico',
//                                     //     href: '/favicon.ico'
//                                     //   }        