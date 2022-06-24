## What is Typescript
--- 
link: https://www.typescripttutorial.net/typescript-tutorial/what-is-typescript/

**Summary**: in this tutorial, you'll understand what TypeScript is and its advantage over the vanilla Javascript

TypeScript is  superset of JavaScript. Typescript builds on top of JavaScript. First you, write the TypeScript code. Then, you compile the code into JavaScript. 

Typescript files use the `.ts` extensioned rather thna the `.js` extension of JavaScript files. 

Typescript uses the JavaScript syntaxes and adds additional syntax for supporting type, allowing for a strongly typed langauge. 
<br>

*Why TypeScript?*
-  Introduce optional types to JavaScript 
- Implement planned features of future JavaScript 

1. TypeScript improves your productivity while helping avoid bugs 
    - Types increase productivity by helping you avoid many mistakes, allows you to catch them before run-time. 


Basic examples
```ts
// defining variables 
let message: string = "Hello World!";
console.log(message); // Hello World!


// declaring a function 
function add(x: number, y: number) {
    return x + y;
} 


// intro to interfaces 
interface Product {
    id: number, 
    name: string, 
    price: number
};

// notice how we can define the type of return value
function getProduct(id) : Product {
    return {
        id: id, 
        name: `Awesome Gadget ${id}`, 
        price: 99.5
    }
}
const product = getProduct(1); 
console.log('The product ${product.NAME} costs $${product.price}'); // Throws property does not exist error!
```

**recall**: JavaScript is dynamically tpyed. It offers flexibility but also creates many problems, typescripts adds and optioanl type system to JavaScript to solve these problems
<br><br>

### What is a `type` in TypeScript 
---
- In TypeScript, a type is a convinient way to refer to the different **properties** and **functions** that a **value** has. A value is anything that you can assign to a variable e.g., a number, a string, an array, an object, and a function.  
    - A `type` is a lable that describes the different properties and method that a value has 
    - every value has a type
<br><br>

Typescript inherits the built-in types from JavaScript. 

Typescript categorizes them into;     
- Primitive Types 
- Object Types 

**Primitive Types**
- `string` : Represents text data 
- `number` : Represents numeric values 
- `boolean` : has `true` and `false` values
- `null` : has one value: `null`
- `undefined` : has one value: `undefined`. It is a default value of an uninitalized variable
- `symbol` represents a unique constant value 

**Object types**: Object tpyes are functions, arrays, classes, etc. 
<br><br><br>

### RECAP: Purposes of types in Typescript 
---
- First, types are used by the TypeScript compiler to analyze your code for errors
- Second, types allow you to understand what values are associated with variables. 
- Every value in TypeScript has a type 
- A type is a label that describes the properties and meothods that value has 
- TypeScript compiler uses types to analyze your code and hunt for bugs.
    
**IMPORTANT**: This stuff is nothing new for you! You work in C# and that langauge is heavy in this kind of stuff.
<br><br><br>

### Understanding Type Annotations in TypeScript
--- 

**What is a Type Annotation?**

We use type annotations to explicityl specify types for identifiers such variables, functions, objects, etc. We use the ` : type`  aftern an identifier as the type annotation, where `type` can be any valid type. 

Once an identifier is annotated with a type, it can be used as the type only. If the identifier is used as a different type, the TypeScript compiler will issue an error. 

```ts
// Generic declarations 
let variableName: type; 
let variableName: type = value; 
const constantName: type = value;

// Primitive Types 
let counter: number; 
let name: string 

// Array 
let names: string[]  = ['John', 'Jane', 'Peter', 'David', 'Mary']
```

In this syntax, the type annotation comes after the variable or constant name and is preceded by a colon (` : `)

specifying return types for objects and methods 

```ts
// objects 
let person: {
    name: string; 
    age: number
};

person = {
    name: 'John', 
    age: 25 
}

// specifiying this is something that accepts a method of this type 
let greeting: (name: string) => string;
greeting = function(name: string)
{
    return "Hello ${name}"; 
} 
```
<br><br><br>

### Type Inference
--- 

Type inference describes where and how TypeScript inferes types when you don't explicity `annotate` them (although you should or else why use typescript). 

ex. 
```ts
let x = 10;  // same as let x: number = 10 

// these are the same 
function(max=100){
    return max 
}

function(max: number = 100) : number {
    return max; 
}
```

So wehen should you use type inference vs type annotations? 
  
- In practice, you should always use the type inference as much as possilbe. And use type annotation in the following cases
    - When you declara vairable that you will assign later 
    - When you want a variable that can't be inferred 
    - When a function returns the `any` type and you want to clarify the value. 

eh, honestly I would love to just markup everything, makes it 100x easier to read and follow. 
<br><br><br>

### `number`: Type 
---

**IMPORTANT**: There is a huge difference between Number and number. One is primitive type and one is a boxed TS Object! Lower case for primitive types. 

```ts
let p : number; 
let p : number = 99.5; 

// multiple inline declarations
let x: number = 10, y: number = 12;

let binary: number = 0b0111
let octal: number = 0o0101
let hexDecimal: number = 0XFF

let bigInt: bigint = 12903884011n; 
```
<br>

### `string`: Type
--- 

```ts
let firstName = 'Jon'; 
let fullName = "Jonathan Phouminh" 

let lastName = "Phouminh"; 
let fullNameInteropulated = `Jonathan ${lastName}`;
```
<br>

### `boolean`: Type
--- 

```ts
let isValid: boolean; 
isValid = false; 
isValid = true; 
```
<br>

### `object`: Type
---
```ts
let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
```

### `array`: [Type]
--- 

```ts
let myNumbers: number[] = [1,2,3,4,5]; 
let alphabet: string[] = ['a','b','c','d','e'];
let two : number = myNumbers[1];

myNumbers.push(6); 
myNumbers.pop(); 

let myNumbers_length: number = myNumbers.length; 
let doubleNumbers: number[] = myNumbers.map(num => num * 2); 
// filter  and reduce are also available 

// you can also have mixed arrays, not sure when this is value other then maybe output 

let scores : (string | number)[];
scores = ['Programming', 5, 'Software Design', 4]; 
```
<br>

































