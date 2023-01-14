const a = {
    "name":"Piyush",
    "job":"developer"
}
console.log(a)
/* Prints in browser console
 >   {name: 'Piyush', job: 'developer'}
    job: "developer"
    name: "Piyush"
    [[Prototype]]: Object

    This object contains certain propeties and methods

*/

//  We can set prototpes with __proto__ 

let p = {
    run:()=>{
        console.log("Running")
    }
}

a.__proto__ = p;//A's prototype is p, so a can use p's methods
a.run();//prints "Running"

//If a itself has a method of same name then it will run else it will look for method in prototype and then run it, much like function overloading in C++ oopss

//No case of scope resolution if 2 prototypes have functinos of same name and object has no function, then whose function will be executed

//Later people started to prefer classes and objects and not this proto

