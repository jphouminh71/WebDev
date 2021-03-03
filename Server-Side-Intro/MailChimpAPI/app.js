// APIKey: 9d294f883d3931bf908cea53c1f0955f-us1
/* Express static function. This allows us to serve up static files */


const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { report } = require("process");


const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));


// route to our home page 
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});


app.post('/', (req, res) => {
        var fName, lName, email;

        // mailchimp url 
        const url = "https://us4.api.mailchimp.com/3.0/lists/4bcf3cbb34"

        /* start pulling out the data from the passed form */
        fName = req.body.fName;
        lName = req.body.lName;
        email = req.body.email;

        var data = {
            members: [
                {
                    email_address: email,
                    status: "subscribed",
                    merge_fields: {
                        FNAME: fName, 
                        LNAME: lName
                    }
                }
            ]
        }

        // this is what we send back to mail chimp
        var jsonData = JSON.stringify(data);


        // options for the api request 
        const options = {
            method: "POST",
            auth: "jon1: 9d294f883d3931bf908cea53c1f0955f-us1"
        }

        // now we will send the post request via post request , with the request module 
        const request = https.request(url, options, function(response){


            // now we determine which codes we got to determine how we route the user
            if (response.statusCode = 200) {
                res.send("sucessfully subscribed");
            } else {
                res.send("error");
            }


            // what will happen when we get incoming data
            response.on("data", function(data){
                console.log(JSON.parse(data));  // just printing it out
            });
        });

        request.write(jsonData);  // now we actually made the post request to the mailchimp servers 
        request.end(); 
});



app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});



