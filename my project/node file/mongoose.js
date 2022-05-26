// const { is } = require("express/lib/request");
var mongoose =require("mongoose");
var EmpSchema=mongoose.Schema({_id:Number,eno:Number,ename:String,esal:Number,eadder:String},{versionkey:false});

var EmpModel=mongoose.model("employees",EmpSchema);
mongoose.connect("mongodb://localhost:27017/skillqode");

var newEmp=new EmpModel({"_id":08,"eno":109,"ename":"dhaval","esal":5000,"eadder":"surat"})
newEmp.save(afterDataInserted);
function afterDataInserted(error){
    if(error)
        console.log("error");
    else
        console.log("Document Inserted...");
    mongoose.disconnect();
}