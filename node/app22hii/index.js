const express = require('express');
const app = express();

const path = require("path");

//body-parser
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//view engine
const hbs = require("ejs");
app.set('view engine', 'ejs');



const cookieParser = require("cookie-Parser");
app.use(cookieParser());

//router
const { userRout, courseRout } = require("./server/routes/router")
app.use("/", userRout);
app.use("/cou", courseRout);


// listing port 
port = process.env.PORT || 5555
app.listen(port, () => console.log(`listing port ${port}`))

//fallback function
app.use("/", (req, res) => res.send("NO PAGE"))






