const express = require("express");
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    const model = {
        studentid: 201,
        studentname: "jaldip",
        studentmarks: 60,
        subject: [
            { name: "gujrati", marks: 10 },
            { name: "maths", marks: 20 },
            { name: "BA", marks: 30 }
        ]
    }
    res.render("student", model)
})


app.listen(5151, () => console.log("listing 5151"))