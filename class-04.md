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














[<=Back](README.md)