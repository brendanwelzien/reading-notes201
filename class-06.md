## Understanding The Problem Domain Article
*Some commonly seen problems*
    - learning a new technology
    - naming things
    - tseting your code
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
The DOcument Object Model specifies how browsers should create a model of an HTML page and how JS can access and update the contents of a web page while it is in the browser window.
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




[<=Back](README.md)