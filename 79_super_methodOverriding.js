class Employee {
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
/*
class Programmer extends Employee{
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`);
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves+1} leaves (One extra)`);
    }
}
*/

// let p = new Programmer();
// p.login();
// p.requestLeaves(3);
/*
Output:
    Employee has logged in
    Employee has requested 4 leaves (One extra)
*/

//  Now, suppose we want to run Employee methods request leaves only and grant one leave extra after asking the programmer only if that programme wants
//  We can do this by copy pasting above methods, but that would be repeating even after extending 

//  so "super" provides a way out which helps us call parent class method inside a child class

class Programmer extends Employee{
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`);
    }
    requestLeaves(leaves){
        super.requestLeaves(leaves);//way to call parent class's overridden methods inside child class 
        console.log("One extra granted")
    }
}
let p = new Programmer();
p.login();
p.requestLeaves(3);