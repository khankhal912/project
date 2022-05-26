const express = require("express");
const app = express();
app.use(express.json());                   // MIME type

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

const module1 = require("./get_product");
app.use("/get_product", module1);

const module2 = require("./post_product");
app.use("/post_product", module2);

const module3 = require("./put_product");
app.use("/put_product", module3);

const module4 = require("./delete_product");
app.use("/delete_product", module4);





const port = process.env.PORT || 6666
app.listen(port, () => console.log(`server listing ${port}`))

app.use("/", (req, res) => res.send("NO PAGE"))