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