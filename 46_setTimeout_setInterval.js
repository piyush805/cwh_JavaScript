
function clear() {
    console.log("clear call")
    clearTimeout(a);
};
//Set interval runs function repeatedly after given interval of time
//it returns and id which can be used to clear the given setInterval function

// setInterval(<function>,<interval>,<arg1>, <arg2>,...)
let a = setInterval(function () {
    console.log("Hello")
    clear();
}, 3000);

//  SetTimeout runs after a given interval only once 
// setTimeout(<function>,<interval>,<arg1>, <arg2>,...)
let b = setTimeout(function () {
    console.log("Running set Timeout ")
}, 3000);

//Here both will output simultaneosly because waiting time for both is 3 seconds

function sum(a, b, c) {
    console.log((a + b + c) / 2);
}
let c = setTimeout(sum, 6000, 1, 2, 3)

