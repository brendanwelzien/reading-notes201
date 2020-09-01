# HTML

## Chapter 2 (pgs 40-61)
- When creating a web page, you add tags known as *markup* which provide extra meaning
    - structural markup = describes headings and paragraphs
    - semantic markup = provides extra emphasis/information
**Headings**
- inquires up to six levels where h1 should be used only once
**Paragraphs**
- surrounds words in a block of text using p and /p
**Bold and Italic**
- b and i are forms of describings headings and paragraphs
**Superscript and Subscript**
- sup is superscript which is mainly used for exponents
- sub is used often for things like chemical formulas
**Line breaks and Horizontal rules**
- [br /] is a way to add a break in a line such as when telling a story (indentation)
- [hr /] is a way to draw a horizontal line between sections of text

**Semantic markup**
- strong indicates that content has strong importance like bold
- em emphasizes a certain part of the text in italics
- blockquote is used for longer quotes where q is used for shorter quotes
- abbr is used for abbreviations for longer words
- cite is used for referencing and dfn for when defining a topic for the first time
- author details can be used in the form of address
    **Changes to Content**
    - ins shows content that has been inserted while del shows text that has been deleted
    - s indicates something that is not accurate anymore like a price reduction when something goes on sale

## Chapter 10 (pgs 226-245)
- "The key to understanding how CSS works is to imagine that there is an invisible box around every HTML element"

- some characteristics to note...
    - box width and height, borders and color, background color, positions, size, font type
- CSS works by using two parts **selector and declaration**
    - p {font-family: Arial;}
    - you can add more properties: values; like this

- the < link > element is used to tell the browser where to find the file and does not need a closing tag
    - <link href = "" type="text/css" rel=/>

- *< style >* usually sits inside the head element and uses type = text / css

CSS Selectors
selector | meaning | example
-------- | ------- | -------
universal | applies all elements in document | * {}
type | matches element names | h1, h2, h3, {}
class | matches the specified class attribute | p.note {} (only p elements)
ID | matches those with # | #introduction{}
child | matches element that is child of another | li>a {}

- CSS rules indicate that more specific rules will take precedence over simpler ones
    - meaning h1 is more specific than *
    - you can add !important after a property value to indicate that it is more important
    - use external style sheets as you do not have to repeat code as often and when you need to edit you can go directly onto the sheet rather than changing the code for every page

# Javascript

## Chapter 2 (pgs 53-84)
- a script is a series of instructions that the computer follows and each step is signaled as a *statement*
- write comments to explain what the code does which you can do by /* */ for multi-line and // for single line

**Variables**
- you need to tell the computer every single step and you want to label variables you will remember... Each one is meant to store information
*Declaring variables*
    - utilize var and its name .... var quantity; as an example
*Assigning variables values*
    - assign a value to the variable .. quantity = 3;
    - JS utilizes numeric data types, string data types, and boolean data types (FOR NOW)

***ARRAYS***
- It is a special type of variable. It stores a *list* of values
- use when you are working with a list / set of values that are related to each other
- helpful for when you do not know how many items you have as you do not need to specify how many values it will hold
    -an array used storing items on a shopping list, each item is separated by a comma

*Creating an ARRAY*
- values are assigned inside [] and each value separated by a comma, they do not have to be the same data type either
    ```bash
    var colors;
    colors = ['white', 'black', 'red'];
    This is an array literal as youre labeling a variable as the array
    ```
- an *array constructor* uses Array(); then specifies the values within the () not []
*Values in ARRAYS*
- each item in an array is given a number called an *index* which is used to acess specific items... And it starts at 0 then 1 then 2 and so on
    - in the scenario above white would be 0 and black would be 1
- to access an item you need to...
    - specify the array name with its index number in [] 
    ```bash
    var itemThree;
    itemThree = colors[2];
    ```
        - in this case we labeled the 3rd index item as itemThree and took it from the variable colors alongside its index number
- each array has a property called *length* which holds the number of items in the array
    - for ex...
    ```bash
    var numColors;
    numColors = colors.length;
    ```
- an *expression* evaluates results in a single value
1. Expressions that assign a value to a variable
    var color = brown
2. expressions that use two+ values to return to a single value
    var area = 3 * 2
- *operators* allow single values to be made from one or more values
    - assignment operators (value to a variable), arithmetic operators (basic math), string operators (combining strings), comparison operators (comparing two values and return true or false), and logical operators (combine expressions and return true or false &&)
## Chapter 4 (pgs 145-162 up to switch statements)

## Comparison Operators: Evaluating Conditions:

* == is comparing two values to see if they are the same
* != is comparing to see if they are not the same
* === compares two values to check both data type and value are the same... '3'=== 3 returns false because they are not the same data type or value
* !== compares two values to check that both data type are not the same... '3'!== 3 returns true
* ( > ) checks if left is greater than right
* ( < ) checks if left is less than the right
* ( >= ) is greater than or equal to
* ( >= ) is less than or equal to

## Logical Operators:

- comparison operators usually return *single* values of *true* and *false*... **logical operators** allow you to compare results of more than one comparison operator

```bash
((4<2) && (2>=3))
```
- the && is the logical and operator
    - it checks to see whether both expressions on either side return true
    - if one of the expressions are *false* then it will return *false*

- || is the logical or operator

    - if either expression is true, then it will return *true*
    - if *both* are *false*, it will return *false*
- ! is the logical not operator
    - takes a single boolean value and inverts it
        - !(2 < 1) returns true
    - this reverses the expression
    - !true returns *false*
    - !false returns *true*

- logical expressions are read from left to right

## Loops
- loops check a *condition*, if it returns *true*, then the code block will run!
    - it will repeat until condition returns *false*
- **3 common types of loops**
1. **for**
    - for running a code a certain amount of times
2. **while**
    - if you do not know how many times the code should run, use the while loop
3. **do while**
    - the *do...while* loop is similar to while, but will run statements in curly braces at least once, even if the condition returns *false*

```bash
for (var i = 0; i <10; i++) {
    document.write(i);
}
```
- if the variable i is less than ten, the code inside the curly braces executes, then the counter is incremented

## Counter

- A **for** loop uses a counter as a condition which instructs the code to run a specific amount of times
(for the condition above)

- ***Initializaton***
    - creates a variable and set it to 0. This variable is commonly called i and acts as the counter
    - var i = 0;
    - the variable is only created the first time when the loop runs, may be declared before the condition
- ***Condition***
    - the loop should continue to run until the counter reaches a specified number
    - i <10 ;
    - the value is set to 0 and runs 10 times before stopping
    - you can also hold *rounds* for var rounds to how many go-arounds a loop may go
        - var rounds = 3;
            i < (rounds);
- ***Update***
    - every time the loops has run the statements in curly braces, it adds one to the counter
    - i++
    - one is added using (++) operator
    - read as 'take the variable i, and add one using the ++ operator"
    - you can use (--) to count downward as well

## Lecture Notes
### Fundamentals
- HTML, CSS, and JS are browser friendly
- a tag refers to name of element where element represents the whole block of which content is used by the element
    - h1 /h1 vs. h1 this is the content /h1
- HTML attributes
    - modify the contents of a tag
    - href and src are examples
- <script src=""> </script> is used for external files of data like JS or CSS
ex. of an ID / class use
-   use strigns to identify /group elements together
-   <h1 id="Bananas-H"> History of Bananas </h1>
    - IDs should only be applied to *one element*
    - Classes shold be used to group like elements together such as p or the h2's throughout the file
## CSS
-   we use selectors to apply styling specifications to our elements
- selectors can select elements using many different methods
- by tag name: p{} h1{}
- by id / class : 
    - id: #id-name {}
    -  class : .class-name{}
    - cs properties: all things we want to style elements with
        - syntax: property-name:propertyvalue;

- Using the style attribute
    - values still must follow syntax for CSS properties
    `<p style="color:blue;"> content </p>`

- link using a link element
    -  href attribute that points to location of css file
    - if link is pointing to css, we must specify that relation is a style sheet
    - `<link href="some-style.css" rel= "stylesheet"/>`
    - notice that the link tag is self closing!
    - this typically goes in the head element (meta data)



style.css

```css

/* selector */
h1{
/* properties */
color:blue;
background-color:tangerine;
}
#Bananas-H{

}
.item{

}
```

## Javascript
- types of data that JS can handle
1. string : sequence of natural language characters
    a. 'here is a string'
2. number: quantitative value represented by symbol
    a. 0 , 54, 12.14, 0.004, 1,234 is not a number
3. boolean: binary true vs false
    a. true
    b. false
4. null
5. undefined

- conditional logic
    - operations / js statements that will be executed upon a condition
    - run statement in a specified code block whether something is true or false (truthy / falsey)




[<= Back](README.md)