//mongodb+srv://jaldip31:<password>@cluster0.swwad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const mongoose = require('mongoose')

const connectDB = async () =>{
    try{
        const con = await mongoose.connect(process.env.CONNECTION_URL)
    }
    catch(e){
        console.log(e);
    }
}

module.exports = connectDB