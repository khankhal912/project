// 1
// const demo = require("./test");

// // console.log(demo)
// console.log(demo.sum1(5, 6));        //11
// console.log(demo.sub1(15, 6));       //9
// console.log(demo.mult1(5, 6));       //30
// console.log(demo.name1);            //Jaldip

//2
const { sum, sub, mult, name } = require("./test")

console.log({ sum, sub, mult, name })
console.log(sum(5, 6));         //11
console.log(sub(15, 6));        //9
console.log(mult(5, 6));        //9
console.log(name);              //Jaldip

