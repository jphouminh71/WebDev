# Html / CSS (2022)
--
<em> notes adoted from youtube video:  https://www.youtube.com/watch?v=G3e-cpL7ofc&ab_channel=SuperSimpleDev</em>
<br>

#### What is HTML? 
HTML is a langauge that we use to develop front end applications to create beutiful websites. 

**HtmlElement**: A term we use that signifies anything that we can add to the website. Every element must contain a opening tag and a closing tag.  Extra spaces are ignored in HTML. 

#### What is CSS? 

CSS stands for cascading style sheets and it allow us to style our html elements. Usually when you need to find a specific way to style something you just end up looking it up. 

**Box Model**

-  **Margin**: Controls the space around the border of the element
-  **Padding**: Controls the spacing of all the elements inside of an element. Prefer using padding as opposed  to height and width as it adjusts dynamically. 
- **Border**: surrounding outline of the item 

![alt text](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)

In summary, the box models says that and element has controls for controlling the amount of space of the containing items inside of the component (padding) and control for controlloing how much space an element needs to have around it (margin) and every element has a border that can be specified. 
<br><br>

## Display Property
---
- The ```display``` properties specfies the display behavior (rendering box) of an element. Different html elements have different default display properties 

**Common display Properties**
- ```inline```: elements are treated like a ```<span>``` and the size will be determined by the content natural size. 
- ```inline-block```: elements are in a inline-level block container. The elements themselves are treated as ```inline``` elements but you can specify the height and width of the items 
- ```block```: Elements will start on a new line and take up the entire width of page.
- ```flex```: Displays an element as a block-level flex container that child elements can take advantage. 
<br>
<br>

## Grid and Flexbox 
--- 

**Grid**:  The CSS Grid Layout offers a more rigid layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning. 
<br>

**Flexbox**: The flexbox module aims at providing a more efficient way to layou, align and distribute space among items in a container, even when their size is unknown. It is more 'flexible' than standard grids. 

*When to use which?*
    - Use flexbox when we want a layouts are dependent on the specific content