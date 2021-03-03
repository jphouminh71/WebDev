/* Creating a asynchonous function and playing with await */


/* The asynchrnous method */
const doSomething = () => {

    /* This is asynchrnous because we pushed this request to the request queue 
        that will be executed, just not immediately until call stack is empty. This is an excellent way 
        to prevent a long operation from blocking the main thread. 
    */

    return new Promise(resolve => {  
        setTimeout(() => resolve('I did something'), 3000)
      }); 
}


/* defining function that calls the asynchrnous function we created above */
const callDoSomething = async () => {
    console.log(await doSomething());  // blocks until resolve 
    console.log("hi")
}

/* calling the asynchrnous function */
callDoSomething().then(console.log('came back from async funCall'));
console.log("program end")