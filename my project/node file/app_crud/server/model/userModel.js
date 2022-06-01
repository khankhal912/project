const mongoose=require("mongoose");
const bcrypt =require("bcryptjs");

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

userSchema.pre("save",async function(next){

    if(this.isModified("password")){
        console.log(`this ${this.password}`)
        this.password = await bcrypt.hash(this.password,10);
        console.log(this.password);

        this.Cpassword = undefined;
    }

    next();
})

var userModel = mongoose.model("userData",userSchema);

module.exports=userModel;