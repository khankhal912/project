const express = require("express");
const hbs = require("hbs");

const app = express();
app.set("view engine", "hbs")

app.get("/hi", (req, res) => {
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