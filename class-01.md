# ***HTML***
## Introduction (pp.2-11)
*How People Access the Web*
- people access websites using a software known as a web browser
- there are web servers which host the website itself
- there are devices that screen read the website for the user
## HTML Chapter 1: “Structure” (pp.12-39)
* To start a webpage, go to *textedit* and begin

Term | Usage
---- | ----------
<body> </body> | everything in this element is shown inside main browser
<head> </head> | before body element, contains about and <title>
<title> </title> | included with <head>

* structuring the website
- you can use the  h1 - h6 commands to indicate the importance of the words such as into headings (this describes the webpage)


## HTML Chapter 8: “Extra Markup” (p.176-199)
* due to several versions of html, each web page should start with (!DOCTYPE html>) to tell the browser which version to use

* if you want to add a comment to code it is <!-- comment here -->
* ID attributes is allows for style and no two elements can have the same attribute
* class attribute is used to identify several elements
* block elements start a new line including h1, p, ul, li
* inline elements for keep words organized? a, b, em, img
* grouping text and elements in a block is div.

```bash
<div id="header">
<img src="images/logo.gif" alt="Anish Kapoor" /> <ul>
<li><a href="index.html">Home</a></li>
<li><a href="biography.html">Biography</a></li> <li><a href="works.html">Works</a></li>
<li><a href="contact.html">Contact</a></li>
</ul>
</div><!-- end of header -->
```

* grouping text and elements inline is < span > (differentiates a text counterpart)
* iframe is a window in a page where you can see another page like for displaying maps

* meta displays information about your page

## HTML Chapter 17: “HTML5 Layout” (pp.428-451)
* most content is inside <div> element
* <header> main header
* <footer> for the bottom

example

```bash
<header>
<h1>Yoko's Kitchen</h1> 
<nav>
<ul>
<li><a href="" class="current">home</a></li> <li><a href="">classes</a></li>
<li><a href="">catering</a></li>
<li><a href="">about</a></li>
<li><a href="">contact</a></li>
</ul> 
</nav>
</header>
```

* the <nav> </nav> element is to contain the navigational blocks on the site

* the <article> </article> element acts as a container for sections of a page that can stand alone (if a page has several articles then one would separate them by using this element)

* <aside> </aside> element has two purposes whether it is inside *<article>* or not

    - when <aside> is inside an *<article>, it contains info related to article but not essential to overall meaning
    - when <aside> is not inside an *<article>, it is a container for content related to the page (contains links to other sections of the site, related posted, search box, etc.)

* <section> </section> groups related content together and each would have its own heading

```bash
<section class="popular-recipes">
<h2>Popular Recipes</h2>
<a href="">Yakitori (grilled chicken)</a>
<a href="">Tsukune (minced chicken patties)</a> <a href="">Okonomiyaki (savory pancakes)</a> <a href="">Mizutaki (chicken stew)</a>
</section>
<section class="contact-details">
<h2>Contact</h2> <p>Yoko's Kitchen<br />
27 Redchurch Street<br /> Shoreditch<br />
London E2 7DP</p>
</section>
```

* <hgroup> </hgroup> is to group together a set of one or more <h1> -- <h6> elements so they are one single heading

* <figure> or <figcaption> for images, videos, graphs, diagrams, etc in referencing them

* section elements by using <div>

```bash
<div class="wrapper"> 
<header>
<h1>Yoko's Kitchen</h1> 
<nav>
<!-- nav content here -->
 </nav>
</header>
<section class="courses">
<!-- section content here --> 
</section>
<aside>
<!-- aside content here --> 
</aside>
<footer>
<!-- footer content here --> 
</footer>
</div><!-- .wrapper -->
```

```bash
    <a>
```
* allows authors to place an element around a block level element that contains child elements



## HTML Chapter 18: “Process & Design” (pp.452-475)
* Every site should be designed for target audience, so consider the characteristics of this audience

- ex. education, marital status, occupation, 

* Now consider why people are visiting!
 - what are there key motivations and/or goals and what information would they need from the website?
 - they may visit often so constant updates may be required

**TERMS**

Term | Definition
---- | ----------
site map | diagram of the pages
card sorting | placing each piece of info on a paper then organizing into related groups


**Wireframes**
- a simple sketch of they key information needed for each page.
- may include logos, links, policies, conditions,
- all must be prioritized in a specific order into blocks and chunks for visual reference

**Visual Hierarchy**
*elements*
- size, color, style, consistency, headings

*grouping and similarity*
- proximity, closure, continuance, white space, color, borders

# ***Javascript***

## JS Introduction & Chapter 1: “The ABC of Programming” (pp.11-52)
***Pages 1-24***
* JS makes web pages more interactive
    * JS can be used to select / access any element, attribute, or text from an HTML
    * JS can be used to modify content to the page
    * JS can be used to program rules like a *recipe*
    * JS can allow for a reaction of events, something should run when an event has occurred

*refresh*
- HTML uses opening and closing tags and its content, some have no closing tag like < img >
- opening tags can have attributes <p class = >
- CSS  has a selector, property name and value to describe the contents of the webpage

**Concepts of Computer Programming**

### What is a script and how do I create one?
### How do computers fit in with the world?
### How do I write a script for a web page?

**What is a script and how do I create one?**
- a script is a series of instructions that a computer can followe to achieve a goal, like a recipe
- uses step-by-step instructions (the more specific the better)
- a browser may use different parts of script depending on how user interacts with webpage
- scripts can also run different sections of the code in response
*Writing a script*
    - you need to first state your goal and then list the tasks that need to be completed to achieve it
    - start with big picture, then break it down into smaller steps
1. define the goal
2. design the script
    - series of tasks in reaching the goal
3. Code each of the tasks!
*Designing a script: tasks*
- flowcharts may be helpful
- listing the steps then translating them into lines of code
- important to understand the vocabulary, syntax, programmatic approaches, and debugging
- thinking like a computer by running through the instructions and finding gaps

ex. from Duckett book
```bash
Customers can have a name added to the plaque; each letter costs $5. When a user enters a name, show the how much it will cost.

Next, break it into a series of tasks that have to be performed in order to achieve the goals:

1. The script is triggered when the button is clicked. 
2. It collects the name entered into the form field. 
3. It checks that the user has entered a value.
4. If the user has not entered anything, a message will appear telling them to enter a name.
5. If a name has been entered, calculate the cost ofthe sign by multiplying the number of letters by the cost per letter.
6. Show how much the plaque costs.
```
- flowcharts will be helpful if you use labels like generic steps, events, inoput or output, and decisions
***Pages 24-43***




***Pages 43-***
- html is content layer .html
- css is presentation layer .css
- javascript is behavior layer .js

*How to Use Objects and Methods*

- document.write('Good afternoon!');
- consists of an object, member operator, and method with parameters
- javascript runs where found in the html
    - < script > element causes JS to stop and check if it needs to do anything, it tells the browser to load the JS file

**Statements**

- a *script* is a series of instructions that a computer can follow, each step is a **statement**
- JS is *case-sensitive*
- a statement is individual instruction and each one should start on a new line and end with a ;
    - statements surrounded by curly braced are *code blocks*
    - these contain a statement and may be grouped together

- write **comments** to explain code
- multi line comments are pink, to comment = /* */
- single-line comments are gray, to comment = //
- javascript code is green

-a script will have to store information to do its job, use *variables* to do so

***Variables and how to declare them***

- var quantity;
    - var is the keyword and the quantity is the variable name
    - once assigned a variable, you can tell it information or assign value

    - var quantity;
    - quantity= 3;

**Data types**

- numeric data (no comma and there is decimals)
- string data (letters and other characters closed by single or double quotes)
- boolean data (ewither true or false or on and off)
    - miscelleaneous--> arrays, objects, undefined, and null
    -*escaping* is done by using a backwards slash \ before any quote mark appears within a string... It tells the interpreter that the character is part of the string not the end

**shorthands for creating variables**
1. variables declared then values are assigned in statement
```bash
var price =5;
var quantity =14;
var total =price*quantity;
```

2. three variables are declared on the same line, then values are assigned to each

```bash
 var price, quantity, total; 
price =5;
quantity= 14;
total =price * quantity;
```

3. two variables are declared and assigned values on the same line. Then one is declared and assigned a value on the next line

```bash
var price =5, quantity =14;
var total = price * quantity;
```

***Changing the value of a variable***
- you do not need to use *var* to assign a new value
    - just use the variable name, the = sign, and the new value

    OLD--> instock= true;
    NEW --> instock=false;

## Important Rules for Naming Variables

1. the name must start with a letter, $, or _, and it *cannot start with a number*
2. the name *can contain* these afterwords, but you must not use a - or . in a variable name.
3. you cannot use **keywords or reserved** words.
4. all variables are case sensitive
5. use a name that describes the kind of info that the variable stores
to add  js file into html  --><script src="app.js"></script>


[<= Back](README.md)