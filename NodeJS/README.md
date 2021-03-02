# NodeJS Notes

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

* Essentially you just need to understand the priority between the Message Queue and the Job Queue

