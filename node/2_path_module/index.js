const path = require("path");

// console.log(__filename)                                     // d:\jaldip\git\node.js\node\2_path_module\index.js
// console.log(__dirname)                                     // d:\jaldip\git\node.js\node\2_path_module

// Base file name
console.log(path.basename(__filename))                      // index.js

// Directory name
console.log(path.dirname(__filename))                      // d:\jaldip\git\node.js\node\2_path_module

// File extension
console.log(path.extname(__filename))                      // .js

// Create path module
console.log(path.parse(__filename))                         //  {
                                                            //     root: 'd:\\',
                                                            //     dir: 'd:\\jaldip\\git\\node.js\\node\\2_path_module',
                                                            //     base: 'index.js',
                                                            //     ext: '.js',
                                                            //     name: 'index'
                                                            //   }
console.log(path.parse(__filename).base)                      // index.js
console.log(path.parse(__filename).root)                      // d:\

// Concatenate paths
console.log(path.join(__dirname,'test','hello.txt'));          // d:\jaldip\git\node.js\node\2_path_module\test\hello.txt

