/* Bringing in the express package */
const express = require('express');
const parser = require('body-parser');
const app = express();
app.use(parser.urlencoded({extended: true})); // we use the encoded version to protect form data 


/* This is how our server responds when someone comes to this path */
app.get('/', (req, res) => {

    /* We send the location of the html file we want */
    // __dirname gives the file path of the current file. 

    var path = __dirname + "/index.html";
    res.sendFile(path);
});


/* When we get data posted to this path, then this is how we respond */
app.post('/', (req, res) => {
    console.log("The post request got into this function");
    var num1, num2, ans; 
    num1 = req.body.num1; 
    num2 = req.body.num2;
    ans = num1 + num2
    res.send(`Answer = ${num1 + num2}`);
});



/* This makes our application listen to any https notifcations, essentially creating our live server */
/* This port is a channel that our server will listen too, when we want to interact with this we would need to */
app.listen(3000, function() {
    console.log("Listening on port: 3000");
});



















/* This makes a get requests. 
 The first parameter is the location that is requested by a web browser. So you'll set up different functionality for each page
    \, this is the home root
The second parameter is callback function that is using the arrow function notation. It functions just like a normal function, its just
shorter syntax. Key difference is that you are not able to tap in 'this' like normal. So if thats what you are looking for then stick 
with the normal function declaration syntax

    req: This is the request obcject, when the call back gets triggered
    res: This is the response that the server can make back to the client 
*/
// app.get("/", (req, res) => {
//     console.log(req)        // printing out the information about the requestors browser 
//     res.send("<h1> Hello World </h1>")  // returning a header back to the client 
// });


// /* If a client goes to this path then we execute this code */
// app.get('/contact', (req, res) => {
//     res.send("jphouminh71@yahoo.com");
// });


// app.get('/about', (req, res) => {
    //     res.send("my name is jonathan phouminh");
    // });
    

