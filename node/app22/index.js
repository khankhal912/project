const express = require('express');
const app = express();

const path = require("path");

//body-parser
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//view engine
const hbs = require("hbs");
// var hbs = require('express-handlebars')
// app.engine('hbs', hbs({ layoutDir: __dirname + '/views/partials' }));
// app.set("view engine", "hbs")
// app.set('views', __dirname + '/views/partials');
// app.set("views", path.join(__dirname, "/views"))
app.set('view engine', 'hbs');

// app.configure(function () {

// });
// hbs.registerPartial(path.join(__dirname, "/partials"))

// console.log(path.join(__dirname + "/templates/views"))

const cookieParser = require("cookie-Parser");
app.use(cookieParser());

//router
const rout = require("./server/routes/router")
app.use("/", rout);

// listing port 
port = process.env.PORT || 5555
app.listen(port, () => console.log(`listing port ${port}`))

//fallback function
app.use("/", (req, res) => res.send("NO PAGE"))






