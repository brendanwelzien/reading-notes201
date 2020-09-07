## Understanding The Problem Domain Article
*Some commonly seen problems*
    - learning a new technology
    - naming things
    - setting your code
    - debugging
    - fixing bugs
    - making software maintainable
- by creating a familiar problem domain, it is easier to teach and learn.
    - imagine putting a jigsaw puzzle together that has no picture on it
        - to make things easier you need **create a picture with all the right components**
- Programming becomes easy *once you understand the problem domain!*
    1. before you even start to code, understand the problem and what it is asking... It is difficult to solve a problem before you know the question
    2. Try to make the problem domain easier / get better at understanding the problem domain

# Javascript 

## Chapter 3 Object Literals (pgs 100-105)
- what is an object?
    - objects group together a set of variables and functions to create a model of something you would recognize
    - if a variable is part of an object, it is called a **property**
    - if a function is part of an object, it is known as a **method**
    - properties and methods have a name and value, in an object this is called a **key**, ex. --> rooms = key, number = value
- Creating an object
    - the object is the curly braces and their contents, the object is stored in a variable called *hotel*, you would refer to it as the *hotel object*
```js
var hotel = {
name: 'Brendan',
rooms: 40,
booked: 25,

checkAvailability: function(){
    return this.rooms - this.booked;
    }
};
```
- you separate each key from its value with a colon
- you separate each property and method with a comma, but not after the last value

- *Accessing an object*
    - you access using dot notation for properties or mthods, you can also access properties using square brackets
```js
var hotelName = hotel.name;
or
var hotelName = hotel['name'];

```



## Chapter 5 Document Object Model (pgs 183-242)
The Document Object Model specifies how browsers should create a model of an HTML page and how JS can access and update the contents of a web page while it is in the browser window.
    - it is a separate set of rules and covers...
1. making a model of the HTML page
    - the DOM uses a DOM tree to model the page
2. accessing and changing the HTML page
    - Application Programming Interface, or API, lets humans interact with programs - tells the browser what to update and show to the user

- The DOM tree is the model of a web page
    - consists of four main types of nodes

    1. the document node
    - when you access any element, attribute, or text node, you navigate via document node
    2. element node
    3. attribute node
    4. text node

**Accessing and Updating the DOM Tree**
1. Locate the node that represents the element you want to work with.
2. Use its text content, child elements, and attributes

- Step 1: Accessing the elements
- individual element:
`getElementbyID()`- uses value of element's id attribute
`querySelector` - uses CSS selector, returns first matching element

- mutliple elements:
`getElementsByClassName()`- selects elements that have specific value for class attribute
`getElementsByTagName()` - selects elements that have specified tag name
`querySelectorAll()` - uses CSS selector to select all matching elements

- traversing between element nodes:
`parentNode` - selects parent of current element node (which will return just one element)
`previousSibling/nextSibling` - selects previous or next sibling from DOM tree
`firstChild/lastChild` - selects first or last child of current element

- Step 2: Work with those elements
- access/update text nodes: 
    - select the `<li>` element
    - use the firstChild property to get the text node
    - use the text node's only property (nodeValue) to get text from the element
- work with html content:
    - `innerHTML` is a property that allows access to child elements and text content
    - `textContent` is just for text content
    - `createElement()`
    - `createTextNode()`
    - `appendChild()/removeChild()`
- access or update attribute values:
    - use className / id
    `hasAttribute(), getAttribute(), setAttribute(), removeAttribute(),`

*Caching Dom Queries*
- methods that find elements in the DOM tree are called 'DOM queries', when you need to work with an element more than once, you should use a variable to store the result of this query
    - `getElementByID('one');`
    - store by ` var itemOne= getElementById('one');`
- if a method can return more than one node, it will always return a **NodeList**, which is a **collection** of nodes, you then need to select the element you want using an index number

*Methods that return a single element node* use `document.themethod` to retrieve
- `getElementByID('id')`
- `querySelector('css selector')`

*Methods that return one or more elements( as a nodelist)*
- `getElementsByClassName('class')`
- `getElementsByTagName('tagName')`, li for example
- `querySelectorAll('css selector')`

- live and static nodelists
    - length property tells you how many items are in nodelist
    - the item() returns a node #, much like using [index number]


**Selecting an element from a nodelist**
- the `item()` method
*example from Duckett*
```js
var elements = document.getElementsByClassName('hot') if (elements.length>= 1) {
var firstltem = elements.item(O); 
}
```
- the array syntax (preferred method)
*example from Duckett*
```js
var elements = document.getElementsByClassName('hot');
if (elements.length>= 1) {
    var firstItem = elements[0];
}
```

*Selecting elements using class attributes*
- example from Duckett
```js
var elements = document.getElementsByClassName('hot'); // Find hot items
if (elements.length> 2) { var el =elements[2];
el.className = 'cool';
```
*Selecting elements by tag name*
```js
var elements = document.getElementsByTagName('li'); // find <li> elements
if (elements.length>0){ // if one or more are found
var typesofmeat = elements[0]; // select first one using array
typesofmeat.className = 'beef'; // change value of first class attribute
}
```
*Selecting elements using CSS selectors*
- `querySelector()` returns first element node that matches the selector
- `querySelectorAll()` returns a nodelist of all the matches
- example from Duckett
```js
// querySelector() only returns the first match 
var el = document.querySelector('li .hot'};
el.className = 'cool';
// querySelectorAll returns a Nodelist
// The second matching element (the third list item) is selected and changed 
var els = document.querySelectorAll('li .hot') ;
els[1].className = ' cool' ;
```

*Repeating actions for an entire nodelist*
- you can loop through each node in collection and apply the same statements to each using a *for* loop
```js
var hotItems = document.querySelectorAll('li.hot');
for (var i = 0, i < hotItems.length; i++){
    hotItems[i].className = 'cool';
}
```
- this involves finding out how many items are in the nodelist, then settings a counter to loop through them, one-by-one!

*Traversing the Dom*
- `parentNode` finds the element node for the containing element (ul > li)
- `previousSibling/nextSibling` - finds the previous or next sibling of a node
- `firstChild/lastChild` finding the first li in an ul

- there are whitespace nodes that lay between element nodes
    - people use JQuery to address this issue

```html
(white space is eliminated to show properties)
<ul><li id="one" class="hot"><em>fresh</em> figs</li><li class="hot">pine nuts</li><li id="three" class="hot">honey</ li><li id="four">balsamic vinegar</li></ul>

```
```js
// select the starting point and find its siblings
var startitem = document.getElementById('two');
var previtem = startitem.previousSibling;
var nextitem = startItem.nextSibling;

// change the values of the siblings' class attributes
previtem.ClassName = 'complete';
nextItem.ClassName = 'cool';
```
*How to get and update element content*
- once you have navigated from an element to its text node, use `nodeValue` to access

innerHTML - Gets/sets text & markup
textContent - Gets/sets text only
innerText - gets/sets text only

```js
document.getElementByID('one').firstChild.nextSibling.nodeValue;
```
```html
1. The <li> element node is selected using the getEl ementByid () method. 
2. The first child of <li> is the <em> element.
3. The text node is the next sibling of that <em> element.
4. You have the text node and can access its contents using nodeValue.
```

*Accessing and changing a text node*
```js
var itemTwo = document.getElementById('two'); // get second list item
var elText = itemTwo.firstChild.nodeValue; // get its text content
elText = elText.replace('pine nuts', 'kale'); // change pine nuts to kale
itemTwo.firstChild.nodeValue = elText; // update the list item
```
- `textContent` allows you to update text that is in containing element and its children

*Update text and markup*
```js
// store the first list item in a variable
var firstItem = document.getElementByID('one');

// get the content of the first list item
var itemContent = firstItem.innerHTML;

// update the content of the first list item so it is a link
firstItem.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>';
```
**Adding elements using DOM manipulation**
1. create the element `createElement()`
    - this element node is stored in a variable
2. give it content `createTextNode()`
    - the node is stored in a variable, it can be added to the element node using the `appendChild()` method
3. add it to the DOM
    - `appendChild()`, now that you have your element you can add it to the DOM tree using this method. It allows you to specify which element you want this node added to, as a child of it.
**Adding an element to the DOM Tree**
```js
// Create a newelement and store it in a variable. 
var newEl document.createElement('li');
// Create a text node and store it in a variable. 
var newText document.createTextNode('quinoa');
// Attach the new text node to the new element. 
newEl .appendChild(newText);
// Find the position where the new element should be added. 
var position = document.getElementsByTagName('ul')[O];
// Insert the newelement into its position.
 position . appendChild(newEl);
```

**Removing Elements using DOM Manipulation**
1. store the element to be removed in a variable
2. store the parent of that element in a variable
3. remove the element from its containing element using `removeChild()`

```js
var removeEl = document.getElementByTagName('li')[3]; // the element to remove
var containerEl = removeEl.parentNode; // its containing element
containerEl.removeChild(removeEl); // removes the element
```

- very useful in removing element(s)
[<=Back](README.md)