/*
-   Any function can be made async and then promises can be awaited inside it

-   Async funciton always returns a promise, and wraps non promises within it, hence .then() can be used for such function
-   
*/

async function harry() {
    return 5;
}
harry().then((x) => {
    console.log(x)
});

async function func() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("21 degrees");
        }, 2000);
    })
    let bangaloreWeather = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("16 degrees");
        }, 4000);
    })
    console.log("Fetching weather in Delhi, wait...")
    let delhiW = await delhiWeather;//waits for the promise to fulfill
    console.log("Fetching weather in Bangalore, wait...")
    let bangaloreW = await bangaloreWeather;//waits for the promise to fulfill
    
    return [delhiW, bangaloreW]
}
console.log("Welcome to weather forecast");

// let a = func();
// console.log(a)//Promise { <pending> }

func().then((x) => {
    console.log("Temp is Dehli:", x[0]);
    console.log("Temp is Bangalore:", x[1]);
});//Temp is Dehli: 21 degrees
// Temp is Bangalore: 16 degrees
