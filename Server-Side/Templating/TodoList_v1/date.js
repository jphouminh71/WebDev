/* Exporting our module */
module.exports.getDate = getDate;
module.exports.getDay = getDay;

const days = ["sunday", "monday","tuesday", "wednesday", "thursday", "friday", "saturday"];
/* This is a file full of date constants that we don't change */
/* We just created a function that we can use wherever we want now */
function getDate() {
    let today = new Date(); 

    let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
    };

    let day = today.toLocaleDateString("en-US", options); 

    return day;
}


function getDay() {
    let today = new Date(); 

    let options = {
    weekday: "long",
    };

    let day = today.toLocaleDateString("en-US", options); 

    return day;
}

/* This is another way to write the function, anonymous function */
module.exports.getNumeric =  function () {    
    let today = new Date(); 

    let options = {
    weekday: "long",
    };

    let day = today.toLocaleDateString("en-US", options); 

    return day;
}

