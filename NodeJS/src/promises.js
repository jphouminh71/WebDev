
/* Example from youtube video */
/* These are meant to replace callbacks */

/* Creating a Promise */
let p = new Promise((resolve,reject) => {
    let a = 1 + 2; 
    if (a == 2) {
        // resolve it, we can pass anything
        resolve('success');
    } else {
        // reject it, we can pass anything
        reject('Failed');
    }
});


/* Consuming a promise */

// if resovled
p.then((message) => { // catch the resolve
    console.log("this is in the then: " + message);
}).catch((err) => { // catches any errors, which are the rejection states
    console.log('this in the catch: ' + err );
})


