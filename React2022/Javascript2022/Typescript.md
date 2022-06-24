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

### `Tuple Types`
--- 
A tuple works like an `array` with some additional considerations
- The number of elements in a tuple is fixed 
- The types of elements are known, and need not be the same. 
- The order in which you use a tuple is defined by the way you instantiate it.


```ts
// representing a number and a string
let skill: [number, string]; 
skill = [99, "Programming"];

// pracical example 
let rgbColor: [number, number, number] = [199,200,200];

// optional tuple
let rgbA: [number, number, number, number?]; 
```
<br>

### `enum values`
--- 
- enum is a group of constant values 
- under the hood, an enum in javascript it is an object with named properties dclared in the enum definition. 
- do use an enum when you have a small set of fixed values that are closely related and known at compile time. 
- Generated object also has number keys with string values representing the named constants. 
```ts
enum name {constant1, constant2, etc...}

// enums for Months in a year
enum Month {
    Jan, 
    Feb, 
    Mar, 
    Apr,
    ...
}

function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(isItSummer(Month.Jun)); // true
```
<br>

### `any`: Type
--- 
- Sometimes, you may need to store a value in a variable, but you don't know its type at the time of writing the program. And the unknown value may come from the third party API or user input. 

- In this case, you want to opt-out of the type checking and lalow the value to pass through the compile-time check. 

- You really only want to use this when you are slowly integrating from Javascript into Typescript, because it essentially allows you to skip compile-time checking. 

- If you decalre a variable without an specifying type, TypeScript assumes that you use the `any` type, for the first assign to it. 


**important**: you should probably avoid using this because at this point the code here becomes fragile. 


```ts
// json may come from a third-party API
const json = `{"latitude": 10.11, "longitude":12.12}`;

// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);
```
<br>

### `void`: Type
--- 
- The `void` type denotes the abscence of hainv any type at all. It is a littl elike the oposite of the `any` type. 
- Typically you will use it like you do in c# where void will be the return type of specific methods 
- Good practice to use this because
    - more type safety for things using the method 
    - improves the clarity of the code. 
```ts
function(message: string): void {
    console.log(message)
}
```
<br>


### `union`: Type
--- 
- These types allow you to define that a variable or value can return a specified number of types. Again not sure if this is the best way to do things because its leading to methods and objects doing more than one thing!  
```ts
function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
```
<br>

### `If-Else` conditional 
--- 
```ts
let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5;  // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount 
} else if (discount > 10) {
    discount = 15; // 15%
} else {
    throw new Error('The number of items cannot be negative!');
}

console.log(`You got ${discount}% discount. `)
```

### `Switch` conditional 
--- 
```ts
let targetId = 'btnDelete';

switch (targetId) {
    case 'btnPressDown':
    case 'btnUpdate':
        console.log('Update');
        break;
    case 'btnDelete':
        console.log('Delete');
        break;
    case 'btnNew':
        console.log('New');
        break;
}
```

### `for / while` loops
---
```ts
let counter: number = 0; 
for(let i: number = 0; i < counter; i++)
{
    counter++; 
}

let k: number = 0; 
while(k < 10)
{
    k++; 
}
```

### `function / function types` 
---
- Obviously you want to annotate your methods as best you can for all functions
- When you want to define the type of a function its a little different, you use the => operator 

```ts 
// defining  function 
function addNums(x1: number, x2: number): number
{
    return x1 + x2; 
}

// defining a variable that takes in a function 
let adder: (number, number) => number = addNums;  
```

### `Optional` types 
---
- Use the `paramter?: type` syntax to make a parameter optional. 
- Use the expression `typeof(parameter) !== 'undefined'` to check if the parameter has been initialized.  

```ts 
function multiple(x1: number =  0, x2: number: = 0,  x3?: number)
{
    let product: number; 
    product = x1 * x2; 
    
    if (x3 !== 'undefined')
    {
        product = product * x3; 
    }

    return product; 
}
```

**IMPORTANT REACT** 
### `Rest` parameters 
---
- We can define a parameter that is an infinute list of items in the form of an array  
```ts
function getTotal(...numbers: number[]): number {
    let sum = 0; 
    for(let num: number in numbers ){
        sum += num;
    }
    return sum;
}

getTotal(1,2,3,4,5); 
```

### `Overloading`
```ts
class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}
```
<br><br>

## TypesScript Classes
--- 
- Its very close to JavaScript ES6 classes, but obviously, it allows you to type annotations! It makes the classes even more robust and type safe!

```ts
class Person {
    private age: number; 
    private ssn: string; 
    private firstName: string; 
    private lastName: string; 
    readonly gender: string; 

    constructor(ssn: string, firstName: string, lastName: string){
        this.ssn = ssn; 
        this.firstName = firstName; 
        this.lastName = lastName;
        this.gender = "male";  
    }

    getFullName(): string{
        return `${this.firstName} + ' ' + ${this.lastName}`; 
    }

    // getter / setter 
    public set age(givenAge: number){
        if (givenAge <= 0 || givenAge > 200)
        {
            throw new Error('this age is invalid');
        }
        this.age = givenAge; 
    }

    public get age()
    {
        return this.age + " years old"; 
    }
}


// Inheriting a Person class
class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {

        super(firstName, lastName);
    }

    describe(): string {
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
}

// Static variables 
class Employee {
    private static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee.headcount++;
    }

    public static getHeadcount() {
        return Employee.headcount;
    }
}
```

**Available Access Modifiers** 
- private: limits the access to only same class 
- public: anybody has access to it 
- protected: limits access to descendents of the class 
- readonly: these values are obviously read-only values and can only be assigned in the <em> property declaration </em> and <em> constructors</em>. 

**static elements**
- Off first glance, TS doesn't support static classes, but you can deifne static methods and properites inside of classes, which should be more than enough to let you define helper methods cleanly. Remember `static is bad`. 

**abstract class example**
```ts
// Abstract Employees
abstract class Employee {
    constructor(private firstName: string, private lastName: string) {
    }
    abstract getSalary(): number
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}

// Concrete Class 
class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}
```

**Interface Examples**
```ts
interface Person {
    readonly ssn: string; 
    firstName: string; 
    middleName?: string;
    lastName: string; 
}

function getFullName(person: Person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}
let john = {
    firstName = 'john'; 
    lastName = 'doe';
}
getFullName(john);
```

**designing interfaces to be implemented**
```ts
interface Json {
    toJSON(): string;
}
class Person implements Json {
    private firstName: string; 
    private lastName: string; 
    constructor (firstName: string, lastName: string)
    {
        this.firstName = firstName; 
        this.lastName = lastName; 
    }

    private toJSON(): string {
        return JSON.stringify(this);
    }
}
```

**extending interfaces**
```ts
interface A {
    a(): void
}

interface B extends A, C {
    b(): void
}
```
<br><br>

### Intersection Types
---

- Intersection type creates a new type by combining multiple existing types. The new type has all features of the existing types. 

```ts
// define a intersection type
type typeAB = typeA & type B;

// recall difference between this one 
let varName = typeA  | type B; 
```
- the type ```typeAB``` will have all properties from both `typeA` and `typeB`

usage 
```ts
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

// again this seems messy, why not just have a class that does this so you don't do it manually. 
type Employee = Identity & Contact;

let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};
```
<br><br>

### Type Guards
--- 
- Type guards allow you to narrow down the type of a variable within a conditional block

`typeOf`
```ts
type alphanumeric = string | number; 

// obviously the better way to do this is by interfacing 
function add(a: alphanumeric, b: alphanumeric)
{
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b; 
    } 

    if (typeof a === 'string' && typeof b === 'string')
    {
        reutrn a.concat(b); 
    }
    throw new Error ("invalid arguments");
}

// similarly we can do the same by checking the instances of the items; 
function signContract(partner: BusinessPartner) : string {
    let message: string;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }

    return message;
}
```

### Typecasting 
---
```ts
let a: typeA; 
let b = a as tybeB; 

let input = <HTMLInputElement>document.querySelector('input[type="text"]');
console.log(input.value);

let a: typeA; 
let b: <typeB>a;
```























