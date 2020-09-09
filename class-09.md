# HTML 

## Chapter 7 Forms pgs 144-175
- form controls
    - there are several types of form controls that you can use to collect info from visitors
    - adding text, making choices, submitting forms, uploading files
```html
<form>.... <form action="url" method="get"><p> text</p></form>

```
- you can use `<input type="text" name="username" size="" maxlength=''></form>`

- `size` indicates the width of the text input
- `type="text"` creates a single-line of text
- `name` identifies the form control `username:       `
- `maxlength` limits character input

- creating a username and password form
```html
<form action= "url">
    <p> Username:
        <input type="text" name"username" size= "15" maxlength='30'/>
    </p>
    <p> Password:
        <input type="password" name="password" size="15" maxlength="30"/>
    </p>
</form>
```

- `<textarea name="comments" cols="20" rows"4">` is for creating a comment box
-`type="radio"` uses name , value, and checked for creating options for the user, same goes for `type=checkbox`

- creating a drop down list box
    - `<select>`is used to create a drop down list box, it contains tw or more `<option>` elements
    -`<option>` is used to specify the options that a user can select from, `value= ` is for the option attribute, like ipod, computer, laptop
    - you want to use `<select>` and nest options within so the attributes can be selected by the user
        - within select, you can use `multiple=""` to use many options for drop down list
- if you want to allow users to add a file, use `type="file"` with a `value="upload"`
    - `type="submit"` makes a submit button for the server

## Chapter 14 Lists Tables Forms pgs 330-357
*Bullet Point Styles*
- the `list-style-type` property allows you to control shape or style of a bullet point (square, circle, disc)
    - `list-style-image` specifies an emote or image to act as a bullet point
        - `list-style` is a shorthand for list styles... You can express properties in any order
- some tables properties you can use...
    - width, padding, text-transform, letter-spacing, border, text-align, background-color, :hover

# Javascript

## Chapter 6 Events 243-292



[<=Back](README.md)