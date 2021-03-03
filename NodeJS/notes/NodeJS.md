# NodeJS 

---

- Notes from the nodejs online documentation

### Introduction

---

- Runs on single process, without creating a new thread for every request. It provides a set of asynchronous I/O primitives in the standard library to prevent code from blocking. Instead of a thread being blocked, node will resume operations when the operations come back.

- No thread management!

- environment variables: `node --require dotenv/config server.js`

### NPM
---

**npm**: This is an open source location full of packages that you can bring into you project.

**npm scripts**:

- Node.js is a low level platform, so there are thousands of packages that are built upon it to make using the low level code easier including
  - AdonisJS: Full stack framework, one of the fastest frameworks
  - Express: provides one the most simple yet powerful ways to create web server. Focuses on keeping things very simple to create a server
  - Gatsby: A React-based, GraphQL powered, static site generator with a lot of plugins and starters
  - Koa: another iteration of Express, wants to be even simpler than what express offers.

* Global vs Local Install
    * Local is default and installs dependencies in the node_modules folder 
    * Global installs depenencies in your root directory so you can have it across projects 
    * Unless you need a specific package across many projects, keep them installed locally.

* dependencies vs devDependencies
    * Install normal packages in dependencies
    * Install dev tools in devDependencies



**package.json:**
* This file is a central repository of configuration tools for you project and where npm and yarn stores all package names and versions. 
* package-lock.json specifies the versions of the dependencies that will installed upon ```nvm install```

* update versions of packages with ```npm update #packageName```
* Download an older version of a package with ```npm update #packageName@versionNumber```
* View a packages version list ```npm ivew cowsay version```

<br>

---
#### The V8 Javascript Engine

- This is the engine that powers Google Chrome. It takes our Javascript and executes it while browing with Chrome. I provides a runtime environment for all executables. Javascript use to be considered interpretted, but now its compiled for more performance since code bases are getting so large.

<br> <br>

#### Outputting the command line
---

- The console module provides a ton of ways to interact with the command line. It is basically the same console that you'd find the browser.

<em> ex </em>
```js
    console.log('My %s has %d years', 'cat', 2)
```

* %s format a variable as a string
* %d format a variable as a number
* %i format a variable as its integer part only
* %o format a variable as an object*

```js
    const oranges = ['orange', 'orange']
    const apples = ['just one apple']
    oranges.forEach(fruit => {
    console.count(fruit)
    })
    apples.forEach(fruit => {
    console.count(fruit)
    })
```

* The output also has the **stdout** and **stderr** streams where you can pipe outputs. 
* You can also take in command line arguements and process them. See nodejs documentation **Accept input from the command line in Node.js**


#### Node.js Module System
---
* Just use **module.exports** when you export anything. 
```js
    const car = {
    brand: 'Ford',
    model: 'Fiesta'
    }

    module.exports = car

    //..in the other file

    const car = require('./car')
```

## The Node.js Event Loop
--- 
* Thisis one of the most important aspects of nodejs because its how nodejs allows tasks to be asynchronous and have non-blocking I/O. Javascript is a single threaded application natively so we don't have to worry about concurrency, but obviously we want to take advantage of cores. 

**Blocking the event loop**: Javascript code can spend a lot of time executing and block execution of any other code on a page such as UI interaction. Almost all the I/O primitives are non-blocking such as network requests, filesystem operations, and so on. Having a blocking I/O is rare in javascript which is why Javascript relies on callbacks, promises, async/await.


**Queuing Function Execution**: 
    * ```setTimeout(func, 0)```: this makes the passed cuntion execute once every other function in the code has been executed

```js
const bar = () => console.log('bar'); // this gets executed last 
const baz = () => console.log('baz')
const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  baz()
}
foo()
```
* This happens because of the **message queue**: When setTimeout() is called, the Browser or Nodejs starts the timer. Once the timer expires, in this case immediately as we put 0, the callback function is put in the message queue. This essage queue is where events or fetch responses are loaded  before execution on the cpu. **The event loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once its empty, then it executes the messaage queue**


**ES6 Job Queue**
* The job queue was introduced in 2015 which is used by Promises. Its a way to execute the result of an async function ASAP rather then putting it at the end of a call stack. Promises that resolve before the current function ends will be executed RIGHT AFTER the current function. 

"Message queue puts you at the back of the queue, job queue puts you the front of the queue"

```js
    const bar = () => console.log('bar')

    const baz = () => console.log('baz')

    const foo = () => {
        console.log('foo')
        setTimeout(bar, 0)
        new Promise((resolve, reject) =>
        resolve('should be right after baz, before bar')
        ).then(resolve => console.log(resolve))
            baz()
    }

    foo()
```

* Essentially you just need to understand the priority between the Render Queue and Callback Queue, think about the video. 
* each message is processed before any other completion, so you don't have to worry about your functions being interrupted
mid execution

<br>

**process.nextTick()**
*Every time the event loops takes a full trip, we call it a tick
*we pass this function to instruct the engine to invoke this function at the end of the current operation, before the next event loop tick starts
* we essentially push this work to the top of the message queue

```js
    process.nextTick(() => {
        // do something
    });
```


* When the event loop finishes processing something on the stack, the JS engine will run all the function inside the process.tick() 

* Calling setTimeout(() => {},0) will execute the funciton at the end of the next tick (empty stack) rather than nextTick prioritizes the call aand executes it before the beginning of the next tick. 

* Use nextTick() when you want to make sure that in the next event loop iteration that code is already executed. 



**setImmediate()**
* When you want to execute some piece of code asynchronously, but as soon as possible.
( Any function passed to this as a callback will be executed in th enext iteration of the event loop. 

* this is alias to using ```setTimeout(() => {},0)```


**setInterval()**
```js
    const interval = setInterval(() => {
        if (App.somethingIWait === 'arrived') {
            clearInterval(interval)  // closes this interval 
            return
        }
        // otherwise do things
    }, 100)


    // safer way to write what you just saw so you don't starve main thread 
    const myFunction = () => {
        // do something
        setTimeout(myFunction, 1000)
    }

    setTimeout(myFunction, 1000)
```


<br><br>

## Adding Messages
* messages are added anytime an event occurs and there is an event listener attache dto it. So a click on an element with an event handler will add a message. 

* The **setTimout** function takes a callback function and a minimum value of delay before being to the message queue. 

<br><br>

## Aysynchronous Programming and Callbacks
* Javascript was born inside browser with the main job to respond to actions like onClick, onMouseOver, etc. The way it was able to achieve this was though the browser API which could handle the functionality. Nodejs introduced non-blocking I/O environmen tto extend this concept to file access, network calls, and so on. 


**callbacks**
* These are functions that will be executed when an event happnes
* Handle errors by passing in an error parameter to your callback functions. If there is no error it will be null, otherwise it will have the information. The error object probably only exists in the api functions 

```js
fs.readFile('/file.json', (err, data) => {
  if (err !== null) {
    //handle error
    console.log(err)
    return
  }

  //no errors, process data
  console.log(data)
})
```

* As we will see, this can get very complicated as we can enter a callback hell. This issue is resolved better with ES6 features that help us code asynchronous code without using callbacks using **Promises** and **Async/Await**. 


**Promises** 
* Understanding how promises work is critical to understanding how Async/Await work. 
* Promises are a proxy for a value that will eventually be available. 
<br>
* Once a promise has been calle,d it will start in a **pending state**. This means that the calling function continues executing while the promise wait until it resolves then giving the calling function the data that is being requested. 
    * Theses promieses are then either in a **resolved/rejected** state, calling the respective callback functions passed to **then/catch** upon finishing

* Using the resolve and reject, we can communicate back to thte caller what the resulting promise state was and waht to do with it. 


**Async / Await**
* Async functions are a combination of proimses and generators, and basically, they are a higher level of abstraction over promises. They are built right on top of promises. 
* They make our code look synchronous, but behind the scenes they are asynchronous. 

```js 

    /* essentially returns a promise that will fill later */
    const doSomethingAsync = () => {
        return new Promise(resolve => {
            setTimeout(() => resolve("I did something"),0); 
        })
    }
```

* When you want to call the above function you prepend ```await```, and the calling code will stop until the promise is resolved or rejected (similar to **waitpid**).  One caveat: the client function must be defined as ```async```. 

```js
    const doSomething = async () => {
        console.log(await doSomethingAsync);  
        console.log("done"); // wont execute til the above await has been called. 
    }

    doSomething(); // will happen asyncronously
    console.log("hi"); // happens immediately after function call 
```
<br>

* prepending async to any function means that it wil return a promise so we can trim that code above even smaller. This is where we see how Async/Await were built upon promises

```js
    const doSomething = async() => {
        return "i just did something"
        
        // could have also forced a rejection here 
    }

    doSomething().then(alert);
```
<br>
* The following two code snippetse are the same; 

```js
const getFirstUserData = () => {
  return fetch('/users.json') // get users list
    .then(response => response.json()) // parse JSON
    .then(users => users[0]) // pick first user
    .then(user => fetch(`/users/${user.name}`)) // get user data
    .then(userResponse => userResponse.json()) // parse JSON
}

```








<br><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>







