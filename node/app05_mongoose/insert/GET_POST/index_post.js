// 1 : Using body-parser
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:true}));
// app.use(bodyparser.json());

// const data = require("./data");
const User = require("./userModule");

// connect to mongodb database
mongoose.connect("mongodb://localhost:27017/myDataBasePost", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post("/insert", (req, res) => {
    queryObject = req.body;
    console.log(queryObject);
    var newUser = new User(queryObject);
    // newUser.save().then(() => console.log("Document Inserted...")).catch(error => console.log(error))
    newUser.save(function(error){
        if(error){
            console.log(error);
        }
        else{
            console.log("Document Inserted...");
        }
        mongoose.disconnect()
    })
})

//assign the port number
app.listen(5151, () => {
    console.log("listing port is 5151");
});


// 2 : using querystring
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");

// const querystring = require("querystring")

// // const data = require("./data");
// const User = require("./userModule");

// // connect to mongodb database
// mongoose.connect("mongodb://localhost:27017/myDataBasePost", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// app.post("/insert", (req, res) => {
//     var postparameters = ""
//     req.on('data', function (data) {
//         postparameters += data;
//     });
    
//     req.on("end", function () {
//         var queryObject = querystring.parse(postparameters);
//         console.log(queryObject);
//         var newUser = new User(queryObject);
//         newUser.save(function(error){
//             if(error){
//                 console.log(error);
//             }
//             else{
//                 console.log("Document Inserted...");
//             }
//             mongoose.disconnect()
//         })
//     })
// })

// //assign the port number
// app.listen(5151, () => {
//     console.log("listing port is 5151");
// });
