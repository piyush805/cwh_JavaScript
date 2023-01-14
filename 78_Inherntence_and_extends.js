//  Directly Copying and borrowing from parent class will not reflect all the changes reflected in parent class into child class
//  So instead of copy paste we inherit
//  "extends" keyword

//  class <child_class> extends <parent_class>

class Animal{//parent class
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    run(){
        console.log(this.name + " is running");
    }
    shout(){
        console.log(this.name + " is shouting");
    }
}

class Monkey extends Animal{//chill class 
    eatBanana(){
        console.log(this.name + " is eating banana")
    }
}

let monkey1 = new Monkey("harry","brown");
monkey1.run();//harry is running
monkey1.eatBanana();//harry is eating banana

//Overall number of lines of code is reduced 
//DRY principle followed 
//Code more maintainable