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
    - merging feature branch code with master branch is done by viewing the branch, then make a pull request that goes from feature to master!