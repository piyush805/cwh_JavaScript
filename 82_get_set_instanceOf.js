class Animal{
    constructor(name){
        this._name = name;
    }
    fly(){
        console.log("I am flying");
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
};

let a = new Animal("bird");
a.fly();            //I ama flying
console.log(a.name);//bird
a.name = "king";
console.log(a.name) //king

/*
First name to changed to _name to avoid collision with getter and setter method names
Then the getter and setter use get and set keyword to give results

_name can be used as "name" in constructor, no errors will be there 
But if _name replaced with name inside getter and setter then it would be recursion and "Maximum call stack size exceeded"
*/

//instanceof tells use whethter a variable/object is an instance of that class 
//OR any class inheriting from it (meaning true for any child class as well)
//<objectName> instanceof <className>
console.log(a instanceof Animal) //true
let c = 56;
console.log(c instanceof Animal)//false
class Rabbit extends Animal{

}
let rab = new Rabbit;
console.log(rab instanceof Rabbit)//true
console.log(rab instanceof Animal)//true <---

