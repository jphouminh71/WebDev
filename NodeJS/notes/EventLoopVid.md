# Event Loop Nodejs 
---
Notes come from youtube video

* Node.js is not multi-threaded, as it is single threaded. 
* All Javascript v8 and the event loop run in one thread, this is called the main thread

* NodeJS has a heavy c++ backend. C++ backend synchronus methods run the nodejs main thread

* **Always use Asynchrous methods when you can, you don't have to worry about thread management!!!**

<br>

* NodeJS has a thread pool of 4 as default. When we make requests node will assign them accordingly to the thread pool. When we get more request than threads we will queue them up and assign them to a thread when it becomes available. 

<br> 

* The event loops acts a central dispatch that routes requestse to C++ and results back to Javascript. When we make a request in javascript it will do work then go into c++ then into the event loop. It will ask if the method is synchronus then it will put the request in the queue for its current thread. If asynchrounous then it will ship that request to another available thread. 
* background processes execute in a background thread then signal the main thread when its done. 
*


## Another video "What the heck is the event loop"
---
link: https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf
* The call stack
    * Javanscript is single threaded so
     one thread == one call stack == one thing at a time 


* Blocking: what happens when things are slow? 
    * code that uses a lot of cpu time and starves other threads/processes  
    * Solution is via asynchronous callbacks 

* Event loop can push task queue items onto the stack until the stack is empty.


```js
    console.log('hi');

    setTimeout(function() {     // executed 5 seconds later
        console.log('there');
    }, 5000);

    console.log('jSConfEu');

    // deferring until 
```

* Use setTimeout when you want to defer something until the stack is clear
* Set timeout isn't a guarenteed timout, its the order of which entered the callback queue first 

* The browser is retrained to render elements by your javascript. It can't do a render if there is code on the stack, it has to wait til the stack is clear. The difference is that the render is giving higher priority than your callback queue.


* Dont put shitty slow code on the stack because it blocks the main thread to update the UI. Example

```js
    // Synchronus, now image running this while loading in elements
    // you are just going to block the main thread and the UI is frozen 
    [1,2,3,4].forEach(function(i) {
        console.log('processing sync');
        delay(); 
    }


    // Asynchronous 
    // this is better because we are not starving the render queue 
    // ideally if you can though, just render all large elements first then perform javascript code
    function asyncForEach(array,cb) {
        array.forEach(function () {
            setTimeout(cb,0);
        })
    }

    asyncForEach([1,2,3,4], function(i) {
        console.log("processing async", i);
        delay(); 
    })
```


**Youtube video on notes**
* A promise is either completed (resolved) or failed (rejected)
* For now, just try to use promises wherever you find yourself needing a lot of callbacks.


<br>

# Takeways
---
* Dont block the main thread
    * push blocking i/o work by putting them in async functions

* Know when you want to use **setTimeout** vs **process.nextTick()**
* You don't need to worry about thread management because all requests in message queue are atomic
    * Instead what you need to worry about is to not flood the message queue, use process.nextTick() on important code. 

* Callbacks are still good, but if you find yourself making too many, then consider using promises. 
* Async and Await are powerful and you should always use async for any module you find. 