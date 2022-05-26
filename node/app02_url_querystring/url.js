const url = require("url");
const myUrl = new URL('http://mywebsite.com/hello.html?id=1005&status=active')

// Serialized URL
console.log(myUrl.href)                                     // http://mywebsite.com/hello.html?id=1005&status=active
console.log(myUrl.toString())                               // http://mywebsite.com/hello.html?id=1005&status=active

//Host (root domain)
console.log(myUrl.host)                                     // mywebsite.com

//Hostname
console.log(myUrl.hostname)                                 // mywebsite.com

//Pathname
console.log(myUrl.pathname)                                 // /hello.html

//Serialized query
console.log(myUrl.search)                                   // ?id=1005&status=active

//Params object
console.log(myUrl.searchParams)                             // URLSearchParams { 'id' => '1005', 'status' => 'active' }

//Add params
myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams)                             // URLSearchParams { 'id' => '1005', 'status' => 'active', 'abc' => '123' }

//Loop through params
myUrl.searchParams.forEach((value,key)=>console.log(`${value}: ${key}`))        // 1005: id
                                                                                // active: status
                                                                                // 123: abc
