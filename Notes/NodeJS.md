# Node JS
--- 

**What is Backend Development?**
* Its going to be the code that determines how the application works. It will serve the html pages and handle database interaction.           

NodeJS is very fast and helps make website fast and scalable. Compaines like Twitter, Netflix, Ebay, and Wiki use nodeJS for their backend technology. 


**What is NodeJS**
Upto this point our javascript is only able update and change our html code and add event listers. We haven't yet been able to go beyond that and do things like; get into the users computer file system (like building an application), listen to network requests. Basically we need the code to interact directly with the computer and not just the browsers.

We can also use nodejs to run javascript code onto a server via requests! We can ping a server to do a request then have that information back to the user. This keeps a lot of work out of the client side. 


**NodeJS Repl (Read Evaluate Print Loop)**
1. Type 'node' in the terminal

Pretty much here you can execute code snippets


**Node Modules**

Just like JQuery, there are pre-built node modules that you can explore online. To use node modules we have to require them into our code. 

```json
    /* bringing in the file system node modules */
    const fs  = require("fs")

```

NodeJS has a online documentation that contains the standard node bundles that have what are called **internal bundles** that you can use. But there are also exeternal libraries that we can use with the npm package manager. These are alias to how you would use **CocoaPods** in iOS applications. 


<em> Internal Module Example </em>
```json
/* File system library, think of this as an import statement */
const fs = require("fs");

/* Synchronous, copying file1.txt contents into file2.txt, if it doesn't exist then it will create a new */
fs.copyFileSync("file1.txt", "file2.txt");
```


**<em> NPM (Node Package Manager) </em>**
* With NPM we can browse different packages that other people have written and bring in reusable packages for our applications. Only bring in what you really need because having to many resources becomes unneccsary and adds weight and decreases the speed of your application. 
* When you can , just write out your own features for the application as it will always be faster. 


<em> Launching NPM package manager </em>
1. type ```npm init``` and follow the steps. This will create a package .json file in the project directory that shows you all the packages that you currently have installed in the project. 
2. Navigate to https://npmjs.com to see all the packages. On each package it will tell you how to install it and it will give you all the information you need to use the package. To remove a package use ```npm uninstall <package name>```



## Express JS
--- 
**What is Express?**

Similarly to how Javascript has JQuery to simplify code, Express is a similar framework for NodeJS. It provides packaged up functionality that we can use so we can avoid doing the dirty work. So if node is the screwdriver to build a car, then Express is the drill to put certain pieces together. 

Express is specifically made for NodeJS Web Development projects. Its a popular framework that is maintained well. 
<br>
<em> To Install Express </em>
```npm install express```

<em> Starting the server up </em>
```json
/* Bringing in the express package */
const express = require('express');
const app = express();

/* This makes our application listen to any https notifcations, essentially creating our live server */
/* This port is a channel that our server will listen too, when we want to interact with this we would need to */
app.listen(3000, function() {
    console.log("server started on port: 3000");
});
```




**Problems you will see**
---
**Cannot GET/**: When a browser throws this at you it means that it couldn't recieve anything back from the server. 




