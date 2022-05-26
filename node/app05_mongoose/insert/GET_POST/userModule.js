const mongoose = require("mongoose");
const userSchama = new mongoose.Schema({
    "name": { type: String, required: true },
    "password": { type: Number, required: true },
    "isAdmin": { type: Boolean, required: true },
    "email": { type: String, required: true }
}, { timestamps: true });

const userModel = mongoose.model("userCollection", userSchama);
module.exports = userModel;