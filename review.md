## CSS

```css
li:first-child{
    background-color: yellow;
}
(this isolates the first child of the li element)
```

- parseInt?
    - bult in javascript function
    - takes an argument and tries to pull out an integer
    - helpful for converting a string into a number
- type coercion?
    - js makes many assumptions about types, we can use parstInt to coerce our strings to either be
        - integers => 1, 2, 1000, ...
        - NaN (Not a number)

- terminal functionality
    - a place to run programs outside of a GUI (graphical user interface)
    - git commands
    - all things that a program needs to know should come from what you typed
```bash
`mkdir - some path`
```
- big picture for our guessing game
    - yes or no questions
        - flow control using if statements
    - guessing a number
        - with a certain number of attempts using flow control logic
            - whether an input is equal to a number
            - quantitative comparisons
        - multiple correct answer question
            - flow control that dictates whether user has any attempts left
            - flow control for comparing the users' answer with a bucket of correct answers
## Images
- Html has a special tag for images
- '<img>'
```html
<img src="url.imageextension(jpg,png,gif)">
background-image: url('');
background-repeat: no-repeat;
background-size: cover;
'this makes a photo a background for the website'
```

## Links

- a way to load content / views / markup
- local HTML pages within our project directory or external html pages

```html
<a href="aboutme.html">About Me
```

## Git Branches

- branches allow us to save any work in a separate place from the master branch
    - a branch is referred to as a 'feature branch'

- **to create a branch,we just use *`'git checkout -b 'Branch Name'`***
- **to switch branches, use git checkout *`'Branch Name'`***
- **to list all available branches use *`'git branch'`***
- when we want to push, use ACP, but for push we need to modify origin
    - `git push origin <branch-name>`
    - merging feature branch code with master branch is done by viewing the branch, then make a pull request that goes from feature to master!,
    - it is important to make sure you create the branch, push it back up, then pull it back to master

# Class 06: The Document Object Model

## Objects in JS

- a new data,
- a more complex variable, which can include more than one data type

```js
var name= 'Brendan';
var age = 22;
var title= 'student';

var Jacob = [name, age, title];
// valid way of storing information
Jacob[0]; 

// an object lets us define 'properties' by name on one thing

Jacob = {
    name:'Brendan',
    age: 22,
    title: 'student',
}
console.log(Brendan) // {name: , age: , title: }
console.log(Brendan.age) // gives 22

```
- benefit: we get to describe our data more
    - our properties should have some meaning 
    - no longer need to perform a loop to validate and lookup information
    - a simplification of Object Oriented Programming
        - this is a requirement for using many other programming languages

```js
//this is a lookup from an object
if (Brendan.age > 80) {
    console.log('That is young');
}


// this takes more work
for(...) {
    if...
    console.log(..)
}
```
## Contextual 'this'
- 'this' is a keyword in js that references the current object that our block of code points to

```js
Brendan= {
    name: 'Brendan',
    age: 22,
    title: this.name + 'student',
}
console.log(this);
```
## methods
- a function that lives on an object definition

```js
var Brendan = {
    name: 'Brendan', // properties like name is referrred as a key, then assigned its value (brendan)
    age: 22,
    title: this.name + 'student',
speak: function(){
    console.log('Hello, I am' + this.name); // need to nestle this. into a function definition and name it a method like speak
    },
}
Brendan.speak()
```


## Accessing data from an object

```js
// dot notation
Brendan.name // reference the object itself and then dot property name'

// secondary way = bracket notation

var propertyNames= ['name', 'title', 'age']

Brendan[propertyNames[0]]; // helpful for when property you want to reference is a variable

```


## Where we are headed with this
```js
// object constructor => an object
var Squirtle = ConstructPokemon('squirtle', 100, ['bubblebeam', 'tackle']);
.. this.hp = this.hp - attackDamage
Squirtle.turn(40); // practicing functionality for this allows us to create complicated objects
```


## The DOM
- The Document Object Model
    - lives in the global runtime environment,
    - we can call out to this object, within any code block that `runs in the browser`
    - the Javascript language was conceived as a multi runtime language
        - the runtime was responsible for providing the functionality
    - **A built in API (application program interface)** (think of an oven with its dials as objects and its keys that perform values)
    - functionality includes all the features of an HTML document
        - creating element tags
        - selecting element tags
        - adding classes
        - setting attributes
        - ...etc.
```js
// we can programmatically update HTML features using the document global object:
// check out what exists globally
document // our entire document in HTML

 var section = document.getElementByID('an id attribute');

//create a specific HTML tag
 var paragraph = document.createElement('p');

// deploying this element by adding content and appending to the actual document
paragraph.textContent = 'adding some text';
section.append(paragraph); // adds the text content in the paragraph and deploys it in the section by appending it
//create an element, add content, then append it to a declared area

// 1. select the container you would like to add content to.
// 2. create a html tag, keep in mind child and parent, etc.
// 3. after selecting container and element tags created, finally add content.
// 4. Append to the document

// list or think about hierarchies where parents and children are present... then start selecting what you want to add and append
// article > section > div > p
// article > section > div > h3 ( you would have to create 4 elements for this just to select)
```
```js
var articleEl = document.createElementID('article');
var sectionEl = document.createElementID('section');
...

articleEl.textContent = 'My Article text';
...

body.append(articleEl);
article.append(sectionEl);
section.append(divEl);
divEl.append(paragraphEl);
paragraph.append(header);
... // do the parent elements first then child
// create a function that takes an element to create a parent and append its child?
```
Math.random() always picks between 0 and 1
- multiply by 10 to choose between numbers 0 and 10

- math.floor(math.random * 10); this makes it without decimals

## Class 7 Constructor Functinos

- write a function that takes 0 parameters and returns 2 strings
```js
function strings() {
return['1string1','string2'];
}

```

- write a function that takes this function as a parameter, and returns a boolean saying whether or not the function returns two strings
```js
function returnStrings(strings()) {
    if (strings() === 'true'){
       return true;
    } else {
        return false;
    }    
}

```

## Constructor Function -- returns an object
- looks just like a normal function, the only difference is that a constructor function implicitly returns a new object

```js
// this is valid, but leads to complications later
function createStore(){
    return{
        name: 'store',
        speak: function() {
            console.log(this.name);
        }
    }
}

//constructor
function createStore(){
this.name = 'store',
    this.speak = function(){
    console.log(this.name);
    }
}

var Seattle = new Store();
console.log(seattle) // {name: 'store', speak: [function...]}

// lets recreate our lab stores using constructor functions

function createStore(name, minCust, maxCust) {
    this.storename = name,
    this.minCust = minCust,
    this.maxCust = maxCust;
}
// new keyword activates constructor function capabilities
var seattle = new createStore('Seattle, 20, 60);
console.log(seattle) // {storename: 'seattle', minCust: 20...} 
// using the constructor function we have created the Seattle object


// Methods on constructors

//Prototype
//this syntax ensures that 'this' will always reference the object that was created
createStore.prototype.speak = function(){
    console.log(this.name);
}

// writing functions and methods once, then use prototype to apply to all objects


```

## HTML Tables
- display rows and columns in an HTML document
    - `<table> </table>` parent element for all of our table
    -`<tr></tr>` the table row, which should contain all the cell data for a given row
    - `<td></td>` a table cell, makes up for block spaces in a table row
    - `<th></th>` gives us a bold, meant to replace a `td`

```html 3 columns and 3 rows
<table>
    <tbody>
<tr>
    <td>
    Cell one
    </td>
    <td>
    cell two
    </td>
    <td>
    cell three
    </td>
</tr>

<tr>
    <td>
    Cell one
    </td>
    <td>
    cell two
    </td>
    <td>
    cell three
    </td>
</tr>

<tr>
    <td>
    Cell one
    </td>
    <td>
    cell two
    </td>
    <td>
    cell three
    </td>
</tr>
</tbody>
</table>
```
```css
table{
    border:thin solid black;
}
tr {
    border: thick solid navy;
}
td {
    border: thin solid gray;
}
```

# Constructor Function Exercise
- create pokemon constructor
    - 4 properties
        - name : string
        - health : number
        - attack : number
        - defense : number

```js 
                   // parameters
function Pokemon(name, health, attack, defense) = {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
}
var pichu = new Pokemon('Pichu', 20, 40, 15); //arguments
var squishy = new Pokemon('Squishy', 100, 60, 35) // arguments

function PokemonBattle(pokemon1,pokemon2){
    while (pokemon1.health > 0 || pokemon2.health > 0){
        pokemon1.health -= pokemon2.attack
    }
}
PokemonBattle(pichu, squishy);

Pokemon.prototype.


var pokedex = [pichu, squishy]
pokedex[0] // {pokemon}

console.log(pichu) // {name: 'Pichu', health: 20, attack: 40, defense: 15}
```

prompt('what is your pokemon name?')
prompt('how much health do they have?')
prompt('..');
use the prompt to create and display pokemon on a web page

var health= prompt('how much health do they have?')
var pokemonName = prompt ('What is your pokemon name'?);

do (prompt('what is your pokemon name?'){
    while (prompt(how much health do they have?');
    } 
    if { health>=0;
            console.log(hea)
        
    }


## Vote Tracking
- 