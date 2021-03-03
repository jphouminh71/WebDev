/* 
    You can query out via; id,tag, or classNames
    The return values of are either singular or come in a set depending on what JQuery finds, use .length to find out

    for functions that you use the 'e' parameter, you can find out all the available properies you can query 
    out by looking at developer tools once you print out that object, then you can find out what you can
    work with. Its probably different for all events.


    I guess javascript also recently introduced class, you'll have to play around with this to 
    to make sure it functions the way you think it does, like delegation stuff. 
    class Animal { 
        constructor(name) {
        this.name = name;
    }


    class Dog extends Animal {
        speak() {
        console.log(this.name + ' barks.');
    }

*/

/* Flow of setting up a website 
    1. Make sure the document is ready
    2. Load in any assets or alerts 
    3. Set up the event listeners
*/


/* Treat this is the main function that starts all the scripts */
$(document).ready(function (e) {
    // updatingStyles();
    // updatingText();
    // updateAttributes();
    // addEventListeners();
    // addElements();
    animations();
});


/* use this for drawer menus */
function animations() {
    var selector = "h1"

    // making it so that the buttons will hide the h1
    $("button").on("click", function (e) {
        /* hiding selected elements */
        $(selector).slideUp().slideDown().animate({
            // declare custom css animations
            opacity: 0.5,
            margin: 20
        }); 
            //.fadeToggle();
            //slideUp()
            //slideDown()  use these for the drawer menus  
            //slideToggle()
    });
}

/* 
    before: adds new e;ement, before the opening tag of the selecting element
    after: adds new element, after the closing tag of the selected element
    append: adds just after the content, but before the closing tag
    prepend: adds just before the content, but after the opening tag
*/
function addElements() {
    var selector = "button";

    /* adding before h1*/
    var htmlEl = "<button> new </button>";
    $('h1').before(htmlEl);

    /* removing all the buttons */
    $(selector).remove();
}

/* 
    Events that have children ALSO recieve the event so make sure you take
    this into account. 
*/
function addEventListeners() {
    
    /* vanilaa javascript method */
    //addEventVanilla(); 

    /* With JQuery we don't have to loop */
    var events = "click"
    $("button").on(events, function (e) {
        var h1 = document.querySelector("h1");
        h1.style.color = "purple";
        console.log(this.id)
    });

    /* Every keystoke changes the h1 name */
    $(document).on('keypress', function(e){
        $('h1').text(e.key);
    })

}

/* adding event listeners the old school way */
function addEventVanilla() {

    // aquire all the button components
    var buttons = document.querySelectorAll("button");

    // loop through all of them and add the event
    var event = "click";
    var size = buttons.length
    var i; 
    for (i = 0; i < size; i++) {
        buttons[i].addEventListener(event, function(){
            /* Aquire h1 and update it */
            var h1 = document.querySelector("h1");
            h1.style.color = "purple";
        })
    }
    
    

}


/* attributes are the things like img="", href="", alt=""*/
function updateAttributes() {

    /* querying the 'alt' attribute for the element with id='googleImage'*/
    var img = $("#googleImage").attr("alt");
    console.log(img)

    /* setting an attribute */
    var newAlt =  $("#googleImage").attr("alt", "YOU SET ME");
    console.log($("#googleImage").attr("alt"));
    
}


function updatingStyles() {
    /* Creating a refernce to h1 tag */
    var h1 = $("h1");

    /* updating via addClass */
    var classes = ["big-title", "margin-50"];
    h1.addClass(classes);
    // h1.removeClass("big-title");

    /* Checking if an element has the class */
    console.log(h1.hasClass(classes[0]));

    /* updating via css, shouldn't do this */
    h1.css("color", "red");
}

function updatingText() {
    
    /* updating the text of h1 */
    var h1 = $("h1");
    h1.text("hi")

    /* adding an item below */
    var msg = "<strong><em> You just added me </em></strong>" // creating an html tag to throw in the mix
    $(h1).after(msg);

    /* retrieving just the text of an element */
    var text = h1.text()
    console.log("text: " + text);
    
    /* retrieving the html of an element */
    var htmlEl = h1.html();
    console.log("html: " + htmlEl);


}