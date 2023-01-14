let a = 8;
console.log(a);//8


{
    let b = 8;
}
// console.log(b)//ReferenceError: b is not defined
//because let variable has local scope

//var has a global scope
{
    var c = 9
}
console.log(c)//9

//block scope is {}, function scope is when variable inside a function definition