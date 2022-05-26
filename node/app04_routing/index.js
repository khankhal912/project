const express = require("express");
const Mod1 = require("./module1");
const Mod2 = require("./module2");
const Mod3 = require("./module3");
const app = express();


app.use("/m1", Mod1);
app.use("/m2", Mod2);
app.use("/m3", Mod3);

let port = process.env.PORT || 5055;
app.listen(port, () => {
    console.log(`listing ${port}`);
});
