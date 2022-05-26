
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

