//  when parent class has a custom constructor and child class has none then on creating an object of child class invokes constructor of parent class. How?

class Employee {
    // constructor(){
    //     console.log("Employee Constructor")
    // }
    constructor(name){
        console.log(`${name} - Employee Constructor`)
        this.name = name;
    }
    login(){
        console.log(`Employee has logged in`);
    }   
    logout(){
        console.log(`Employee has logged out`);
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`);
    }
}

class Programmer extends Employee{
    // constructor(...args){
    //     super(...args)
    // }
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`);
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves+1} leaves (One extra)`);
    }
}

let p = new Programmer();
p.login();
p.requestLeaves(3);
/*
Employee Constructor
Employee has logged in
Employee has requested 4 leaves (One extra)
*/

//this is because child class has a automatic constructor created by JS engine
/*
    constructor(...args){
        super(...args)
    }

*/

let q = new Programmer("harry");
q.login();
q.requestLeaves(3);
/*
harry - Employee Constructor
Employee has logged in
Employee has requested 4 leaves (One extra)
*/
//So args passed to child class "constructor" are passed to parent class constructor and can be used there


//Suppose we provide constructor to child class then JS requies to call super constructor before using 'this' keyword else it throws error

class Programmer extends Employee{
    constructor(name){
        super(name)
        console.log(` ${name} - Newly written constructor`)

    }
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`);
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves+1} leaves (One extra)`);
    }
}

