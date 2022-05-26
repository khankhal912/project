const express = require("express");
const app = express();

// const cors = require("cors");
const mongoose = require("mongoose");
const data = require("./data");
const User = require("./userModule");

app.use(express.json());
//app.use(cors());

// connect to mongodb database
mongoose.connect("mongodb://localhost:27017/skilldata", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get("/insert", (req, res) => {
    const result = User.insertMany(data.users);
    res.send(result);
})

//assign the port number
app.listen(5151, () => {
    console.log("listing port is 5151");
});
