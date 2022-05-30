const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobailNo:{
        type:String,
        required:true,
        min:10
    },
    password:{
        type:String,
        required:true
    },
    Cpassword:{
        type:String,
        required:true
    }
})

var userModel = mongoose.model("userData",userSchema);

module.exports=userModel;