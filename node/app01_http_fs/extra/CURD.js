const fs = require("fs");

fs.mkdirSync("thapa");                                               // Create folder

fs.writeFileSync("thapa/bio.txt","My name is Jaldip....");           // create file

fs.appendFile("thapa/bio.txt"," I am a good boy.",()=>{})            // add more data

const data = fs.readFileSync("thapa/bio.txt","utf-8")                // read file
console.log(data)

fs.renameSync("thapa/bio.txt","thapa/myBio.txt")                     // rename file

fs.unlinkSync("thapa/bio.txt");                                      // delete file

fs.rmdirSync("thapa");                                              // delete folder

