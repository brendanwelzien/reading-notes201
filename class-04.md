# Chapter 4 HTML 74-93
**LINKS**
- links are created using the < a > element with a < / a > closing tag

```html
<a href="URL">textuserclickson</a>
```

**Linking to other pages on same site**
- you do not need to specify domain in URL, it would just be the name of the file

*Email Links*
- use the <a href="mailto: @name.org"></a>

*Linking to part of the page*
```html
id=#"hello"
<a href="#top"></a>

```
# Chapter 15 Layout 358-404

**Key Concepts**
- block-level elements : h1, p, ul, li
- inline elements: img, b, i,

**Position Schemes**
- use *position* property
    - normal flow: default behavior of webpage
    - relative positioning: shifts elements in a direction *position:relative*
    - absolute positioning: positions in relation to its containing element *position:absolute*
    - *position:fixed*, makes elements stay in the same place when scrolling
- use *box-offset* to tell browser how far from top bootom left or right it should be placed
    - z-index allows for change in overlapping boxes and can stack/bring to the front/bring to the back
**Normal Flow**
- syntax is position:static (default)

**Float** 
- the float property takes an element and places it far left or right of the containing element
- places boxes next to each other
    - clearing floats...
    ```bash
    <p class= "clear">
    (in css--> .clear {
        clear:left;
        }
    ```
**Working with screen sizes**

- take note of screen sizes, resolution, and page sizes

- fixed width layouts could come up ugly depending on size of browser window from user (pixels)

- liquid layout design syncs with how user increases or decreases size of their browser window (%)

- fixed width layout
    - for body element, recommended to fix width of page at 960 pixels and to set margins at auto

- liquid layout
    - rule for body is set width to 90% and margins on auto
- it may be helpful to use the 960.gs grid

# Javscript
## Chapter 3 86-99

- functions consist of statements that have been grouped together which perform a task. 
    - a method is the same, but they are created inside of/ and are apart of an object
- objects are made up of properties and methods
- built-in objects are a toolkit for creating interactive web pages

**FUNCTIONS**
- they let you group a series of statements together to perform a task
    - helpful for when you want to use the set of tasks when a certain action is met
    - parameters are the information needed to achieve the task
    - you have to call the function out at the end for it to run

```bash
functionkeyword functionname() {
    document.write('Hello!');
}
```
- declaring a function uses the the function keyword which is function keyword, the function name, and the code block
- calling a function you can use functionname()
- functions may need info... giving it parameters to perform its task



function askUserForName(){
    var userName = prompt("Please enter your name: ");
    alert("Hello"+ userName);
    return userName;
}
var userName = askUserForName ();

**Function Declaration**
- creates a function that you can call later in your code. You have to give it a name, so these are known as named functions

**Function Expression**
- used in an expression and may be nameless



## Pair Programming
- pair programming is the practice of two developers sharing a workstation to tackle coding tasks together.
- involves two roles: Driver and Navigator
    - driver is typing and only one whose hands are on the keyboard (mechanics)
        - includes text editor, switching files, version control, and writing code
    - navigator thinks about big picture, algorithmic thinking, scans for typos
- fundamental skills to learning the language are...
1. Listening
2. Speaking
3. Reading
4. Writing

*The advantages*
- pair programming takes longer, but identifies a higher rate of mistakes
- reaches solutions faster
- working together allows for students to learn different approaches and may be inspired to absorb such approaches
- social skills improve... You are working with someone else and communicating constantly together
- for job interviews, each person can practice prep exercises, whiteboard interviews, etc.
- after this, these people are more prepared for the work environment, paired programming is a commonly seen setting professionally, so practicing this through Code Fellows will help indefinitely.


# Lecture Notes
```js

// a for loop that can print numbers 1 through 10, 3 parts
for (var i = 1; i < 11; i++){
    console.log(i);
}
// while loop, same process just different structure
var i = 1;
while (i < 11){
    console.log(i);
    i++;
}
// storing in an array
var numbers = [1, 2, 3, 4, 5]

// retrieving using a for loop for numbers 2 and 4
for ( var = 0; i < 6; +=2){
    console.log(i);
}
or
for ( var i = 0; i <=numbers.length - 1; i++){
    console.log(numbers[i]); // this is so the last number will not be undefined, so we never go out of bounds
}

```
## CSS Review
- box model
    - margin : most outside layer of content: pushing away from other elements
    - border : between padding and margin
    - padding: surrounds outside of element, space within element

- Position: how an element positions itself amongst other elements
    - static: default normal positioning based on margin, border, padding, height, width, etc.
    - relative: allows us to position an element relative to its normal position
        - move away from other elements relative to its position, you can move a block around other elements
        display:inline-block makes it aligned from left to right
    - absolute: use for when you want something to move freely, may overlap with other elements
    - fixed: remove me as much as possible and position myself within the browser viewport,

- Display: How content will display itself relative to its parent
    - block: display my content as a giant block that takes up as much room as possible
    - <div class="block"></div> 
        - .block {
            display: block; // you can do inline as well
        }
    - inline: take only space as the internal content needs
    - inline-block: allows me to do height and width while also appear in same horizontal plane

## JS Functions

- what is a function?
    - a block of code that can be run at a certain time
    - reuse the same operations in multiple places

- arguments and parameters
    - if we have values that need to be referenced within function code block, we can pass an argument into our function
        - argument is a value that exists outside of the function signature
        - a parameter is a variable that defines a reference for an argument inside
```js
function nameoffunction(){
 console.log('hello'); // this is where code is executed
}
namoffunction(); // this is where you invoke/call for function
```
```js
function printWithArgs(param){
console.log('hello' + param);
}
printwithArgs('Brendan');
// hello Brendan
```

- if we want our function to pass a value into a different context ( do something outside function definition), we need to return a value
```js
function sum(num1, num2){
    return num1 + num2;
}
console.log(sum(1, 2)); = 3
var number = sum(2,3);
number
 // returns 5

```
- returning multiple values

```js
function multiplevalues(string, num){
    return [string, num];
}
var values = multiplevalues('hello', 4);

console.log(values) // ['hello', 4];

```
- anonymous functions: a function that is defined but lack a name

```js
var sum = function (num1, num2) {
    return num1 + num2;
}
sum(2, 4);
// this has no function name, comes in handy for callbacks (func passed as a value, to be executed later)
```

- scope: run time context for variables and values

[<=Back](README.md)