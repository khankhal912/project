const mysql = require('mysql');
const express = require('express');
const app = express();
const router = express.Router();
const jwt = require('jsonwebtoken');
const tokenObj = require('../Token/session');


const session = require("express-session");
app.use(session({ secret: "skillqode@123", resave: true, saveUninitialized: true, cookie: { maxAge: 20 * 1000 } }));

const multer = require("multer"); // this packege for image upload
// code for image upload start
const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg"
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "./images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  }
});
// end code for image upload 

// secret 
const jwtPrivateSecret = 'newprivatesecret';

// connect  
const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  // password: "5747723", 
  database: "app_react_node"
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
// end
// select or Create the table   
function SelectOrCreateTable() {
  con.query("SELECT * FROM users", function (err, result, fields) {
    if (err) {
      const sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), password VARCHAR(255), pic VARCHAR(255), address VARCHAR(255) ,  email varchar(255)  NOT NULL UNIQUE ) ";
      con.query(sql, function (err, result) {
        if (err) throw err;
      });
    }
  })
}
SelectOrCreateTable();
// end
// sigin in


router.post('/Login', async (req, res) => {
  // console.log(req.body)
  const email = req.body.Data.email;
  const pass = req.body.Data.password;
  // console.log(email, pass)
  con.query(`SELECT * FROM users WHERE email = '${email}' AND  password = '${pass}' `,
    async function (err, result) {
      if (result.length !== 0) {
        // console.log(result)
        const my_token = jwt.sign({ UserEmail: email }, jwtPrivateSecret)
        res.json({Token:my_token})
        req.session = my_token
        tokenObj.my_session = req.session

        console.log("tokenObj",tokenObj)
        console.log("session created...");
          
      }
      if (result.length === 0) {
          res.send({ message: 'error not found' });
        console.log('err', err)
      }
    });
});

// create new user
router.post('/Register', async (req, res) => {
  const email = req.body.Data.email;
  const pass = req.body.Data.password;
  const name = req.body.Data.name;
  con.query(`SELECT * FROM users WHERE email = '${email}' `, function (err, result) {
    if (err) {
      res.send({ err: 'err' })
    }
    if (result.length === 0) {
      var sql = `INSERT INTO users (name,email, password) VALUES ('${name}','${email}', '${pass}')`;
      con.query(sql, function (err, result) {
        if (err) {
          throw err;
        }
        res.status(200).send({ result })
        console.log(result);
      });
    }
    else {
      return res.status(201).send({ message: 'this email aleady taken befoer' })
    }
  });
});
// get user data 
router.get('/GetUserData', async (req, res) => {
  // const Token = req.headers['authorization'];
  const Token = req.headers;
  console.log("Token :",Token.token)
  var verify = await jwt.verify(Token.token, jwtPrivateSecret);
  console.log("verify : ",verify)
  const thesql = `Select * FROM users  WHERE email = '${verify.UserEmail}'`;
  con.query(thesql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.send({ result })
  });  //  res.send({ mes: req.headers['authorization']} )
});

//UPDATA USER DATA ( name pic address )  
const upload = multer({
  storage: storage,
  limits: { fieldSize: 12 * 1024 * 1024 }
}).single("image");

router.put('/edit/:email',upload, (req, res, next) => {

  console.log("req.file",req.file)
  if (req.file && req.file !== '') {
    console.log("req.body",req.body)
    console.log("if :",req.params)
    const Email = req.params.email;
    // console.log(Email)
    const url = req.protocol + "://" + req.get("host");
    // console.log("req.protocol",req.protocol)
    // console.log("req.get('host')",req.get("host"))
    // console.log("url",url)
    const pic = url + "/images/" + req.file.filename;
    // console.log("pic",pic)
    
    const name = req.body.name;
    // updata with mysql
    const Sqql = `UPDATE users SET name = '${name}', pic = '${pic}' WHERE email = '${Email}'`;
    con.query(Sqql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
      res.status(200).send({ message: 'succsful updata' })
    });
  }
  else {
    console.log("else :","elseee")
    const Email = req.params.email;
    const name = req.body.name;
    // updata with mysql
    console.log("email",Email)
    console.log("name",name)
    const Sqql = `UPDATE users SET name = '${name}' WHERE email = '${Email}'`;
    con.query(Sqql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
      res.status(200).send({ message: 'succsful updata' })
    });
  }
}
);
// delete one User 
router.delete('/delete/:id/:password', (req, res, next) => {
  const Id = req.params.id;
  const pass = req.params.password;
  con.query(`SELECT * FROM users WHERE id = '${Id}' AND  password = '${pass}' `,
    async function (err, result) {
      if (result.length !== 0) {
        // the password is correct
        con.query(`UPDATE users SET status = false users WHERE id = '${Id}'`,
          async function (err, result) {
            if (err) throw (err);
            res.status(200).send({ message: result })
          })
      }
      if (result.length === 0) {
        res.status(400).send({ message: 'error the password is not correct' });
        console.log('err', err)
      }
    });
}
);
module.exports = router;
