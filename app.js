//requires
const express = require("express");
const https = require("https");
const { rootCertificates } = require("tls");

const app = express();

//root get request and response
app.get("/", function(req, res) {
    let currentDir = __dirname;
    res.sendFile(currentDir, "/index.html");
    

})

// const url = "https://api.openweathermap.org/data/2.5/weather?lat=33.9609&lon=-83.3779&appid=a864a6a6d43f2a578ccfe4af21cab8af";
// let userQuery = "Athens";
// const url = "https://api.openweathermap.org/data/2.5/weather?q="+userQuery+"&appid=a864a6a6d43f2a578ccfe4af21cab8af";

// https.get(url, function(response) {
//     console.log(response.statusCode);

//     response.on("data", function(data) {
//         const weatherData = JSON.parse(data);
//         const temp = Math.floor(weatherData.main.temp)-273;
//         const desc = weatherData.weather[0].description.toUpperCase();
//         const icon = weatherData.weather[0].icon;
//         let iconURL = 'http://openweathermap.org/img/wn/'+icon+'@2x.png';
//         res.write("<h1>The temperature in "+userQuery+" is: "+temp+"C.</h1>");
//         res.write("<p>The weather conditions are currently: "+desc+".</p>");
//         res.write("<img src="+iconURL+">'");
        
//         res.send();
//     })


// })



//listen for port 3000, server log
app.listen(3000, function() {
    console.log("Server is now running on port 3000.");
})



