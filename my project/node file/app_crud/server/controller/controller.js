const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");

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

            const db = await registerUser.save().then(data=>console.log("insert Data..",data));
            console.log(db);
        } else {
            res.send("password not sema");
        }
    } catch (error) {
        res.status(400).send(error);
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
    try{
        const {email,password}=req.body;
        if( !email || ! password ){
            res.json({"msg":"plz sigup.."});

        }else{
            const data = await userModel.findOne({email})
            console.log(data)   

            const isMatch = await bcrypt.compare(password,data.password);
            console.log(isMatch)
            
            if(isMatch){
                await userModel.find(req.body).then(res.send("login successfull")).catch(e=>console.log(e));
            }else{
                res.json({"msg":"login fail...."})

            }
        }
    }
    catch (error) {
        res.send("ERROR..")
    }
})
exports.update = (async (req,res)=>{
    try{

    }catch(error){
        res.status(400).send("ERROR")
    }
})