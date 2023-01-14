//  Cookies are small strings of data stored directly in the browser

// console.log(document.cookie) // In broswer,  shows are cookies stored, in form of jey value pairs separated by a dash

//Set by webserver using "set Cookie HTTP header" (along with response data we fetched), in the next request, cookie gets sent back so in the uniqueness, web server identifies the user using "Cookie-HTTP-header"\

document.cookie = "abc=hello8899"; //   this is not overwrite the document cookie but append to it 

//  encode URI component - this functions helps include special characters in cookie key - value


let key = prompt("Enter cookie key")
let value = prompt("Enter cookie value")
document.cookie = `${key}=${value}`//cannot take in special characters
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`//can take in spcecial characters

//  Cookie options 
//  Setting many cookies in one line with semicolon, doesnt necessarily mean they're diff key value pairs being set. They are cookie being set with options 

//String after first semicolon get ignored and only the first key value pairs is considered 

/*there are diff keys for options: 
    -   path = makes cookie available at that given path with root /<path-name>(inclusive from / onwards)
    -   expires =  


*/
