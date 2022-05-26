const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const con = await mongoose.connect("mongodb://localhost:27017/users", {
            useNewUrlparser: true,
            useUnifiedTopology: true
        }).then(console.log("connect...")).catch(e => console.log(e))
    } catch (err) {
        console.log(err)
    }
}
module.exports = connectDB;