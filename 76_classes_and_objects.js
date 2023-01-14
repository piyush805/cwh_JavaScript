//classes - extentible code template for creating objects providing initial value for state, providing inital values for state (variables ) and intial implementation of behaviour (funciton)

/*
class MyClass{
    //class methods
    contructor(){...}
    method1(){...}
    method2(){...}
}   

We can use "MyClass" to create new object which extend this prototype methdos
*/

class RailwayForm{
    submit(){
        console.log(this.name+"Form submitted")
    }
    cancel(){
        console.log(this.name+"Form cancelled")
    }
    fill(givenname){
        this.name = givenname
    }
}

let harry = new RailwayForm();
harry.fill("harry")
let rohan = new RailwayForm();
rohan.fill("rohan")
harry.submit();//harryForm submitted
rohan.submit();//rohanForm submitted
rohan.cancel();//rohanForm cancelled

//arguments can be passed and used inside methods
//Here classes do not need to have variables of their owwn, they can be dynamically assigned inside methods themselves
