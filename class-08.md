# HTML Chapter 15 Layout
## Key Concepts in Positioning Elements

- building blocks: CSS treats each HTML element as if it is in its own box. The box will either be *block-level* or *inline box*
- if one block level element sits inside another block level element then the outer box is the *containing / parent* element

## Controlling the Position of Elements
- positioning schemes:
    - normal flow, relative positioning, and absolute positioning
    - you can use the *position* or *float* property

- to indicate where a box should be positioned, you may need to use *box offset* properties to tell browser how far from top or bottom and left or right
- when you move any element from normal flow, boxes can overlap... using *z-index* property allows you to control which box appears on top.
- normal flow: use **position:static**
- relative positioning: use **position:relative**
    - this moves an element in relation to where it would have been in normal flow
    - you can then move using left, top, right, pixels, etc.
- absolute positioning: use **position:absolute** 
    - the box is taken out of normal flow and no longer affects the position of other elements on the page

- **z-index** is commonly known as the `bring to front` or `send to back`, the higher the index number means it will appear over the top of another 
## Floating Elements

- the float property allows you to take an element in normal flow and place it as far to the left or right of containing element as possible
    - you should use the `width` property to indicate how wide the floated element should be
- clearing floats: `left` = does not touch any other lements appearing in same containing element for left side.. `right` `both` and `none`

- you can use multiple style sheets using `<link>` and the address 
    - use the `@import` rule with `url("");`



[<=Back](README.md)