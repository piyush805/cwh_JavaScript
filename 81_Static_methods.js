class Animal {
    constructor(name) {
        this.name = name;
    }
    walking() {
        console.log(`Animal ${Animal.capitalize(this.name)} is walking`)
    }
    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length);
    }
}

let p = new Animal("jack");
p.walking(); 
//Animal Jack is walking 

//This Animal.capitalize methods can be implemented when passed arg to constructor as 
let q = new Animal(Animal.capitalize("jack"));

/*Or this Animal.capitalise methods can be implemented inside constructor itself 
constructor(name) {
    this.name = Animal.capitalize(name);
}
*/

//  These static methods cannot be accessed by object (as this.<method_name>), 
//  It cannot be accesed by object outside as <object_name>.<method_name>
//  They can only be accessed by classname as <class_name>.<method_name>
