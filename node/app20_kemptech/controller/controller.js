const userModel = require("../model/model")
const express = require("express");
const app = express();
const Session = require("../session");

const session = require("express-session");
app.use(session({ secret: "skillqode@123", resave: true, saveUninitialized: true, cookie: { maxAge: 20 * 1000 } }));

exports.signup = (async (req, res) => {
    if (req.body.ref == undefined) {
        console.log("hii")
        await userModel.create(req.body).then(data => res.send(data)).catch(e => res.send(e))
    } else {
        await userModel.find({ email: req.body.ref }, {}).then(async ref_data => {
            // console.log(ref_data[0].email)
            if (ref_data == "") {
                res.json({ "msg": "please enter a vaild reference" })
            } else {
                console.log(ref_data);
                const my_salary = ref_data[0].salary.total_salary
                const my_bonus = Math.round(ref_data[0].salary.total_salary * 0.07)

                const byEmail_arr = ref_data[0].salary.bonus.byEmail
                const getBonus_arr = ref_data[0].salary.bonus.getBonus

                byEmail_arr.push(req.body.email)
                getBonus_arr.push(my_bonus)

                console.log(byEmail_arr)
                console.log(getBonus_arr)
                await userModel.create(req.body).then(data => res.send(data)).catch(e => res.send(e))
                // await userModel.insertOne(req.body).then(data => res.send(data)).catch(e => res.send(e))
                await userModel.updateOne({ email: ref_data[0].email }, {
                    $set: {
                        salary: { bonus: { byEmail: byEmail_arr, getBonus: getBonus_arr }, total_salary: my_salary + my_bonus }
                    }
                }).then(data => res.send(data)).catch(e => console.log(e));
            }
        }).catch(e => console.log(e));
    }
})

exports.login = (async (req, res) => {

    req.session = {s_email:req.body.email,s_password:req.body.password}
    console.log("session created...");

    await userModel.find({ email: req.session.s_email }, {}).then(async data => {
        console.log(data);
        if (data == "") {
            res.json({ "msg": "do sign-up" })
        } else {
            // console.log(data)
            const signup_pass = data[0].password;
            const login_pass = req.body.password;

            if (signup_pass == login_pass) {
                const all_data = await userModel.find();
                const new_data = [];
                all_data.forEach(element => (element.email != data[0].email) ? new_data.push(element) : 0);

                // console.log(new_data)
                res.send(new_data);
            } else {
                res.json({ "msg": "login fail" });
            }
        }
    }).catch(e => console.log(e));
})

exports.update = ((req, res) => userModel.updateOne({ email: req.body.email }, {$set: {total_salary: req.body.total_salary}}).then(data => (data.modifiedCount == 0) ? res.json({ "msg": "not modified" }) : res.json({ "msg": "updated..." })).catch(e => console.log(e)))

exports.delete = ((req, res) => userModel.deleteOne(req.body).then(data => (data.deletedCount == 0) ? res.json({ "msg": "not deleted" }) : res.json({ "msg": "deleted..." })).catch(e => console.log(e)))