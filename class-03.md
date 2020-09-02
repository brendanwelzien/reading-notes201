# HTML

## Chapter 3 lists pgs 62-73
- < ol > is used for ordered lists with numbers
- < li > is the list item for each individual one and needs a closing tag
- < ul > is used for unordered lists (no numbers)

- definition lists
    - < dl > is consisted of terms and definitons
    - < dt > is used to contain the term being defined
    - < dd > can be used for containing 2+ def. for same term
- you can also nest lists by throwing another < li > inside another one

## Chapter 13 boxes 300-329
**BOXES**
- width and height
    - specify with *pixels, % or ems*
    - you can limit using the min- and max- property
    - ex. min-width:40px; max-width:60px;
    - the same applies for **height** as well
- overflow: what is it?
    - this property tells browser what to do when content in box is larger
    - values: hidden and scroll
        - *hidden* just hides any extra content that does not fit in the box
        - *scroll* adds a scrollbar to the box so you can see missing content
            ex. p {overflow:hidden;}
- *Border | Margin | Padding |*
    - every box has these three properties that can be adjusted to control the appearance
    - padding can give white space in between items on page
    - the border-width property can be quantified or can be used by *thick, medium, or thin*
    - you can change style through *border-style* giving several options
    - the *border-color* can be changed as well and can distinctly change each side
    - these values also apply to margin and padding, minus the color
- to align text you can use *text-align*

**Changing Inline/Block**

- the *display* property can turn an inline element into a block level element, vice-versa
- you can also make boxes and then hide them using *visibility* then --> *hidden or visible*
- the *box-shadow* property is good for aesthetics!
- you can also round corners of the boxes using *border-radius*

# Javascript 

## Chapter 2 Review pgs 70-73
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

## Chapter 4 Decisions and Loops pgs 162-182
- the **if...else** statement checks the condition, if it is true the first code block initiates, if it is false the second code block runs
```bash
if (score>=75){
    congratulate();
} else {    
    encourage();
}
```
- you can also set variables to be >= and can run code based off its condition

- the **switch** statement starts with the switch value, and each case runs for possible values until it matches or until there is a break;
    - you do not need to provide an else option
    - the break statement stops the code
    - there is a default option ran if the rest of code does not match
```bash
example from book
switch (level) {
    case 'One':
    title = 'level 1';
    break;

    case 'Two':
    title = 'Level 2';
    break;
    
    default:
    title = 'Test';
    break;
}
```
**Truthy and Falsy Values**
- *falsy* values are treated as if they are false, can be treated as the number 0
- *truthy* values are treated as if they are true, can be treated as the number 1
- important for when deducing facts between operands of == and ===

```js
if (some condition) {
    //execute/do these statements
} /* if we need an inverse operation */ else {
    // execute/do some other statements
}

// we can also use else if

if (true) {
    console.log(true);
} else if (false){
    console.log(null);
}

//conditional logic that can only use one value, but has ,any different conditions

//when these catch, all other statements will run unless you add a 'break'
var user = 'Jacob';
switch(user)
    {case'Jacob':
console.log('Jacob is the user');
break;
    case 'Chance':
console.log('Oh, it is Chance');
}

- logical operators

if (true && false) {

} else {
    console.log('Our statement is falsey');
}

if (true || false) {
    console.log('Our statement is truthy');
} else {

}

// logical negation

if (!false) {
    console.log('we flipped our boolean');
}
if (true != false) {
    console.log('reverses meaning of boolean')
}
```

```js
- short circuit value:

var string = false && false
// JS evaluates left to right, the first operand must be true or it will short-circuit and become false

```

**LOOPS**

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
    - the variable is only created the first time when the loop runs, may be declard before the condition
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

# Lecture Notes

## Javascript Arrays

- What is an array?
    - a bucket of other data types
    - typically, we like to store similar things
- How can we access the data in the array?
    - uses an index 
    - an index is an item within the array (numerical value and correlates to position in the array)
```js

var string1 = 'my string';
var string2= 'another string';

// an empty array
var myArray= [];

var myArray= [string1, string2];
myArray.length; // let's us know the length of index
console.log(myArray)

// ['my string','another string'];

// accessing the first position in the array;
myArray[0];

// Move one memory unit position to get to 2nd item in array;
myArray[1];

// if we want to add to the array, what do we do?
myArray[myArray.length]= '';
// since there is a position 0 for index, there is a space = to the amount of array items, so you can use this to add.. 3 items would leave position #3 open because the positions would be 0, 1, and 2-- this allows us to add item 4

myArray.push('');
// this also adds something to an array


// this removes the last item from an array
myArray.pop();

```
## Running Code Multiple Loops

- What is a loop?
- running a specified code block, as long as a condition remains true
- *for* loops take 3 specific statements
    - initialization of something to check within the loop
    - comparison (condition involving our initialized thing)
    - operation to perform on our initialized thing

```js
// we start with a for keyword signature
for (var i= 3; i > 0; i = i - 1;) {
console.log(i); //shows 3, 2, 1,
}

```
- var names = ['apple', 'beet', 'cherry'];
```js
for (var i = names.length; i > 0, i = i -1){
    console.log(names[i - 1]);
}

for (var = 0; i <= 1;i = i + 1 ){

}

```
- *while* loop
    - functions just like a conditional statement, but repeats operations until statement is false

- truthy values and falsey values
    - truthy: true / 'string' / [] / {} / 1 (any numb above zero)
    - falsey: false / '' / 0 / undefined / null /
```js
var bool = [3, 2, 1];

while(bool.length) {
    console.log(bool.pop()); // this will remove items off the array and you log it
}
// this code will always run at least once
names = [];
do {
console.log('this should execute at least once');
} while (names.length);
```

## CSS Box Model
- understanding the layout properties of elements in a browser
- all elements in the browser are boxes
    - each box can be provided values for 3 discrete properties (from most outside layer to inside)
    - Margin
        - refers to any space between the border and any other element surrounding our box
    - Border
        - by default, a thin line that sits between our margin and padding
    - Padding
        - any space separating the content from its border, this makes our box bigger
    - the content



```js
//this is whatever the user's answer is
var question1 = prompt('Name a bird?');
var answers1= ['eagle', 'raven', 'robin', 'gold finch', 'crow'];

// question 1 === 'Raven';

 if (question1.toLowerCase() === answers1[1]) {
     alert('Correct!');
 }
// this is good for one problem, but we wanna cover all answers by using a loop
//answers.length represents all the properties in array and there is 5 so we minus 1 since index goes from 0 - 4 only.
for (var i = 0; i < answers1.length - 1; i ++) {
if (question1.toLowerCase() === answers[i]) {
    alert('Correct!');
    } 
}
if ()
//we have to inform incorrect outside of the for loop






















 [<= Back](README.md)