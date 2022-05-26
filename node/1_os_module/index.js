const os = require("os");

// CPU arch
console.log(os.arch());                         // x64

// Platform
console.log(os.platform());                     // win32

//CPU core Info
console.log(os.cpus());

// console.log(os.hostname());
console.log(os.type());                         // Windows_NT

//Free memory
const fm = os.freemem();
console.log(`${fm / 1024/1024/1024}`);

//Total memory
const tm = os.totalmem();
console.log(`${tm / 1024/1024/1024}`);

//Home dir
console.log(os.homedir())                       // C:\Users\HP

//Uptime
console.log(os.uptime())                      
