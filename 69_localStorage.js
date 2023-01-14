//  Local storage stores webserver objects which are not sent to server with each request
//some use case: not wanting to send user data id to server each time in each request
//This data survives full page refresh and even full broser restart

let key = prompt("Enter key")
let value = prompt("Enter value")
localStorage.setItem(key, value) //create/set value for that key

console.log(localStorage.getItem(key))

localStorage.removeItem(key) //remove a key value pair

localStorage.clear() //remove all key value pairs

localStorage.key(index);//key stored at that index

localStorage.length //number of key value pairs

//We can operate as object as well 
localStorage.someKey = 1 //set "someKey":"1"in local storage
alert(localStorage.someKey)
delete localStorage.someKey



JSON.stringify (object)//convert objects to JSON strings
JSON.parse(object) //convert strings to object (object must be valid JSON)

