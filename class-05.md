# Images, Color, Text

## Chapter 5 Images 94-124
- be wary of copyright, go to companies that have stock images or use your own
1. istockphoto.com
2. gettyimages.com
3. veer.com
4. sxc.hu
5. fotolia.com

- may be helpful to store an *image* file list

- adding an image you need the<img> tag with src, alt, and title, not all is needed 
```html

<img src="images/bird.jpg" alt="a bird photo" title=" a nice looking bird"/>
you can add weight="" and height="" before you close the tag
```
**Rules for Creating Images**
1. Save images in right format
    - jpeg, gif, png
2. Save images at the right size to fit page
3. Use the correct resolution
    - most computer screens only show web pages at 72 pixels per inh.
    - you can edit photos using *Adobe photoshop*
*JPEG*
- when you have many different colors in a picture you should use jpeg

*GIF and PNG*
- use when saving images with few colors or large areas of the same color


- save images at the same width and height that you want to appear on the page
- images should be saved at resolution of 72 ppi

```html
<figure> contains images and their caption (so it will show the photo and its caption together on the page)
<figcaption> is use to write the caption and is often inside the <figure> element


```


## Chapter 11 Color 246-263

* In picking colors, there are *3* main ways to pick your choice
    - *Color terminology, contrast, and background colors*

***color***

- specified as shown--
    - property {color:name;}
    - property {color:hexcode;}
    - property {rgb(x,y,z);}
    ***background color***
    - use property and then {background-color: label}

***contrast and opacity***
 - ex. 
    p.one {
    background-color: rgb(0,0,0);
    opacity: 0.5;}
    - opacity can be between 0.0 - 1.0

- < hsl > and < hsla > colors are new and include variables such as *hue*, *saturation*, and *lightness*
    - hue expressed as an angle (0 - 360 degress)
    - saturation (%)
    - lightness is percentage as 0%=white, 50%=normal, & 100%=black
    
```bash
    body {
background-color: #C8C8C8;
background-color: hsl(0,0%,78%);}
    p {
background-color: #ffffff;
background-color: hsla(0,100%,100%,0.5);}
```
- *alpha* is expressed as 0-1.0 for transparency

EXAMPLE of COLOR ADDED

```bash
<!DOCTYPE html>
<html>
<head>
 <title>Color</title>
 <style type="text/css">
 body {
 background-color: silver;
 color: white;
 padding: 20px;
 font-family: Arial, Verdana, sans-serif;}
 h1 {
 background-color: #ffffff;
 background-color: hsla(0,100%,100%,0.5);
 color: #64645A;
 padding: inherit;}
 p {
 padding: 5px;
 margin: 0px;}
 p.zero {
 background-color: rgb(238,62,128);}
 p.one {
 background-color: rgb(244,90,139);}
 p.two {
 background-color: rgb(243,106,152);}
 ```

**rules**

- < body > sets a default color for all text and background, both use color names
- < h1 > sets the color of the heading use a hex code
    - there are two values for background-color property as 1. uses fallback color as a hex code
    2. HSLA value for browsers that support this method (angle, saturation, lightness, alpha) ?





## Chapter 12 Text 264-299
- some properties you can change are weight, style, and stretch

- before selecting you can choose a typeface.... serif (extra details on letters), sans-serif (straight ends to letter (cleaner)), or monospace (fixed width and are commonly used for code), there are many more!

*Specifying Typefaces*
```bash
using the *font-family* property allows you to choose the typeface
- you can list several when the user does not have a certain style downloaded
body {
    font-family: Georgia, Courier New, Wingdings;
}
```
*Size of Type*
```bash
use property *font-size* you can use pixels, %, or ems

*@font-face* allows you to use a font by specifying a path to the copy of the font which would be downloaded

    @font-face {
        font-family: 'ChunkFiveRegular';
        src: url('fonts/chunkfive.eot');
    }
    h1, h2 {
        font-family: ChunkFiveRegular, Georgia, serif;
    }

    *font-weight* creates bolded text, uses normal and bold

    *font-style* uses normal, italic, oblique
```
    - keep in mind some font formats are not free
*Uppercase and Lowercase*
- the *text-transform* property is used to change the case of text from uppercase, lowercase, and capitalize

*Underline and Strike*
- using the property *text-decoration* allows you to do..
    - none (removes decoration), underline, overline, line-through, blink
- line-height creates space between lines of text, makes the vertical gap larger (use ems)

*Letter and Word Spacing*
- *letter-spacing* and *word-spacing* uses the em units 
    - you can also align using *text-align* and use left, right, center, and/or justify (every line except last takes full width of containing box)
*Vertical Alignment*
- the *vertical-align* tag is **not** intended for vertically aligning text in middle of block elements
    - it is more commonly used with inline elements such as img, em, or strong
```bash
vertical-align:
baseline
sub
super
top
text-top
middle
bottom
text-bottom
```
- you can also use *text-indent* to indent first line of text if needed

*Text-Shadow*
- the text-shadow property creates a shadow behind it 
    - it takes three lengths and a color...
        - text-shadow: -1px -1px #666666
        1. the first lgenth indicates how far left or right shadow should fall
        2. indicates the distance from top to bottom to where it should fall
        3. optional, amount of blue applied
        4. color of the drop shadow
- the :first-letter or :first-line command changed the property of the first letter or first line 

*Miscellaneous*
- :link = allows you to set styles for links that have not yet been visited
- :visited = allows you to set styles for links that have been clicked on
- :hover = when a user hovers over an element
    - input.submit:hover {
        background-color: #665544;
    }
- :active = when an element is activated by a user you can make it feel like the link is being pressed
- :focus = highlights the element?

**CSS Attribute Selectors**
Selector | Meaning | Example
-------- | ------- | -------
existence | [] matches a specific attribute | p[class] targets any p element with an attribute called class
equality | [=] | p[class="dog"]] targets any p element with attribute called class whose value is dog
space | [~=] | p[class~="dog"] targets any p element with attribute called class whose value is a list of space-separated words, one of which is dog
prefix |[^=] | p[attr^"d"] targets any p element with an attribute whose value begins with the letter 'd'
substring | [*=] | p[attr*"do"] targets any p element with the attribute whose value contains the letters 'do'
suffix |[$=] | p[attr$"g"] targets any p element with an attribute whose value ends with the letter 'g'


example text taken from DUCKETT
```css
<style type="text/css">
 body {
 padding: 20px;}
 h1, h2, h3, a {
 font-weight: normal;
 color: #0088dd;
 margin: 0px;}
 h1 {
 font-family: Georgia, Times, serif;
 font-size: 250%;
 text-shadow: 2px 2px 3px #666666;
 padding-bottom: 10px;}
 h2 {
 font-family: "Gill Sans", Arial, sans-serif;
 font-size: 90%;
 text-transform: uppercase;
 letter-spacing: 0.2em;}
 h3 {
 font-size: 150%;}
 p {
 font-family: Arial, Verdana, sans-serif;
 line-height: 1.4em;
 color: #665544;}
 p.intro:first-line {
 font-weight: bold;}
 .credits {
 font-style: italic;
 text-align: right;}
 a {
 text-decoration: none;}
 a:hover {
 text-decoration: underline;}
 </style>



```

[<=Back](README.md)