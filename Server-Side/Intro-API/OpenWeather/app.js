/* This is your OpenWeatherAPI key: adb22825770aa3d71bdd2ec483fd5408 */ 

/* nodejs external server request*/
const https = require("https");
const express = require('express');
const parser = require('body-parser');

const app = express(); 
app.use(parser.urlencoded({extended: true})); // we use the encoded version to protect form data 

app.get('/', (req, res) => {

    var path = __dirname + "/index.html";
    res.sendFile(path);
});


app.post('/', (req, res) => {

    const query = req.body.cityName;
    const apiKey = "adb22825770aa3d71bdd2ec483fd5408";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}
    &appid=${apiKey}&units=metric&state=colorado`


    /* Making the https request */
    https.get(url, (response) => {
        console.log('statusCode:', response.statusCode);
        console.log('headers:', response.headers);
        
        // essentially an event handler that will be fired based on what is returned 
        response.on('data', (d) => {

            /* This converts the hexcode to a JSON object */
            /* We can now tap into the object like any other object */
            const data = JSON.parse(d);
            const temp = data.main.temp; 
            const weatherDescription = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const imgURL = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

            /* prewriting our stuff we are sending back */ 
            var icon = `<img src="${imgURL}" alt="${iconCode}">`;
            var msg1 = `The temp in ${query} is ${temp}`; 

            /* We can write to the res object when we need to send more than one thing */
            res.write("<h1>" + msg1 + "</h1>"); 
            res.write("<p>" + weatherDescription + "<p>");
            res.write(icon); 
            res.send();
        });

        }).on('error', (e) => {
            console.error(e);
    });
});



app.listen(3000, () => {
    console.log(`Server started on port: 3000`);
});