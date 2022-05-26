var express = require("express")
const app = express()
var multer = require("multer")

var fileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + file.originalname);
    }
})

var upload = multer({ storage: fileStorage })
app.post("/profile", upload.single("image"), (req, res) => {
    console.log(req.file)
    res.json({ "msg": "file uploaded" })
});

app.listen(5151)
console.log("server listing 5151");