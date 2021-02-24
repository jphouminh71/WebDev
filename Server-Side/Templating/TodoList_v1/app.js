/* Big Notes: Use let keywords because it enforced static scoped variables
    the var keyword is a dynamic variable and creates unpredictable behavio. Use const as much as possible honestly. 
*/

const express = require("express");
const parser = require("body-parser");
const date = require(__dirname + "/date.js");  // we required a module specifically in this path 

const app = express();

// telling our app to use ejs as our view engine 
// ejs will always look for .ejs file under a 'views' directory
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(parser.urlencoded({extended: true})); // we use the encoded version to protect form data 


let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get("/", function(req, res){

  let day = date.getDate(); // using our exported module

  /* Creating object of variables */
  let values = {
    listTitle: day, 
    newListItems: items
  };
  
  /* pass the variable we want to update along with its value, we could have also built the object */ 
  res.render('list.ejs', values);
});


/* This is the action when they add a new list item */
/* what we want is to send over another li with this new item */
app.post('/', (req, res) => {

  let newItem = req.body.newItem; 
  let title = req.body.list;

  console.log(title + "!!");


  /* Check to see if post request was made for work or not */
  if (title == "Work") {
    workItems.push(newItem);
    res.redirect("/work");
  }else{
    items.push(newItem);
    res.redirect("/"); // redirect this return to this path '/'
  }
});



/* Work List Page Routes */

app.get('/work', (req, res) => {
    res.render('list.ejs', {listTitle: "Pork List", newListItems: workItems} );
});

app.post('/work', (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/")
});


/* About Page Routes */
app.get('/about', (req, res) => {

    res.render('about.ejs');
});




app.listen(3000, function(){
  console.log("Server started on port 3000.");
});






















/* This is how we could do conditional in ejs */
// <!-- Goal is to dynamically pass info from app.js -->
// <!-- we first add a marker for our app.js to to add a value -->

// <!-- We will now change our color of h1 based on day -->
// <!-- We could enable this behavior via javascript if we wanted too -->
// <!-- Idk if youd ever want to do this, because its messy -->

// <!-- We can also pass data back from here to the server -->
// <% if (currentDay == "saturday" || currentDay == "sunday") { %>
//   <h1 style="color: blue"> <%= currentDay %> List </h1>
//   <h1 style="color: purple"> <%= currentDay %> List </h1>
// <% } else { %> 
// <% } %>