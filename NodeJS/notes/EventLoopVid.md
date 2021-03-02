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





