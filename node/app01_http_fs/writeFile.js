var fs = require("fs");
var content = "we are fine..... ";

// fs.mkdirSync("node/app1(http_fs)/files");                                   //create folder
fs.writeFile("files/WriteFile.txt", content, "utf-8", function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("writing file completed");
    }
})
console.log("Finish File");                                     //Finish File

// output :
// Finish File
// writing file completed


