const mongoose = require("mongoose");
const validation = require("validation");
const userSchama = new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    firstname: { type: String},
    lastname: { type: String},
    contact: { type: Number},
    email: { type: String},
    password: { type: String},
    configpass: { type: String}
}, { timestamps: true });

const user = mongoose.model("transData", userSchama);
module.exports = user;