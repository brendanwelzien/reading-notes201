# Local Storage
- for native applications the operating system typically provides an abstraction layer for storing and retrieving application-specific data
    - these values may be stored in some other place.. if your native client app needs local storage you can invent your own format

-*Cookies* have supplied use for local storage of small data
    - downsides:
        - slows down web
        - cookies include in every HTTP request, unencrypted data
        - cookies limited to about 4 kb of data
    - what we **want**
        - a ton of storage space
        - on the client
        - persists beyond a page refresh
        - isn't transmitted to the server 
        - this is what we wanted before HTML 5 came out
    - historically, past issues included the pass of information without permission

## HTML5 Storage
- otherwise named as "web storage"
    - it is a way for web pages to store named key/value pairs locally, within the client browser
- **Using HTML5 Storage**
    - you store data based on a named key, then  you retrieve that data with the same key (the named key is a *string*)
```js
interface Storage {
getter any getItem(in DOMString key);
setter creator void setItem(in DOMString key, in any data);
};
```
 - calling **setItem()** with a named key will overwrite the previous value, calling **getItem()** with a non-existent key will return **null**
- treat local storage object as an array
- removing a key uses **removeItem()**

## Limitations in Current Browsers
- 5 MB is how much storage each *origin* gets by default
- "QUOTA_EXCEEDED_ERR" is the statement that occurs when there is no storage space
- there is no mechanism that a browser supports in requesting more storage space
- **Data is stored as strings. If you are storing something other than string you will need to coerce it yourself when you retrieve it!**

## New Visions
- Indexed Database API exposes what is called an *object store*
    - each store retains databases with records and records retain fields

[<=Back](README.md)