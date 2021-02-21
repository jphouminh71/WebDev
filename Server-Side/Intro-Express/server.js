/* Bringing in the express package */
const express = require('express');
const app = express();


/* This makes a get requests. 
 The first parameter is the location that is requested by a web browser. So you'll set up different functionality for each page
    \, this is the home root
The second parameter is callback function that is using the arrow function notation. It functions just like a normal function, its just
shorter syntax. Key difference is that you are not able to tap in 'this' like normal. So if thats what you are looking for then stick 
with the normal function declaration syntax

    req: This is the request obcject, when the call back gets triggered
    res: 
*/
app.get("/", (req, res) => {
    console.log(req)
});



/* This makes our application listen to any https notifcations, essentially creating our live server */
/* This port is a channel that our server will listen too, when we want to interact with this we would need to */
app.listen(3000, function() {
    console.log("Listening on port: 3000");
});