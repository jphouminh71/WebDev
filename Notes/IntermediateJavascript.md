## Events 
There are three steps involved in getting it to trigger some Javascript code. This is also known as **event** handling

1. Select the **element** node(s) you want the script to respond to
2. Indicate which **event** on the selected node(s) will trigger the response. This is also knowns as **binding** and event to an element
3. State the **code** you want to run when the event occurs. 


* **Event Listeners** 
	* These are the favored ways of handling events. These newer event listeners allow one event to trigger multiple functions. As a result, there are less likely to be conflicts between 
different scripts that run on the same page. 
```json
	/* general syntax */
	// the third parameter indicates how the events flow either bubbling or capturing
	element.addEventListener('event', functionName, [, Boolean]); 
	
	/* example */
	function checkUsername() {
		// code to check the length of username
	}
	var el = document.getElementById('username'); 
	el.addEventListener('blur', checkUsername, false);

	/* example with passing parameters */
		function checkUsername(minLength) {	
			if (elUsername.value.length < minLength) {
				console.log("not long enough")
			}
			return
		}
	var el = document.getElementById('username'); 
	el.addEventListener('blur', function() {
		checkUsername(5); 
	}, false); 
)
```

* There is a fallback for browsers that don't support **addEventListener()** you can use the **attachEvent()** which does the same job. Note,  when this is used you need to add the prefix 'on' to all events. 

```json
	if (el.addEventListener) {	
		/* add the event listener as usual */
	} else {
		el.attachEvent('onblur', function() {
			checkUsername(6);
		), false); 
	}
```

**The Event Object**
* When events occur, the **event** object tells you information about the event, and the element that it happened on. 
* Every-time an event fires, the event object contains helpful data about the event such as
	1. Which element the event happened on 
	2. which key was pressed for a keypress event
	3. what part of the viewport the user clicked for a 'click' event

* This object is passed automatically to any function that the the event handler. 

Some properties
* **target**: the target of the event (most specific element interacted with)
* **type**: the type of event that was fired 
* **cancelable**: whether the type of behavior can be canceled

```json
	function checkUsername(e, minLength) {
		var target = e.target; // get the target of the event
	}
	var el = document.getElementById('username');
	el.addEventListener('blur'function(e) {
		checkUsername(e,5)
	}, false); 
```

Some Methods
* preventDefault(): cancel default behavior of the event (if it can be canceled)
* stopPropagation() stops event from bubbling or capturing any further 



**Event Delegation** 
* Creating event listeners for all elements can slow down a page, but event flow allows you to listen for an event on a parent element. If you work with tables / cells, having to add an event listener for each element can decrease performance and consume memory. So what you can do in these situations is place event handlers on a containing element and use the event objects **target** property to find which of its children the event happened on. Now you are only responsible for handling one element.	
	* Adding new elements is a breeze and simplifies code 
	
```json
//html code
<ul id="shoppingList">
	<li class="complete"> <a href="itemDone.php?id=1"> <em>fresh</em> </a></li>
	<li class="complete"> <a href="itemDone.php?id=1"> <em>pine nuts</em> </a></li>
	<li class="complete"> <a href="itemDone.php?id=1"> <em>honey</em> </a></li>
	<li class="complete"> <a href="itemDone.php?id=1"> <em>vinegar</em> </a></li>
</ul>

// javascript code
func itemDone(e) {
	// remove the item from the list 
	var target, elParent, elGrandparent
	target = e.target;  // get the item that was clicked
	elParent = target.parentNode;  // get its list item 
	elGrandParent = traget.parentNode.parentNode // get its list
	elGrandParent.removeChild((elParent); // remove the item from the list 

	// prevent that link from taking you somewhere else
	e.preventDefault()
}

	 /* setting up the event listener */ 
	 /* remember that this works because the event bubbles up and we 
	 essentially capturing the event at the level of the list */ 
	var el = docoument.geEleemntById('shoppingList'); // get the shopping list 
	el.addEventListener('click', function(e) {
		itemDone(e)
	), false); 

```
 
### Mutations Events and Observers
Whenever elements are added to or removed from the DOM, its structure change. This change triggers a mutation event. 


## JQuery 
Package that provides a simple way to achive Javascript tasks quickly and consistenly, across all major browseres and without any fallback code needed. 
1. **Select Elements**: It simpler to access elements using JQuerys CSS-style selectors than it is using DOM queries. The selectors are also more powerful and flexible. 
2. **Perform Tasks**: JQuery's methods let you update the DOM tree, animate elements into and out of view, and loop through a set of elements, all in one line of code. 
3. **Handle Events**: includes methods that allow you you to attach event listeners to selected elements without having to provide fallback code for older browsers

**Key Differences From DOM**
* Its cross-browser, no need to write fallback code
* Methods affect all selected elements without needing to loop through each one
* There are a variety of functions available to make perform tasks and make animations. 


## Retrieval / Updating 

Need to make sure you add this source file in html file
```json
	<script> src="js/jquery-1.11.0.js"></script> 
```

Storing references to jquery objects
```json
	$listItems = $('li'); 
```
Chaining Jquery Methods
```json
	$('li[id!="one"]')
		.hide()
		.delay(500)
		.fadeIn(1400); 
```

Probably a good idea to always make sure the page is ready to work with via .ready()
```json
	$(document).ready(function() {
		// script goes here 
		// start animations, set focus
	});
```


**Getting Element Content**

.html() and .text() are the methods that retrieve and update contents of elements. 

How to retrieve elements
```json
	/* This retrives all descendants in this unordered list*/
	$('ul').html();

	/* This retrives the first list html item it finds */
	$('li').html(); 

	/* retrieves text in order of its descendants */
	$('ul').text(); // gives you all text in order of its li elements

	/* retrives text content in a single line for all matching selector */
	$('li').text(); // concatonates all li elements into single return
```

**Changing / Updating contents** 
```json
	/* Updating via JQuery in 3 ways */
	$(function() {
		$('li:contains('pine')').text('almonds'); 
		$('li.hot').html(function() {
			return '<em>' + $(this).text() + '</em>';  
		}); 
		$('li#one').remove(); 

	})
```

**Adding New Content**
```json
	$(function() {
		$('ul').before('<p class="notice"> Just Updated </p>); 
		$('li.hot').prepend('+ '); 
		var $newListItem = $('<li><em>Gluten-free</em></li>'); 
		$('li:last').after($newListItem); 
	}); 
```

**Getting and Setting Attribute Values**
```json
	$(function() {
		$("li#three").removeClass('hot'); 
		$('li.hot').addClass('favorite'); 
		$('ul').attr('id', 'group'); // sets attribute 'id' = 'group'
	}); 
```

**Getting / Setting CSS Rules**
```json
	$(function() {
		var backgroundColor = $('li').css('background-color'); 
		$('ul').append("<p>Color was: " + backgroundColor + "</p>")
		$("li").css({
			'background-color': HEXCOLOR-CODE,
			'border': '1[x solid #fff', 
			'color': "#000", 
			'font-family': 'Georgia',
			'padding-left': '+=75'
		}); 
	});
```

**Working with Each Element Selection** 

JQuery allows you to recreate functionality of a loop on a selection of elements, using the .each() method. You may want to use it when you want to get information from each element in the matched set or perform a series of actions on each of the elements.

**ex**
```json
	$('li').each(function() {
		var ids = this.id; 
		$(this).append('<em class="order"' + ids + '</em>');
	}); 
```
So use this when you want to perform multiple operations on elements. 


## Event Handling
The **.on()** method is used to handle all event functions. JQuery also handles cross browser support for all events too so you don't have to worry about that stuff. 
1. Use JQuery selector to get hold of element
2. Use .on() to indicate which event you want to respond to. This automatically adds the event listener for you to each element in the selection. 


**ex**
```json
	$('li').on('click focus', function() {
		/* adds a complete class to the element that selected it */
		$(this).addClass('complete')
	})
```

You can also have parameteried event handling where we can
1. Specify the subset of retrieved selectors
2. pass data onto the handler 

```json

	/* general syntax */
	.on(events[,selector],[,data],function(e)); 

	/* concrete example */ 
	$(function() {
		var listItem, itemStatus, eventStatus; 
		$('ul').on(
			'click mouseover',
			':not(#four)', 
			{status:'important}, 
			function(e) {	
				listItem = 'Item: '+ e.target.textContent + '<br />'; 
				itemStatus = 'Status: ' + e.data.status + '<br /';
				eventType = 'Event: ' + e.type; 
				$('#notes').html(listItem + itemStatus + eventType)
			}

	}); 

```


## Effects

When you start using Jquery, the effects methods can help you website look more advanced. 

**Basic Methods**
- .show() 
- hide()
- .toggle()

**Fading Effects**
- .fadeIn()
- .fadeOut()
- .fadeTo()
- .fadeToggle()

**Sliding Effects**
- .slideUp()
- .slideDown()
- .slideToggle()

**Custom Effects**
- .delay().   delays the execution of subsequent items in queue
- .stop()     stops current animation
- .animate()    creates custom animation. 







**Random Tips**
* When you return a JQuery object, there is **length** property that returns you all the elements that matched the query. 
* There exists methods that are designed to work with Ajax (lets you refresh certain parts of the screen rather than an entire page)



