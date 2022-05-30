const userModel = require("../model/userModel");

exports.signup = (async (req, res) => {
    console.log("hello..");
    try {

        const password = req.body.password
        const Cpassword = req.body.Cpassword

        if (password === Cpassword) {
            const registerUser= new userModel({
                name:req.body.name,
                email:req.body.email,
                mobailNo:req.body.mobailNo,
                password:password,
                Cpassword:Cpassword
            })
            const db = await registerUser.seva().then(data=>console.log("insert Data..",data));
            console.log(db);
        } else {
           res.send({"msg":"password not sema"});
        }
    } catch(error) {
        res.status(400).send( "ERROR.." );
    }
});
exports.Alldatafind = (async(req,res)=>{
    try{
        const data = await userModel.find(req.body).then(res.json({"msg":req.body})).catch(e=>console.log(e));
        console.log(data)
    }catch{
        res.json({"msg":"no data.."})
    }
})
exports.login = (async(req,res)=>{
    // console.log("hello login..");
    try{
        const data = await userModel.find(req.body).then(console.log("find data")).catch(e=>console.log(e));
        console.log(data)
        if(data == ""){
            res.json({"msg":"plz sigup.."});
            console.log("jhjkkjk")
        }else{
            const signup_email=data[0].email;
            const login_email = req.body.email;
            // console.log(signup_email);
            
            
            if(login_email === signup_email){
                await userModel.create(req.body).then(res.send("login successfull")).catch(e=>console.log(e));
            }else{
                res.json({"msg":"login fail...."})
            }
        }
    }
    catch(error){
        res.send("ERROR..")
    }
})