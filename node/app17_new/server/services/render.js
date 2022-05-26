const axios = require("axios");

exports.homeRoutes = ((req, res) => {
    axios.get("http://localhost:5151/api/product").then(function (response) {
        res.render("index", { producte: response.data })
    }).catch(err => {
        res.send(err);
    })
})

exports.add_product = ((req, res) => {
    res.render("add_product");
})

exports.update_product = ((req, res) => {
    // res.render("update_product");
    axios.get("http://localhost:5151/api/product", { parmas: { id: req.query.id } })
        .then(function (productdata) {
            res.render("update_product", { cours: productdata.data })
            console.log("kasjlak")
        }).catch(err => {
            res.send(err);
        })
})
