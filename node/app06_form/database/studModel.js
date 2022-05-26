const mongoose = require("mongoose");
const validator = require("validator");

const studSchama = new mongoose.Schema({
    _id: { type: Number, required: true },
    fname: { type: String, required: true },
    lname: { type: String, required: false },
    date: { type: Date, default: Date.now },
    phonee: {
        type: Number,
        required: true,
        // min: 10,
        unique: [true,"phone is already"]
    },
    dob: { type: Date, required: false },
    qualification: { type: String, required: false },
    email: {
        type: String,
        required: false,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    address: { type: String, required: false },
    courses: { type: String, required: true },
    reference: { type: String, required: false },
    inquiry_for: { type: String, required: false },
    notes: { type: String, required: false },
}, { timestamps: true })

var studModel = mongoose.model("studDetail", studSchama)

module.exports = studModel