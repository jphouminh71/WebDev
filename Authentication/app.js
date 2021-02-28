//jshint esversion:6
require('dotenv').config();   // needs to be here so we can use it anywhere in the remaining files.
const url = `mongodb+srv://jonathan:phouminh@members.gkemk.mongodb.net/Members?retryWrites=true&w=majority`;

const express = require('express');
const session = require('express-session');
const parser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
//const encrypt = require('mongoose-encryption')

const app = express(); 
app.use(express.static('public'));
app.use(parser.urlencoded({extended: true})); // we use the encoded version to protect form data 
app.set('view engine', 'ejs');


/* Setting up the session configuration */
app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false, 
}));

/* Using passport to deal with the session, look at the passport documentation under configuration*/
app.use(passport.initialize());
app.use(passport.session());

/* Establish connection to the db */
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 

}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log(`connection successful!`);
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
});

/* Create Schema with Encryption */
const userSchema = new mongoose.Schema({
    email: String, 
    password: String
});

//userSchema.plugin(encrypt, {secret: process.env.SECRET_KEY, encryptedFields: ['password']}); // encrypting our password field
userSchema.plugin(passportLocalMongoose);
/* Mongodbs encrpyiton will happen on all .save() methods and .find() fields */

const User = new mongoose.model('User', userSchema);




/* Setup Routes */
app.get('/', (req, res) => {
    res.render('home');
});


app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register')
});


app.post('/register', (req, res) => {
    
});


app.post('/login', (req, res) => {
    
});


/* COMMENETING OUT TO REWRITE FOR COOKIES AND SESSIONS APPROACH */
// app.post('/register', (req, res) => {
//     /* Grab the pass/email they passed in form  */
//     const newUser = User({
//         email: req.body.username,
//         password: req.body.password
//     });

//     newUser.save(function(err){
//         if (err){
//             console.log(err);
//         }
//         else {
//             res.render('secrets')
//         }
//     })
// });


// app.post('/login', (req, res) => {
//     /* We need to check if this user belongs in our db */
//     const userName = req.body.username; 
//     const password = req.body.password; 

//     User.findOne({email:userName},function(err, foundUser){
//         if (err) {
//             console.log(err)
//         } else {
//             if (foundUser) {
//                 if (foundUser.password == password) {
//                     res.render('secrets');
//                 }
//                 else {
//                     console.log("BAD INPUT");
//                 }
//             }
//         }
//     }); 
// });

app.listen(3000, () => {
    console.log(`Server started on port: 3000`);
});