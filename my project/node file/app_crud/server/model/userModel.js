const mongoose=require("mongoose");
const bcrypt =require("bcryptjs");
const jwt =require ("jsonwebtoken");

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
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

// userSchema.methods.generateAuthToken = async function (){
//     try {
//         console.log(this._id);
//         const token = await jwt.sign({ _id:this._id },"mySecretKey")
//         this.tokens = this.tokens.concat({token:token})
//         await this.save();
//         console.log(this.tokens)
//         return token; 
//     } catch (error) {
//         res.send("the error part ",error);
//         console.log("error part",error)
//     }
// }

userSchema.methods.generateAuthToken = async function () {
    try {
        const token = await jwt.sign({ _id: this.id.toString() }, "mySecretKey")
        this.tokens = this.tokens.concat({ token: token })
        await this.save().then(console.log("insert token..."));
        return token;
    }
    catch (error) {
        res.send("THE ERROR", error);
        console.log("the Error", error);
    }
}

userSchema.pre("save",async function(next){

    if(this.isModified("password")){
        // console.log(`this ${this.password}`)
        this.password = await bcrypt.hash(this.password,10);
        // console.log(this.password);

        this.Cpassword = await bcrypt.hash(this.Cpassword,10);;
    }

    next();
})

var userModel = mongoose.model("userData",userSchema);

module.exports=userModel;