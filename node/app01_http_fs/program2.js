//copy file using readFile and writeFile

var fs = require("fs");

fs.readFile("files/WriteFile.txt","utf-8",(error,data)=>{
    fs.writeFile("files/program2.txt",data,"utf-8",(error)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log("writing file completed");
        }
        
    });
});

