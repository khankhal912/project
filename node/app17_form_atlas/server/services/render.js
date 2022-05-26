const axios = require("axios");

exports.homeRoutes = ((req, res) => {
    axios.get("http://localhost:5151/api/course").then(function (response) {
        res.render("index", { coursee: response.data })
    }).catch(err => {
        res.send(err);
    })
})

exports.add_course = ((req, res) => {
    res.render("add_course");
})

exports.update_course = ((req, res) => {
    // res.render("update_course");
    axios.get("http://localhost:5151/api/course", { parmas: { id: req.query.id } })
        .then(function (coursedata) {
            res.render("update_course", { cours: coursedata.data })
            console.log("kasjlak")
        }).catch(err => {
            res.send(err);
        })
})
