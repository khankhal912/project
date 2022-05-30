const userModel = require("../model/userModel");

exports.signup = (async (req, res) => {
    // console.log("hello..");
    try {

        const password = req.body.password
        const Cpassword = req.body.Cpassword
        console.log("helloooo")

        if (password === Cpassword) {
            const registerUser = new userModel({
                name: req.body.name,
                email: req.body.email,
                mobailNo: req.body.mobailNo,
                password: password,
                Cpassword: Cpassword
            })
            const db = await registerUser.save(req.body).then(res.json({ "msg": "insert Data.." })).catch(e => console.log(e));
            console.log(db);
        } else {
            res.send("password not sema");
        }
    } catch (error) {
        res.send("ERROR..");
    }
});
exports.Alldatafind = (async (req, res) => {
    try {
        const data = await userModel.find(req.body).then(res.json({ "msg": req.body })).catch(e => console.log(e));
        console.log(data)
    } catch {
        res.json({ "msg": "no data.." })
    }
})
exports.login = (async (req, res) => {
    // console.log("hello login..");
    try {
        const { email, password } = req.body
        if (!email || !password) {
            res.json({ "msg": "plz sigup.." });
            // console.log("jhjkkjk")
        } else {
            const data = await userModel.findOne({ email })
            console.log(data)

            // const signup_password = data[0].password;
            // const login_password = req.body.password;
            // console.log(signup_email);


            if (password === data.password) {

                console.log(data.password)
                await userModel.find().then(res.send("login successfull")).catch(e => console.log(e));
                // console.log(db);
            } else {
                res.json({ "msg": "login fail...." })
            }
        }
    }
    catch (error) {
        res.send("ERROR..")
    }
})