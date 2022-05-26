const person = require("./person");

const person1 = new person('Jaldip',20);
person1.greeting();                             // My name is Jaldip and I am 20



//Module wrapper function
(function(exports,require,module,__filename,__dirname){

})
console.log(__filename)                         // d:\jaldip\git\node.js\node\5_class\index.js
console.log(__dirname)                          // d:\jaldip\git\node.js\node\5_class