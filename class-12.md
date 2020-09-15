# Chart JS API
- charts are better for displaying data visually compared to tables.. They are not always easy to create though.
- drawing a line chart
    - create a canvas element in HTML
```html
<canvas> id="buyers" width height> </canvas>

```
- now we need a script that will retrieve the canvas

```html
<script>
var buyers = document.getElementById('buyers')
</script>
```
- you can also create a pie chart
    - you need to supply a value and color for each section of the pie data 
```js
var pieData = [
{
    value: 20,
    color:#
},
]
```
- for a bar chart, it is very similar to the line chart
- add the canvas element, retrieve the element, then add in the bar chart's data

## The Canvas Element
- similar to the img element, instead of src and alt it has height and width
    - provide fallback content to make sure it is rendered normally
    - canvas *requires* a closing tag

## Rendering
- the canvas initially is blank, so to display the canvas needs the **getContext()** element to obtain the rendering context
- example from mozilla...

```js
var canvas = document.getElementById('tutorial');

if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

## Drawing Shapes with Canvas

- canvas only supports two primitive shapes (rectangles and paths)
    - all other shapes need to be created by combining one or more paths
- **rectangles**
    - fillRect(x, y, width, height)
    - strokeRect(x, y, width, height)
    - clearRect(x, y, width, height)
    - example of invoking the draw function
```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}

```

-**paths**
    - it is a list of points, connected by lines that can be different shapes or curves, etc.
    1. create the path
    2. use drawing commands to draw into path
    3. once path has been created, you can stroke or fill path to render it
- functions to perform these steps-->

    - beginPath() creates a new path. once created, future drawing commands are directed into the path and are used to build the path
    - path methods
    - closePath() adds a straight line to the path, going to the start of the current sub-path
    - stroke() draws the shape by stroking its outline
    - fill() draws a solid shape by filling the path's content area

- For drawing a triangle:

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}
```
- the **moveTo(x, y)** function is useful, it does not draw anything, but moves to the desired path.... good for changing paths and drawing unconnected paths

- for drawing **straight** lines, use the **lineTo()** method
- for drawing **arcs**, use the **arc()** or **arcTo()** method
    - arc(x, y, radius, startAngle, endAngle, anticlockwise)
    - arcTo(x1, y1, x2, y2, radius)
- bezier curves (cubic and quadratic) are options as wel if you want complex shapes

## Styles and Colors
- use *fillStyle* and *strokeStyle*
    - this is for filling and for outlining colors
- for color palettes made from scratch..

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
                       Math.floor(255 - 42.5 * j) + ', 0)';
      ctx.fillRect(j * 25, i * 25, 25, 25);
    }
  }
}
- you can utilize gradients, live shapes, line styles, shadows, transparency

```
## Drawing Text
- you can fill text using *fillText* or *strokeTest* 
- styling text you can adjust how it is viewed by the user
    - font = value
    - textAlign = value
    - textBaseline = value
    - direction = value
    - measureText() is for obtaining details about the text





[<=Back](README.md)



