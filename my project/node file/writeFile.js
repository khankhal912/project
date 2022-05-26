var fs =require("fs")
var content ="we are fine"
fs.writeFile("write.txt",content,"utf8",fucn)
function fucn(error){
    if(error){
        console.log("error");
    }
    else{
        console.log("writing")
    }
}