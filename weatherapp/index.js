// https://api.openweathermap.org/data/2.5/weather?q=surat&appid=15df5e6602b630bde71586bd7985912a
const http = require("http");
const fs = require("fs");
const requests = require("requests");

const homeFile = fs.readFileSync("home.html","utf-8");

function replaceVal(tempVal,orgVal){
    var test = tempVal.replace("{%tempval%}",orgVal.main.temp)
     test = test.replace("{%tempmin%}",orgVal.main.temp_min)
     test = test.replace("{%tempmax%}",orgVal.main.temp_max)
     test = test.replace("{%country%}",orgVal.sys.country)
     test = test.replace("{%location%}",orgVal.name)
     test = test.replace("{%tempstatus%}",orgVal.weather[0].main)
    return test;
   
}

const app = http.createServer((req,res)=>{
    if(req.url="/"){
        requests('https://api.openweathermap.org/data/2.5/weather?q=surat&appid=15df5e6602b630bde71586bd7985912a')
        .on('data', function (chunk) {
            const objectdata = JSON.parse(chunk)
            const arraydata = [objectdata]
            //   console.log(arrydata)
            const realTimeData = arraydata.map(val=>replaceVal(homeFile,val)).join("")
            // console.log(realTimeData)
            res.write(realTimeData)

        })
        .on('end', function (err) {
          if (err) return console.log('connection closed due to errors', err);
        });
    }
})

app.listen(3000,()=>{
    console.log("listing 3000");
})