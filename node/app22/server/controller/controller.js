const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");


exports.submitUser = (async (req, res) => {
    try {
        const password = req.body.password
        const cpassword = req.body.cpassword

        if (password === cpassword) {
            const registerUser = new userModel({
                fname: req.body.fname,
                lname: req.body.lname,
                dob: req.body.dob,
                contact: req.body.contact,
                gender: req.body.gender,
                email: req.body.email,
                password: req.body.password,
                cpassword: req.body.cpassword
            })

            // const token = await registerUser.generateAuthToken()
            // console.log("the token", token);

            // res.cookie("jwt", token, {
            //     expires: new Date(Date.now() + 60000),
            //     httpOnly: true
            // })
            // console.log(req.cookies.jwt)

            await registerUser.save().then(data => console.log("data inserted...", data));
            res.status(201).render("index");
        }
        else {
            res.json({ "msg": "password are not match" });
        }
    }

    catch (error) {
        res.status(400).send(error);
    }

})

exports.submitLogin = (async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(400).json({ error: "Plz Filled the data" })
        }
        const emailDB = await userModel.findOne({ email })
        console.log(emailDB)

        const isMatch = await bcrypt.compare(password, emailDB.password)
        console.log(isMatch)

        if (isMatch) {
            const token = await emailDB.generateAuthToken()
            console.log("generate Token :", token);

            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 300000),
                httpOnly: true
            })
            res.status(201).render("index");
        }
        // else {
        //     res.status(400).json({ error: "Envalid password Details" })
        //     console.log("HELlO")
        // }
    }
    catch (error) {
        res.status(400).send("Envalid login details");
    }

})
// exports.secret = (async (req, res) => {
//     console.log("cookie : ", req.cookies.jwt)
// })

exports.logout = (async (req, res) => {
    try {
        res.clearCookie("jwt")
        console.log("logout successfully")
        res.render("login")

    }
    catch (error) {
        res.status(500).send(error)
    }
})

