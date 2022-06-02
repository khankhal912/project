const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: false },
    dob: { type: Date, required: false },
    contact: {
        type: Number,
        required: false,
        // unique: [true, "phone is already"]
    },
    gender: { type: String, required: false },
    email: { type: String, required: false },
    password: { type: String, required: false },
    cpassword: { type: String, required: false },
    tokens: [{
        token: { type: String, required: false }
    }]
})

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

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {

        console.log(this.password)
        this.password = await bcrypt.hash(this.password, 10)
        console.log(this.password)
        this.cpassword = undefined
    }
    next()
})           
var userModel = mongoose.model("userDetail", userSchema)

module.exports = userModel