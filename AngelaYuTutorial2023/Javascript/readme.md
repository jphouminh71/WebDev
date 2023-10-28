# Javascript notes 2023

* created to "make webpages feel alive" 
* Javascript can execute not only in the browser, but also on the server, or actually on any device that has the special program called "the JavScript engine" 
* JavaScripts' capabilities greatly depend on the environment it's running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform netweork requests, etc.
    * In browser Javascript can do everything related to webpage manipulation, interaction with the user, and the webserver. 
        * Add new HTML to a page, change the existing content, modify styles
        * React to user actions, run on mouse clicks, pointer movements, key presses. 
        Send requests over the network to remote servers, download and upload files 
        * Get and set cookies, ask questions to the visitor, show messages. 
        * Remember the data on the client-side ("local storage")

* What Javascript Can't do
    * Its abilities in the browser are limited to protect the user's safety and prevent evil webpage from accesssing private information or harming the user's data.
        * Cannot read/write to hard disk or launch programs
        * Javascript doesn't know of different tabs that are open etc, those are separate processes
            * This is known as the "Same Origin Policy", to work around it both pages must agree for data exchage and must contain special JavaScript code that handles it. We'll cover that in the tutorial.
        * These limitations do not exist if JavaScript is used outside of the browser, for exmaple on a server. Modern browserse also allow plugins/extensions which may ask for extended permissions. 


* What makes Javascript Unique? 
    * Full integration with HTML/CSS
    * Simple things are done simply.
    * Supported by all major browsers and is enabled by default 


Use the Developer Console Tool window to help debug Javascript Errors. 