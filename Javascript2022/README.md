## Javascript 2022
--- 

Programming langauge initally designed to interact with elements of web pages. In web browsers. 

- EMCAScript provides the core functionality 
- DOM provides interfaces for interacting with elements on web pages 
- BOM provides browser interface API for interacting with the actual web browser 

After HTML/CSS are downloaded, the JavaScript engine in the web browsedr executes the JS code which can then modify the HTML/CSS dynamically. 

JS can be executed server side or client side. Client side is essentially when users download our files to their pc's via web and run on their computers the JS code that manipulates the UI. JS can also be leveraged in backend servers most commonly with NodeJS which allows a server to run off JS. 
<br>
To <em> define variables </em>
```js
var x = 10
var y = 20  
```

ES6 add the <em> let </em> keyword 
```js
let x = 10 
let y = 20 
```
Use LET because it scopes that down to the function block, VAR scopes the variable globally. 
<br>

Declaring functions  
```js
function add ( a, b ) {
    if a == 0 {
        throw 'division by zero' 
    } 
    else if (b == 20){
        return 20     
    } 
    return a + b 
}
let sum = add(1,2) 
```
<br>

Logging results to the web browser console out 
```js
console.log(sum)
```
<br>

Arrays and ES6 Loops
```js
let items = [] 
let declaredItems = [1,2,3,4]
console.log(declaredItems.length) // 4 

// typical for loop traveral 
for (let i = 0; i < declaredItems.length; i++){
    console.log(declaredItems[i])
}

// ES6 element looping 
for (let item of declaredItems){
    console.log(item)
}


// while loop 
let i = 0
while (i < 20){
    i++
}

```