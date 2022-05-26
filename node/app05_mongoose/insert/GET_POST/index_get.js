// localhost:5151/insert?name=jaldip&password=123456&isAdmin=false&email=jaldip@gmail.com
const express = require("express");
const app = express();
const mongoose = require("mongoose");


// const data = require("./data");
const User = require("./userModule");

// connect to mongodb database
mongoose.connect("mongodb://localhost:27017/myDataBaseGet", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get("/insert", (req, res) => {
    queryObject = req.query;
    console.log(queryObject);

    var newUser = new User(queryObject);
    // newUser.save().then(() => console.log("Document Inserted...")).catch(error => console.log(error))
    newUser.save(function(error){
        if(error){
            console.log(error);
        }
        else{
            console.log("Document Inserted...");
        }
        mongoose.disconnect()
    })
})

//assign the port number
app.listen(5151, () => {
    console.log("listing port is 5151");
});
