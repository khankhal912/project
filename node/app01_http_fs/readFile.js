//read data on console
var fs = require("fs");

fs.readFile("files/WriteFile.txt", "utf-8", function (error, data) {
    if (error) {
        console.log(error);                                     //null
    }
    else {
        console.log(data);                                      //we are fine.....
    }
})
console.log("Finish File");                                     //Finish File

// output :
// Finish File
// we are fine.....