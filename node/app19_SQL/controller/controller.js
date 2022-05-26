const con = require("../model/model");

exports.create_table = ((req, res) => {
    var sql = "CREATE TABLE mydataaa (firstname VARCHAR(255), lastname VARCHAR(255), contact INT(255), email VARCHAR(255), password VARCHAR(255), configpass VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
})

exports.insert = ((req, res) => {
    var sql = `INSERT INTO userdata (firstname, lastname,contact,email,password,configpass) VALUES ("${req.body.firstname}","${req.body.lastname}","${req.body.contact}","${req.body.email}","${req.body.password}","${req.body.configpass}")`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    res.json(req.body);
})

exports.find = ((req, res) => {
    var sql = `SELECT * FROM userdata`
    // var sql = "SELECT firstname, configpass FROM userdata"
    // var sql = "SELECT * FROM userdata WHERE firstname != 'undefined'"
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    });
})

exports.update = ((req, res) => {
    var sql = `UPDATE userdata SET password = '${req.body.password}' WHERE firstname = '${req.body.firstname}'`
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send("updated...")
    });
})
exports.delete = ((req, res) => {
    var sql = `DELETE FROM userdata WHERE firstname = '${req.body.firstname}'`
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send("deleted...")
    });
})

exports.orderby = ((req, res) => {
    con.query("SELECT * FROM userdata ORDER BY firstname", function (err, result) {
        if (err) throw err;
        res.send(result);
      });
})