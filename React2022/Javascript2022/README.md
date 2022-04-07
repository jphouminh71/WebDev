## Javascript 2022
--- 
from: https://www.javascripttutorial.net/
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
<br>

String interopulation 
```js
let name = "John Doe" 
Console.log("Hello ${name}")
```
<br>


### Javascript Objects 
---
An object in JS is an unordered collection of key-value pairs. Each pair is called a property. Keys of a property can be any value; string, number, array, or even a function. 

The most common way to create an object is through the literal notation. 

```js
let emptyObject = {}; 
```
<br>

To create an object with properties, you use the the key value notation 
```js
let person = {
    name: "John Doe", 
    age: "29"
}; 

// then you could probably export this around to whatever component needs 
// to access it. 
let exampleDTO {
    firstName = "", 
    lastName = ""
}

Console.log(person.name); 
Console.log(person[age]); 


// you can also add or delete properties from an object 

person.FavoriteColor = "red"; // add property  
delete person.name; // delete property 

// checking to see if a property exists in an object 

Console.log(age in person); // false, we just deleted it 
```
<br>

### Primitive Types vs Reference Types 
--- 

Primitive values are atomic pieces of data while reference values are objects that might consist of multiple values.

Primitive types like **bool**, **int**, **strings** are stored on the STACK, but objects like the person object we defined above are stored on the HEAP. The person reference points to the person object on the HEAP.

**Copying Values**

Primitive types are copied to new spots in memory so they will never refer to eachother 
```js
let age = 25; 
let newAge = age; 

age = 30  // newAge is still 25 
```

When you assign a reference value to another, the JavaScript engine creates a reference so that both variables refer to the same object on the heap memory. This means that if you cahange one variable it will affect the other.
```js
let person = {
    name : 'John', 
    age : 25 
};

let member = person; 

member.age = 26;   
Console.log(member.age); // 26 
Console.log(person.age); // 26 
``` 
<br>

### Javascript Arrays
---
Javascript arrays are dynamic so you don't have to update the size of them. 

Basic array operations 
```js 
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];

seas.push('Red Sea');       // adding the back 
seas.unshift('Purple Sea'); // adding to the front of an array 
seas.pop();                 // removing the last element in the array, returns the value
seas.indexOf('North Sea')   // returns index of first occurrence 
console.log(seas); 
```
<br>


### Javascript Functions 
--- 

- Use the <em> function </em>
- Use the <em> functionName() </em> to call a function 
- All functions implicitly return a undefined if they don't explicitly return a value 
- Use the <em> return </em> statement to return a value from a function explicitly 
- the function hoisting allows you to call a javascript function before using it. 

Javscript functions are first-class citizens. This means you can store a function in a variable and pass them around as arguments, and also make them returnable. 

```js
function add(a,b) {
    return a + b;
}
let sum = add; // (a: xtype, b: xtype) => xtype

function average (a,b,fn){
    return fn(a + b) / 2; 
}


// Anonymous functions 

(function () {
    // ... gets called immediately when parsed 
})();

let show = function { // short hand 
    console.log('anonymous function'); 
}
show(); 
```

**Arrow Functions**

ES6 Introduced arrow functions that provides a short way for declaring anonymous functions: 
```js
// This is the same 
let show = function() {
    console.log('Anonymous function'); 
}

// As this 
let show = () => {
    console.log('arrow function'); 
}

let add = (a,b) => a + b
```
- Anonymous functions are functions without names. 
- Anonymous functions can be used as an argument to toher functions or standalone methods
themselves. 
- All functions can also provide default values, not sure if this is a great practice 
or not
<br>

**Javascript pass-by-value or pass-by-references**

In Javascript, all function arguments are always passed by value. There is no such 
way of pass by reference in javascript.
<br><br>

### Javascript Objects 

You just like object properties, you can also add methods to them like this 

```js
let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet() {
        console.log('Hello, World!');
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

person.greet();
```

This is an example of object constructor, use these for stuff like creating DTO objects 

```js
// Declaring an object constructor with default values 
function Person(firstName = "", lastName = "") {
    this.firstName = firstName;
    this.lastName = lastName;
}

let person = new Person('John', 'Doe'); 
```
<br>

**Prototypes**
Javascript provides an anonymous object that can be referenced via the <em> prototype </em>
property of the 'Object()' function

```js
console.log(Object.prototype); 
```

The Object.prototype object has some useful properties and methods like toString() and valueOf() and another important property called 'constructor' that references the 'Object()' function' 

**Constructor / Prototype pattern** 

By using this pattern, all objects of the custom type share the methods dfined in the prototype. Also, each object has its own properties. 

This pattern takes the best part of both constructors and prototype patterns

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// this is essentially a object method, just defined in a prototypical fashion
// not sure what the benefits here are. 
Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};

let p1 = new Person('John', 'Doe');
let p2 = new Person('Jane', 'Doe');

console.log(p1.getFullName());
console.log(p2.getFullName());
```

### ES6 Classes

This is the much better way to do things for objects. 

function objects are perfect for things like DTO's but when you need to add 
important / cohesive methods its probably best to use class declaration so you can take advantage of ES6 class methods. The tutorial calls the new class declaration sugar 
but honestly it makes everything so much easier to read. 

```js 
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName() {
		return this.firstName + " " + this.lastName;
	}
}

let p1 = new Person('John', 'Doe');
let p2 = new Person('Jane', 'Doe');

console.log(p1.getFullName());
console.log(p2.getFullName());


// for objects only. This is how you can add properties and configure them.  
// source: https://www.javascripttutorial.net/javascript-object-properties/
let person = {};

Object.defineProperty(person, 'ssn', {
    configurable: false,
    value: '012-38-9119'
});


Object.defineProperty(person, 'ssn', {
    configurable: true
});


// same as above, but here you can create property wrappers like this, wonder how 
// you would do this without having to do this 'defineProperty'
let person = {
    firstName: 'John',
    lastName: 'Doe'
}

Object.defineProperty(person, 'fullName', {
    get: function () {
        return this.firstName + ' ' + this.lastName;
    },
    set: function (value) {
        let parts = value.split(' ');
        if (parts.length == 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            throw 'Invalid name format';
        }
    }
});

console.log(person.fullName);

// this is how you would do it 
var product = {};

Object.defineProperties(product, {
    name: {
        value: 'Smartphone'
    },
    price: {
        value: 799
    },
    tax: {
        value: 0.1
    },
    netPrice: {
        get: function () {
            return this.price * (1 + this.tax);
        }
    }
});

console.log('The net price of a ' + product.name + ' is ' + product.netPrice.toFixed(2) + ' USD');


// traversing through an objects properties 
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        const value = person[key];
        console.log(value);

    }
} // john doe 25 

// OR 

const profile = Object.values(person); 
console.log(profile)
// ['John', 'Doe' 25]
```

**IMPORTANT**: In practice when creating a lot of objects, you will rarely use the factory functions. Instead, you use classes or constructor/prototype patterns.

**Prototypical Inheritance** 

javascript (ES5 anyways) doesn't have the normal inheritance that you're used to. Instead they have whats called prototypcal inherticance where objects "inherit"  properties from another object via prototypical linkage. 

Just read through the documentation and it seems horrendous, so if you really do find yourself needing some inheritance for FRONT END code then I guess you can come back to this. 

<br><br>

# Javascript Classes 


A javascript class ia blueprint for creating objects. A class ecapsulated data and functions that manipulate data. They technically function the exact same ways prototypical constructor/prototype pattern so they are considered 'syntactical' sugar. 

- Classes are not Hoisted. 

**Getters and Setters**
Its a lot different than how it is in C# but its still available in javascript 
```js
class Person {

    // wonder if you can also have delegate proeprties 

    constructor(name) {
        this.name = name); // notice how the constructor immediately calls the getName
    }

    // Guessing these must have the same name as the properties you are asking for  
    get name() {
        return this._name;
    } // call with Person.name 
    set name(newName) {  // have to have a matching setter with getters 
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }
}

let person = new Person('Jane Doe');
console.log(person); // Jane Doe

person.setName('Jane Smith');
console.log(person.getName()); // Jane Smith
```

- Use the 'get' and 'set' keywords to define the Javascript getters and setters for a class or object. 
- The 'get' keyword binds an object proepty to a method that will be invoked when the property is invoked. 
- The 'set' keyword binds a object property to a method that will be invoked when that property is assigned. 
<br>

**ES6 Class inheritance xample**
```js
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}


let bird = new Bird(2);

bird.walk();
bird.fly();
```
<br>


**Static methods**
Static methods are godo for helper / utility methods that are not tied to specific object behavior. 
```js
class Person {

    // declaring static property 
    static count = 0 

    #myPrivateName = "Foo" 

	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}

    #getMyPrivateName() {
        return this.#myPrivateName
    }
	static createAnonymous(gender) {
		let name = gender == "male" ? "John Doe" : "Jane Doe";
		return new Person(name);
	}
}
```

- Static properties are shared between all instances of that class
- Prefix the name with '#' to declare private fields
- Private fields are only accessible only inside the same class, nowhere else 
- Use the 'in' operator to check if that property contains that private field you 
are looking for (but you shouldn't ever want too)

<br><br>

# Advanced Functions 

**Function methods: apply(), call(), bind()** 
apply() and call() method call a function with a given 'this' value and arguemnts. The difference between the two is that you need to pass the arguments to the apply() method like and array-like obejct, whereaas you passt he arguemnts for call() individually like a normal function 

```js
let cat = { type: 'Cat', sound: 'Meow' };
let dog = { type: 'Dog', sound: 'Woof' };

// honestly not too sure when you'd have a method like this lying around 
const say = function (message) {
  console.log(message);
  console.log(this.type + ' says ' + this.sound);
};

say.apply(cat, ['What does a cat say?']);
say.apply(dog, ['What does a dog say?']);
```

can go further into the documentation with these here: https://www.javascripttutorial.net/javascript-function-type/

but I dont think these would be very cleanly integrated, as far as you know today. 
<br>

**Closures**

Closures are functions that referen variables in the outerscope from its inner scope. The clousre preserves the outer scope inside its inner scope. 

example of a closure 

```js
function greeting(message) {
   return function(name){
        return message + ' ' + name;
   }
}
let sayHi = greeting('Hi');
let sayHello = greeting('Hello');

console.log(sayHi('John')); // Hi John
console.log(sayHello('John')); // Hello John

// this is a really good example of grasping the idea 
// the key here is the 'let' keyword because it allows the method inside to scope
for (let index = 1; index <= 3; index++) {
    setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
}

// or you can just immediately invoke the setTimeoutFunction 
for (var index = 1; index <= 3; index++) {
    (function (index) {
        setTimeout(function () {
            console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    })(index);
}
```

Returning multiple values from a method 
- Javascript doesn't support functions that return multipel values. However, you can wrpa multiple values into an array or object and reutrn the array or the object. (probably better define a dto to make it clear)
 

 **Javascript Arrow Functions** 
- Use the (...args) => expression; to define an arrow function.
- Use the (...args) => { statements } to define an arrow function that has multiple statements.
- An arrow function doesn’t have its binding to this or super.
- An arrow function doesn’t have arguments object, new.target keyword, and prototype property.
-  you should not use it as an event handler, a method of an object literal, a prototype method, or when you have a function that uses the arguments object.
- Honestly after reading more through the documentation it sounds like you shouldn't really be using arrow functions except for maybe very pure methods (ones that don't acesss anything and only operate on their arguments)

<br>

### Javascript Callback 
ES6 you can use arrow functions all callbacks. A callback function is a function that you pass into another function as an argument for executing later. 

```js
  let results = [];
  for (const number of numbers) {
    if (callback(number)) {
      results.push(number);
    }
  }
  return results;
}

let numbers = [1, 2, 4, 7, 3, 5, 6];

let oddNumbers = filter(numbers, (number) => number % 2 != 0);

console.log(oddNumbers);
```

There are two types of callbacks: synchronous and asynchronous callbacks. 
<br><br>
**Synchronous Callbacks**: 
 Synchrnous callback is executed during the execution fo the hihg-order function that uses the callback. So they are callbacks that used during the called method. 

 **Asynchrnous Callbacks**: 

 These are exected aftert eh execution of the high-order function that uses the callback. It means that if javascript has to wait for a operation to complete, it will execute the rest of the code while waiting. Note that Javascript is single-threaded langauge, therefore it carry its operations via the callback queue and event loop. 
 
 ex. Suppose you need to develop a script that downloads a picture from the remote server and process it after the download complete

 ```js 
function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        
        // process the picture once it is completed
        callback(url);
    }, 1000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://wwww.javascripttutorial.net/pic.jpg';
download(url, process);
```

The example above is just showing the idea, not how its used in production. Use async and await and promises in reality. What is shown above results in callback hell, but again in reality the best solution is to use asynchrnous operations available. 

Summary 
- A callback is a fucntion passed into another function as an argument to be exected later 
- A high-order function is a function that accepts another function as an argument 
- Callback functions can be synchronous or asynchronous 
<br><br>

### Javascript Promises 

You will rarely ever create you're own promises in practice but you will consume them 
provided by the libraries that use them. 

```js
let success = true;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      } else {
        reject('Failed to the user list');
      }
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}
function onRejected(error) {
  console.log(error);
}

const promise = getUsers();
promise
   .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    render();
  });


// if you want to only get the error when the state of the promise is rejected
 
promise.catch(onRejected); 
```

In ES2017 they introduced the async / await that helps you write the code that is cleaner than using the promise chaining technique. 
<br><br>

### Introduction to Javascript async / await keywords
In the past to deal with asynchrnous operations, you had to rely on callback functions. However, when you nest more and more, maintainability goes down the drain. 

ES2017 introduced async / await keywords to build on top of the ideas of promises, allowing you to write asynchrnous code that looks morelik synchronous code and is more readable, therefore async / await are syntactic sugar of promises. 

If a function returns a Promise, then you can place an **await** keyword in front of it like so 

```js
let result = await fAsync(); 
```

to **await** means that it will wait for the Promise to be returned from fAsync(). The await keyword can be used only inside of functions labeled as **async**. 

Example

```js
async function showServiceCost() {
    let user = await getUser(100); 
    let services = await getServices(user); 
    let cost = await getServiceCost(services); 
    console.log('The service cost is ${cost}'); 
}
showServiceCost(); 
```

**async** keyword allows you to define a function that handles asynchronous operations. All you have to do is make sure the keyword is right before the **function** label. They execute asynchronously vis the **event loop**. And they always reutrn a promise. 

In this example, because **sayHi()** returns a Promise, you can consume it like this. 
```js
sayHi().then(console.log); 

// you can also declare asynchronous anonmous functions like this 
let sayHi = async function () {
    return 'Hi'; 
}

let sayHi = async () => 'Hi'; 

class Greeter {
    async sayHi() {
        return 'Hi' 
    }
}
```

You can use the **await** keyword for the Promise to settle in either resolved or rejected state. And you can use the **await** keyword only inside a **async** function. 

**Async / Await Error Handling** 
If a promise resolves, the **await promoise** returns the result. However, when the promise rejects, the **await promise** will throw an error as if there were a throw statement. 

```js 

// this 
async function getUser(userId){
    await Promise.reject(new Error('Invalid User Id')); 
}

// is the same as this 
async function getUser(userId){
    throw new Error('Invalid User Id'); 
} 

// but this is how you normally handle like in other langauges 
async function getUser(userId) {
    try {
       const user = await Promise.reject(new Error('Invalid User Id'));
    } catch(error) {
       console.log(error);
    }
}
```
<br><br>

### A comprehensive look at ES6 Modules 

In this tutorial, you will learn about how to export variables, functions, and classes from a module and use them in other modules. An ES6 modulkes ia  javascript file that executs in strict mode only. It mean that any vairables or functions declared in the modules won't be autoamtically added to the global scope. 

First, create a file called 'message.js' that contains the following code 
```js 
export let message = 'ES6 Modules'; 
```

The 'message.js' is a module in ES6 that contains the message variable. The 'export' statement exposes the 'message' variable to other modules. 

Second create another new file named 'app.js' that uses the 'message.js' modules. 
```js
import { message } from './message.js' 

const h1 = document.createElement('hi'); 
h1.textContent = message

document.body.appendChild(h1)
```

To export a variable, a function, or a class, you place the 'export' keyword in front 
```js 
// log.js
export let message = 'Hi';

export function getMessage() {
  return message;
}

export function setMessage(msg) {
  message = msg;
}

export class Logger {
}
```

Or you can export at the very end of a file like this 

```js
// foo.js
function foo() {
   console.log('foo');
}

function bar() {
  console.log('bar');
}
export foo;

```

To import a module you can access the exported variables, functions, and classes in another module with the **import** keyword. 

```js
import { what, ever } form './other_module.js' 
```

- You must first psecifcy what to import from the module (the bindings)
- Then you must specify the module from which you import the given bindings 
- once imported you can use them as if they were in the file, but they are treated as **const** fields 

You can import an entire module like so, this is known as namespace import. 
```js
import * as cal from './cal.js' 
```

You can also alias the imports, not sure if you want to though
```js 
import {sum as total} from './math.js' 
```

**DefaultExport**: A module can have one and only one default export. The default export is easier to import. The default can be anything 
```js
//sort.js
export default function(arr){
    //sorting here
}

// consumed like this
//app.js

import sort from sort.js; 
sort([1,2,3])
```
<br><br>

### Introducing the Javascript Callstack 
Javascript engine uses the **call stack** to manage execution contexts: the Global Execution Context and Function Execution Contexts. 

The call stack functions on the LIFO principle 

When you execute a script, the engine create the Global Execution Context and pushes it on top of the call stack. 

Whenever a fucntion is called, the JS engine createa  function execution context for the function and pushes it to the top of the call stack, and starts executing the function. 

If a function calls another function it will create another function execution context for the function and push it to the top of the call stack. 

When the current function completes, the Javascript engine pops it off the call stack and resumes the execution where it left off. 

The script will stop when the call stack is empty. 
<br>
### The Event Loop 
JavaScript is a single-threaded programming language. This mean that it can really only do one thing at a time. 

The javascript engine executes a script form te top of the file and works its way down. It create the execution context, pushes, and pops functions onto and off the call stack into the execution phase. 

If a function takes a long time to execute, you cannot interact with the browser as you are blocking the main loop. So must do things asynchrnously. 

A function that takes a long time to complete is called a blocking function. Tehcnically, a blocking function blocks everything on the user side. 

An example of a blocking function is a function taht calls an API from a remote server. 

example of a blocking function 

```js
function task(message) {
    // emulate time consuming task
    let n = 10000000000;
    while (n > 0){
        n--;
    }
    console.log(message);
}

console.log('Start script...');
task('Call an API');
console.log('Done!');
```

to stop a call from blocking you usually introduce callbacks, methods to be deferred on execution like this.  

```js 
console.log('Start script...');

setTimeout(() => {
    task('Download a file.');
}, 1000);

console.log('Done!');

// Start script...
// Done!
// Download a file.
```

Asynchronous methods are first placed into the Callback Queue. The JS event loop is constantly running processes that monitor both the callback queue and the call stack. If the call stack is not empty, the event loop waits until it is empty and places the next function from the callback queue to the call stack. If the callback queue is empty, nothing happens. 

reference: https://www.javascripttutorial.net/javascript-event-loop/ <-- GOOD REFRENCE

<br><br>

### Introduction to JavaScript setTimeout()
The <mark> setTimeout() </mark> is a method of the **window** object. The setTimeout() sets a timer and executes a callback function after the timer expires.

syntax: 
```js
let timeoutID = setTimeout(callback, [delay], callbackArg1, callbackArg2)
```

When you call <mark> setTimeout() </mark> the JavaScript engine creates a new function execution context and places it on the call stack. Then it executes the timer and places it into the callback queue. 

Then it is only executed when the call stack is empty and is pulled from the callback queue

