

# Javascript Notes Intro

## Datatypes:

Same data types as everything else just doesn't have type annotations. **Strings, Ints, Doubles, Floats, etc.** Automatically identified. All variables are created with **var** keyword. 

Arithmetic operations are the same as in any other language. Invalid arithmetic will result in **NaN** value. 

**Structures:**

* Arrays
	* Declare like normal arrays, arrays have access value **.length** to find the size of array
```json
		/* Delaring an array of strings */
		var colors = ["white", "blue", "green"];
		var blue = colors[1]
		var size = colors.length
		
		/* appending / removing to an array */ 
		colors.push("purple")
		colors.pop()
```


## Examples
**Updating HTML elements by ID**

```json
		/* Html has a tag with id=username */
		var username = "Jonathan Phouminh"
		var doc = document.getElementById('username') 
		doc.textContent = username
```

**Function Declaration**
* All functions need to be declared by the interpreter before they can be used
* Use Iffe and anonymous functions when
	* Code that needs to run once within a task , these are like property wrappers in swift
		* passing these functions as arguments
		* To assign the value of a property to an object
		* In event handlers and listeners to perform a task when an event occurs 
```json
	/* Basic Function no parameter */
	function helloworld() {
		console.log('hello world')
	}
	helloworld()
	
	/* Returning multiple values */
	function getSize(width, height, depth) {
		var area = width * height; 
		var volume = width * height * depth; 
		var sizes = [area, volume]
		return sizes; 
	}
	var areaOne = getSize(3,2,3)[0] // this is an array that you are accessing
	var araeTwo = getSize(3,2,3)[1] 

	/* Anonymous function */
	var area = function(width, height) {
		return width * height
	}; // have to close this with quotation
	var size = area(5,5) // calling the anonymous function is the same as named 

	/* IIFE Function, these functions are called immediately */
	var area = (function(){
		var width = 3
		var height = 2
		return width * height
	}())
```

**Objects** 
```json
	/* Creating a basic object */
	var hotel = {}
	hotel.name = "blackhawk"
	hotel.currency = ["bitcoin", "ethc", "doge"]
	hotel.rooms = 40
	hotel.booked = 20
	hotel.checkAvailability = function() {
		return this.rooms - this.booked
	}

	/* Adding a property to that class then deleting that property */
	hotel.owner = "Jonathan Phouminh" 
	delete hotel.owner

	/* Constructor Notation */
	function Hotel(name, rooms, booked) {
		this.name = name
		this.rooms = rooms
		this.booked = booked 
		this.checkAvailability = function() {
			return this.rooms - this.booked 
		}
	}

	var h1 = Hotel("h1", 0, 0)
	var h2 = Hotel("h2", 0, 0)
	
```

## Built in Java Objects
### The Browser Object Model
* Objects that contain information representing the current browser window and tab. Browser history and Device screen
	
**Window Object -> {Document, History, Location, Navigation, Screen }**
	* Document = Current web page
	* History = the pages in the browsers history 
	* Location = URL of the current page
	* Navigator = Information about the browser
	* Screen = Devices display information


### Document Object Model
* object representation of the current page. It creates a new object for each elements element and each section of text within the page. (This is what you use when you work with the HTML)
	
	**Document -> {html -> {head->{title}, -> body -> {div -> p -> text}}}**

*  **document.lastModified;** , this method returns the date of the last modified 
	
### Global Javascript Objects
*  Objects that javascript needs to create a model of such as objects that deal with date and time, its like when you include premade packages / modules 


## Keywords
* **\<script\>**:  tag in html source code to identify areas where javascript is used. 
* **\\**: Escape character 
* 


## Random Tips
*	Always declare **script source** files at the bottom of the page
*	Global variables reduce page performance, local variables are cleaned from memory after use 
*	Math.random();  generates random number


# Udemy WebDev Course Notes

## Notes
### Document Object Model
* **Query Selectors**
	* getElementById() , query by id
	* QuerySelector() , lets you target an object via tag, classname, and id QuerySelectorAll(), lets you grab all targets that fit query

* **.classlist.toggle("stylesheet class name")**
	* use this command to toggle off and on the class style selectors in the css, should never be creating a new style inside of javascript file. Keep HTML for structure, CSS for styling, and Javascript for behavior			


## Code Examples
```json
	/* While loops */
	var i = 0; 
	while (i < 10) {
		console.log(i)
		i++
	}

	/* for loops */ 
	var j = 0
	for (j = 0; j < 4; j++) {
		console.log(j)
	}
```	


* **Text Manipulation**
	* **innerHTML** , this returns ALL the html inside of the tag you just queried 
	* **textContent**, this gives you strictly the text part of the tag you query 

```
	var htmlCode = document.querySelector("h1").innerHTML; // <em> Hello World </em>
	var textContent = document.querySelector("h1").textContent; // Hello World
```

**Attribute Manipulation** 
	* 
