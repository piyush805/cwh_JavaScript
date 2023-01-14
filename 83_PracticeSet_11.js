//Create a JS class to create a complex number, create a constructor to set a real and a complex part 
//Write a methods to add 2 complex numbers in the above class

class Complex1 {
    constructor(a, b) {
        this.real = a;
        this.complex = b;
    }
    get number() {
        return this._real + (this._complex > 0 ? "+" : "") + this._complex + "i";
    }
    add(c1) {
        let a = this.real + c1.real;
        let b = this.complex + c1.complex;
        return new Complex1(a, b);
    }
}
let c1 = new Complex1(2, 4);
console.log(c1.number);
let c2 = new Complex1(3, -2);
let c3 = c1.add(c2);
console.log(c3.number);


//Create a class student from class Human, override few methods and see changes
class Human {
    constructor(name, favfood) {
        this.name = name;
        this.favfood = favfood;
    }
    walk() {
        console.log(this.name + " Human is walking")
    }
};

class Student extends Human {
    walk() {
        super.walk();
        console.log(this.name + " Student is walking")
    }
};

let a = new Student("harry", "Bhindi");
a.walk();

//  Use getter and setters to set and get the real and imaginary part of complex number
class Complex {
    constructor(a, b) {
        this.real = a;
        this.imaginary = b;
    }
    get real() {
        return this._real;
    }
    get imaginary() {
        return this._imaginary;
    }
    set real(newReal) {
        this._real = newReal;
    }
    set imaginary(newImaginary) {
        this._imaginary = newImaginary;
    }
    add(c1) {
        this.real = this.real + c1.real;
        this.imaginary = this.imaginary + c1.imaginary;

    }
}

let p = new Complex(2, 4);
p.real = 10;
p.imaginary = 16;
let r = new Complex(3, 5);
console.log(p)
p.add(r)
console.log(p)