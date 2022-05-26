//1
var fs = require("fs");
var content = "we are again fine..... ";

const a = fs.writeFileSync("files/WriteFileSync.txt", content, "utf-8");
console.log(a)                                                  //undefined

console.log("Finish File");                                     //Finish File

// output :
// undefined
// Finish File


