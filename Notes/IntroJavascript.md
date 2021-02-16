

# Javascript Notes Intro / JQuery 

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
---
# The Document Object Model 
* The DOM defines methods and properties to access and update each object in this model, which in turn updates what the user in the browser sees. You start by looking for specific elements on the page, then access their properties to make visual changes.

* Inconsistencies with many browser and their support became an issue which is why **JQuery** became so popular.
* Queries can return one or more nodes. In the latter they will return a **NodeList** which is accessible just like an array which you just access like normal. 

**Traversing The DOM**
-- 
**Selecting an Individual Node**
* **getElementById('id')**: uses the value of an elements id attribute to query
* **querySelector('css selector')**: Uses a CSS selector, and returns the first matching element

**Select Multiple Elements (Nodelist)**
* **getElementsbyClassName()**: Selects all elements that have a specific value for their class attribute 
* **getElementsByTagName()**: Selects elements that have the same tag name (like **h1**)
* **querySelectorAll('css selector') **: Uses CSS selector syntax to select one or more elements and returns all that match

* Going up and down the DOM tree
	* .parentNode, previousSibling, nextSibling, firstChild, lastChild 


**Access and Update Text with textContent and innerText**
 	* **textContent:** grabs the text field of a element
 	* innerText: just avoid using this one. 

**DOM Tips**
* Save all frequently used queries objects so you don't have to requery all of them. Maybe put them all in their own object
* Use the chrome console to help you figure out if you are querying elements correctly. 
* Query performance matters so always make sure you do the best searches to help with responsiveness 
* Always check if the elements you are trying to grab exist before working with them. Like unwrapping optionals in Swift. 
* DOM manipulation easily targets individual nodes in the DOM tree, but innerHTML is better suited for updating entire fragments
* Dont use **innerHTML** or **document.write()** to manipulate pages, just a lot of problems can happen
**  **You probably won't be accesssing the document via DOM and will be utilizing tools like JQUERY probably**


**innerHTML Notes**
* innerHTML returns entire html contents of node. You need to make sure that the HTML you want to inject is written completely and thoroughly, or else you can throw off the rest of the page after. If innerHTML is used to add content from your users to a created page they could add malicious content. 

Adding Content via innerHTML
``` json
	/* retrieving content*/
	var elContent = document.getElementById('one').innerHTML; // <em>fresh</em> 

	/* Setting content */
	document.getElementById('one') = elContent

	/* Adding a anchor link */ 
	firstItem.innerHTML = '<a href=\"http://example.org\">' + someContent + '</a>'; 
```			

Adding content via DOM Manipulation
```json
	var newEl = document.createElement('li');
	var newText = document.createTextNode('quinoa')
	newEl.appendChild(newText)
	var position = document.getElementsByTagName('ul')[0] // the first unorderlist we find
	position.appendChild(newEl)
```
To remove the element have the parent node **removeChild()**. You just need to get a reference of the parent and the child.
```json
	var removeEl = document.getElementByTagName('li')[3] // the element to remove
	var parent = removeEl.parent
	prent.removeChild(removeEl)
```

You want to use DOM manipulation as much as possible, but it is a bit slower than using innerHTML.

**Use only textContent or innerText **  


### Cross Site Scripting Attacks
There are several security issues that come along when you choose to update content with innerHTML and even some methods in JQuery. Such as getting information from form data. 

**Defending Against Scripting**
1. Only let visitors input the kind of characters they need when they supply information. Do not allow untrusted users to submit HTML markup or Javascript
	* Users don't need angled brackets, ampersands, or parenthesis in emails...
2. Double Check validation on the server before displaying user content / storing in database. This is important because users can bypass validation by turning javascript off
3. The database may safely contain markup and script from your content management system. 
4. As data leaves the db, all potentially dangerous characters should be escaped
5. Make sure that you are only inserting content generated by users into certain parts of template files
6. DO NOT create DOM fragments containing HTML from untrusted sources. It should only be added as text once it has been escaped

* You should only add content from untrusted sources as text and display them in the viewport. Dont place it in these
	* Script tags
	* HTML comments
	* Tag names
	* Attributes 
	* CSS values

* In the server side before you display any information. Always secape characters so that they are not executed as code. 
* If you have links containing user input, use the Javascript **encodeURIComponent()** method to encode the user input. It encodes the important characters 

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
* There are **getters and setters** for attribute elements. Think of them like get/set in Swift
*  
```
	docment.querySelector("a").getAttribute("href"); 
	document.querySelector("a")setAttribute("href", "www.bing.google");
```
