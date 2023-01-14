const sayHello = (greeting, name) => {
    console.log(`${greeting}, ${name}`);
}

sayHello("Good morning", "John");// Good morning, John

const func = (name) => {
    console.log("Hello " + name)
}

const obj = {
    name: "John",
    exp: 30,
    role: "JS developer",
    show: function () {
        console.log(`This name is ${this.name} and the role is ${this.role}`)// Here, in the function immediately inside an object, created using funciton keyword, the context of "this" is the object obj
    }
}
obj.show();//   This name is John and the role is JS developer

const obj2 = {
    name: "John",
    exp: 30,
    role: "JS developer",
    show: function () {
        setTimeout(function () {
            console.log(`This name is ${this.name} and the role is ${this.role}`)//This name is undefined and the role is undefined
            //This happened because we created a function using keyword function isnide another funciton, so "this" here is a window object
            console.log(this)
            /*  Timeout {
                    _idleTimeout: 1,
                    _idlePrev: null,
                    _idleNext: null,
                    _idleStart: 98,
                    _onTimeout: [Function (anonymous)],
                    _timerArgs: undefined,
                    _repeat: null,
                    _destroyed: false,
                    [Symbol(refed)]: true,
                    [Symbol(kHasPrimitive)]: false,
                    [Symbol(asyncId)]: 5,
                    [Symbol(triggerId)]: 1
                }
            */
        }, 2000)
    }
}
obj2.show();

/*
So what is happening is: 

1.  When we make a funciton inside an object using "function", "this" keyword refers to that object.

2.  Whereasa inside a function alone, this keyword is a global object

3. In context of event, "this" refers to the element which we recieve that event
*/
//So now that question is how to fix this issue of getting this to refers to the outer object and not global object

const obj3 = {
    name: "John",
    exp: 30,
    role: "JS developer",
    show: function () {
        let that = this;//we catch the obj3 object here and use it in the inner function either directly or by passing
        setTimeout(function () {
            console.log(`This name is ${that.name} and the role is ${that.role}`)//This name is John and the role is JS developer

        }, 2000)
    }
}
obj3.show();

//Alternatively, use arrow function 
//Arrow function automatically take previous (lexical) "this" inside it 
const obj4 = {
    name: "John",
    exp: 30,
    role: "JS developer",
    show: function () {
        setTimeout(() => {
            console.log(`This name is ${this.name} and the role is ${this.role}`)//This name is John and the role is JS developer

        }, 2000)
    }
}
obj4.show();


//Sometimes,with single argument in the arrow function, we do not need the bracket for the arguements andmake our code minimalistic
const hello = name => {
    console.log("greeting "+ name);
}
hello("harry")//greeting harry