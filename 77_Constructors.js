//Now if we do not provide values of this.name in classes, then it will given "undefined" in the output

class RailwayForm{
    constructor(givenname){
        console.log("constructor called")
        this.name = givenname
    }
    submit(){
        console.log(this.name+"Form submitted")
    }
    cancel(){
        console.log(this.name+"Form cancelled")
    }
    
}

let harry = new RailwayForm("harry");//fill methods removed and its work is done inside constructor itself 
// harry.fill("harry")
let rohan = new RailwayForm("rohan");
// rohan.fill("rohan")
harry.submit();
rohan.submit();
rohan.cancel();
/*
constructor called
constructor called
harryForm submitted
rohanForm submitted
rohanForm cancelled
*/
///Constructor is called whenever new object of a class is created

//  We can do constructor to assign values
//  A preview methods to view details of filled form 
//  Submit methods
//  Cancelled form 