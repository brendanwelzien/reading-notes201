# CSS Transforms, Transitions, and Animations
**What Google learned from its question to build the perfect team**
- conflict with leadership in a team, who was in charge
- talking simply outside of group work time was more pleasant than when working together
- shift in increased efficiency of work stems from group collaboration
- important for a company to influence how their employeees work together

- In 2012, Google launched *Project Aristotle*
    - group norms seemed to be the reason to how team's coulld improve
   - success also stemmed from not intelligence, but how teammates treated each other, social sensitivity, collectively retains an increased intelligence
   - psychological safety is critical for a positive team-work environment
   - no one wants to put on a 'work-face' at the office, leaving your personality out of it can be detrimental 

**CSS**
- the *transform* property provides 2d and 3d settings

## Transform Syntax
- taken from shayhowe.com

```css
div {
  -webkit-transform: scale(1.5);
     -moz-transform: scale(1.5);
       -o-transform: scale(1.5);
          transform: scale(1.5);
}
```
- the transform type is followed by the value inside parantheses
- 2D work the x and y axes where 3D work x, y, and z axes(depth)
    - 2D can rotate elements using the *rotate* value
    - 2D uses *scale* to change appeared size of element
    - 2D uses *translate* to moving element without disrupting flow of the document
    - 2D uses *skew* to distort elements on the axes

- 3D
    - can rotate on any axis rotate x, y, and z
    - same methods for 2d
    - *transform-style* : *preserve-3d* is used to allow for nested elements to transform in own environment
        - needs to be placed on the parent element in html when labeling

## CSS Transitions and Animations
- determining styles for elemenets --> *:hover, :focus, :active, :target*
- 4 transition-related properties --> *transition-property, transition-duration, transition-timing-function, and transition-delay*

    - the transition-property allows for what properties can be altered
    - not all properties may be transitioned, only properties that have an identifiable halfway point
    - use **transition** property as a *shorthand* in combining all properties and values for an element
        - order is 'transition-property, transition-duration, transition-timing-function, and lastly transition-delay. Do not use commas with these values unless you are identifying numerous transitions.'
**Animations**
- when more control is needed, transitions need to have multiple set points
    - = set multiple points at which an element needs to perform a  transition
        - use the **@keyframes** rule which includes...
        1. animation name
        2. animation breakpoint
        3. intended animated properties
- shorthand: *animation*, order of values = animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, animation-play-state

[<=Back](README.md)