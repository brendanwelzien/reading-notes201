# JS
## Chapter 10 Debugging

- order of execution
    - does not always go numbered
    - the console interprets global context, function context, and a variance of scopes
- when the interpreter visits a function where it calls something elsewhere it has to go back to *the top of the stack*
    - 
**Execution Context and Hoisting**

- each time a script enters a new 'execution context', there are *two* phases
    1. Prepare
        - the new scope is created
        - variables, functions, and arguments are created
        - the value of *this* keyword is determined
    2. Execute
        - Now it can assign values to variables
        - Reference functions and run their code
        - execute statements

 - *hoisting*
    -  calling functions before they are declared
    - assign a value to a variable that has not yet been declared
    - each execution context also creates its own varibles object

- understanding scope
    - imagine nesting dolls... the children can ask the parents for information in their variables, but the parents cannot get variabels from their children!

### Error Objects

*Property* | *Description*
-------| -----------
name | type of description
message | description
fileNumber | name of JS file
lineNumber | Line number error

- there are seven types of built-in error objects in JS

*Object* | Description
--------- | ----------
Error | Generic error - other errors are all based upon this error
SyntaxError | syntax has not been followed
ReferenceError | Tried to reference a variable that is not declared/within scope
TypeError | an unexpected data type that cannot be coerced
RangeError | numbers not in acceptable range
URIError | encodeURI(), decodeURI(), and similar methods used incorrectly
EvalError | eval() function used incorrectly

**How to deal with errors**
1. debug the script to fix errors
    - debug the code, track down source of error, and fix it
2. Handle errors gracefully...
    - use *try, catch, throw, and finally* statements








[<=Back](README.md)