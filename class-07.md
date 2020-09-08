# HTML Chapter 6 Tables pgs 126-145
- a table represents information in a grid format
- `<table>` is used to create a table. Contents are written out by row
- `<tr>` indicates the start of each row using this tag
- `<td>` is the cell of a table, at the end of each cell you use `</td>`
- `<th>` is used for the heading
- you can span colums by using `<td colspan="2"> text </td> (this will span across two columns)
- you can span rows using the same format
- long tables require..
    - `<thead>, <tbody>, <tfoot>`
    - when you have a big table it is important to put the content in the right element areas

# Javascript Chapter 3 pgs 106-144
- the new keyword and the object constructor create a blank object, you can then add properties and methods to the object...

1. create a new object using a combination of the *new* keyword and the *Object()* constructor
```js

var hotel = new object();
hotel.name = 'Brendan';
hotel.rooms = 50;
hotel.booked = 25;

hotel.checkAvailability = function(){
    return this.rooms - this.booked;
};
```
**Updating an Object**
- to update the value of properties, use dot notation or square brackets
    - they work on objects created using literal or constructor notation
    - to delete a property, use the delete keyword
    - hotel.name = ''; or hotel['name'] = '';

**Creating many objects constructor notation**
```js
function hotel(name, rooms, booked){
this.name = name;
this.rooms = rooms;
this.booked = booked;
this.checkAvailability = function(){
    return this.rooms - this.booked;
};
}
```
- the *this* keyword is used instead of the object name to indicate that the property or method **eblongs to the object that this function creates**
- the **new** keyword followed by a call to the function creates a new object
```js
var quayHotel = new Hotel ('Quay', 40, 25);
var parkHotel = new Hotel ('Park', 120, 77);
// the first object is called quayHotel, and shows its keys
```
## Adding and Removing Properties
- once you have creatd an object using literal or constructor notation, you can add new properties to it
, use the dot notation

```js
var hotel = {
    name:'Park',
    rooms: 120,
    booked: 77,
};
hotel.gym = true;
hotel.pool= false;
delete hotel.booked;

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elPool = document.getElementById('pool');
elPool.className = 'Pool: ' + hotel.pool;

```
- Recap

1. Create the object
2. Add Properties and Methods

**Literal Notation**
- `var hotel = ()` *object*
- `hotel.name = 'quay';` *property*
- `name: 'quay',` *key/value*
**Object Constructor Notation**
- `var hotel = new Object();` *object*
`hotel.name = 'quay';` *property*
`this.name = name;` *use this.*

- the *this* keyword is commonly used inside functions and objects. It always refers to one object, usually the object in which the function operates

- Arrays are objects, they hold a set of key/vaue pairs, but the key for each value is its index number

[<=Back](README.md)