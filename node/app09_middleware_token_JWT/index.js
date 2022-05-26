const express = require("express")
const loginModule = require("./Login/login")
const Module1 = require("./Module1/model1")
const Module2 = require("./Module2/model2")
const Module3 = require("./Module3/model3")

const app = express();
app.use(express.json())

app.use("/login", loginModule);
app.use("/module1", Module1);
app.use("/module2", Module2);
app.use("/module3", Module3);

app.listen(5252, () => {
    console.log("listing port 5252");
})