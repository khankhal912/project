const axios = require("axios");
exports.index = ((req, res) => {
    // res.sendFile(__dirname+"/index.html")
    res.render("index");
})

exports.register = ((req, res) => {
    res.render("register");
})

exports.login = ((req, res) => {
    res.render("login");
})

exports.secret = ((req, res) => {
    res.render("secret");
})

exports.logout = ((req, res) => {
    res.render("login");
})
exports.addCourse = ((req, res) => {
    res.render("addCourse");
})

exports.allCourse = ((req, res) => {

    axios.get("http://localhost:5555/cou/getCourse").then(function (resss) {
        // console.log("ressssss.data", resss.data)
        // //     res.render("alluser", { producte: getdataa.data })
        res.render("allCourse", { courseArr: resss.data })

    }).catch(err => {
        res.send(err);
    })

})

exports.updateCourse = ((req, res) => {


    // console.log("params", req.query.cid)
    // axios.get("http://localhost:5555/cou/UPDATE_COURSE")
    axios.get("http://localhost:5555/cou/update_Course", { parmas: { cid: req.query.cid } })
        .then(function (reee) {
            res.render("updateCourse")
            // res.render("updateCourse", { courseData: reee.data })
        }).catch(err => {
            res.send(err);
        })



})

