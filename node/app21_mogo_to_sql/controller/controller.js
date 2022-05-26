const con = require("../model/model");
const User = require("../model/userModule")


exports.MYSQL_to_mongoDB = ((req, res) => {
    var sql = `SELECT * FROM userdata`
    con.query(sql, async(err, result) => {
        if (err) throw err;
        console.log(result);

        await User.insertMany(result).then("inserted...").catch(e=>console.log(e));
    });
})

exports.mongoDB_to_MYSQL = (async(req, res) => {
    
    await User.find().then(data=>{
        console.log(data)
        // var sql = `INSERT INTO userdata (firstname, lastname,contact,email,password,configpass) VALUES ("${req.body.firstname}","${req.body.lastname}","${req.body.contact}","${req.body.email}","${req.body.password}","${req.body.configpass}")`;
        //     con.query(sql, function (err, result) {
        //         if (err) throw err;
        //         console.log("1 record inserted");
        //     });

    });
})

