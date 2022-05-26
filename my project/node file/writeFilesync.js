var fs =require("fs");
var content="we`re having fun at skillqode";
fs.writeFileSync("writesync.txt",content,"utf8");