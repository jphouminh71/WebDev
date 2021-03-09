# Re-Introduction to Javascript 
--- 
* Javascript has evolved into a more powerful language and to fully understand React and frameworks its good to learn what new features Javascript has to offer 

<em> Notes adopted from Mozilla MDN </em>

* Javascript lagnauge has no concept of input or output, ti was designed to run as a scripting langauge in a host environment to communicate online. 

* functions have local scope 

```js
var a = 1;
var b = 2;

(function() {
  var b = 3;
  a += b;
})();

a; // 4
b; // 2
```
<br>

## Javascript Objects / Prototypes
* Classes in Javascript are represented as Objects
```js
function makePerson(first, last) {
  return {
    first: first,
    last: last,
    fullName: function() {
      return this.first + ' ' + this.last;
    },
    fullNameReversed: function() {
      return this.last + ', ' + this.first;
    }
  };
}

var s = makePerson('Simon', 'Willison');
s.fullName(); // "Simon Willison"
s.fullNameReversed(); // "Willison, Simon"
```
* But this is how you should write it

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
}
Person.prototype.fullName = function() {
  return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function() {
  return this.last + ', ' + this.first;
};
```
**Prototypes**

* ```Person.prototype``` is an object sahred by all isntances of person. Any timne you attempt to access a property of Person that isn't set, Javascript will check Person.prototpye to see if tha property exists there instead. 

* You can also existing functionality to other Javascript object such as Strings 

```js
var s = 'Simon';
s.reversed(); // TypeError on line 1: s.reversed is not a function

String.prototype.reversed = function() {
  var r = '';
  for (var i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
};

s.reversed(); // nomiS
```

## Javascript Classes

**Class Declaration**
```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}


// OR YOU CAN DO IT THIS WAY

class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
```

* Setting class properties and establishing prototypes
```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

Rectangle.staticWidth = 20;
Rectangle.prototype.prototypeWidth = 25;
```

**Static Variables/Methods**
```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance;    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```


**Subclassing classes with 'extend'**
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
```