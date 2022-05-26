const couresModel = require("../model/model")

exports.create=((req,res)=>{
    console.log(req.body)
    const queryObject = req.body;
    var newUser = new couresModel(queryObject);
    newUser.save().then(() => console.log("Document Inserted...")).catch(error => console.log(error))

})

exports.find=((req,res)=>couresModel.find().then(data=>res.send(data)))

exports.update=((req,res)=>{
    couresModel.findByIdAndUpdate(id,req.body,{useFindAndModify:false}).then(data=>res.send(data)).catch(e=>res.send(e));
})

exports.delete=((req,res)=>{
    
})