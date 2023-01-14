//  Aynchronous programming 
// console.log("Before line");
// let a = setTimeout(function () {
//     console.log("Async programming");
// }, 2000);
// console.log("After line");



function first(arg, callback) {
    setTimeout(function () {
        console.log("Running first")
        let a = "some argument for callback";
        callback(a, third);
    }, 2000);
}
//callback has to be invoked inside out main function after certain evennt is complete, it could be async await, promise or timeout
function second(x, callback) {
    console.log("here", x);

    callback("arg for third");
}

function third(y) {
    console.log("Third function call", y)
}

first("sabzi", second)

//Here first function function is call with second function as callback , which itself has a third function as callback

//This is callback based style of async programming
//We should provide call back to async function to know when their eecution is completed