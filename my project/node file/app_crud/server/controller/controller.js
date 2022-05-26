const userModel = require("../model/userModel");

exports.signup = (async (req, res) => {
    console.log("hello..");
    try {

        const password = req.body.password
        const Cpassword = req.body.Cpassword

        if (password == Cpassword) {
            const data = await userModel.create(req.body).then(res.json({"msg":"insert Data.."})).catch(e => console.log("Data not insert..", e));
            console.log(data);
        } else {
           res.jsob({"msg":"plz password sema"});
        }
    } catch {
        res.send({ "msg": "ERROR.." })
    }
});
exports.Alldatafind = (async(req,res)=>{
    try{
        const data = await userModel.find(req.body).then(res.json({"msg":"find data.."})).catch(e=>console.log(e));
        console.log(data)
    }catch{
        res.json({"msg":"no data.."})
    }
})
exports.login = (async(req,res)=>{
    console.log("hello login..");l
    try{
        const data = await userModel.find(req.body)
    }catch{

    }
})