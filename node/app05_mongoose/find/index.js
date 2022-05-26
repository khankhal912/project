//localhost:5151/insert?name=jaldip
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
    // User.find().then(data => res.json(data))
    User.find().select("name").then(data => res.json(data))
    User.find(req.query).then(data => res.json(data))

})

//assign the port number
app.listen(5151, () => {
    console.log("listing port is 5151");
});
