const mongoose = require("mongoose");

const productSchama = new mongoose.Schema({
    // _id: { type: Number, required: true },
    productname: { type: String, required: false },
    description: { type: String, required: false },
    price: { type: String, required: false},
}, { timestamps: true })

var productModel = mongoose.model("productt", productSchama)

module.exports = productModel