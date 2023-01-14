//  Process where interpreter appears to move declarations at top of the code before execution
//  So variables can be accessed before they are declared 

greet("Harry");//Good morning Harry

function greet(name){
    console.log("Good morning "+ name);
}

//  JS only hoists decalrations not initialisation so variables will be undefined until line where they are initialised is reached
console.log(a);//undefined 
var a = 9;
//In above, is a is not efined then it will not be undefined, but given Ref Error that a is not defined. Because declration is hoisted to the top but initialisation is not 

console.log(c);//ReferenceError: cannot access 'c' before initialisation 
let c = 9;
//Behaviours is diff with let and var
//let and const are hosited to the top, if they are there, but without initialisation they are in "temporary dead zone"



//Function expression not hoisted

greet1();//ReferenceError: cannot access 'greet1' before initialisation 
const greet1=()=>{
    console.log("Good morning");
}


greet2();//TypeError: 'greet2' is not a function
var greet2=()=>{
    console.log("Good morning");
}

//Similar to function express is class expression, it is also not hoisted