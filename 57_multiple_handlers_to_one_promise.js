/*
    Multiple .then to a single promise 
 */
let p1 = new Promise((resolve, reject) => {
    console.log("Promise not resolved yet")
    setTimeout(() => {
        console.log("Resolving after 2 seconds");
        resolve(4);
    }, 4000);
})
p1.then((value) => {
    console.log("First handler runs", value * 4)
})
p1.then((value) => {
    console.log("Second handler runs", value * 2)
})

//Handler attached first will output first, yet both handlers will run simultaneously

//Below is an example of chaining along with multiple handlers
let p2 = new Promise((resolve, reject) => {
    console.log("Promise not resolved yet")
    setTimeout(() => {
        console.log("Resolving after 2 seconds");
        resolve(4);
    }, 4000);
})
p2.then((value) => {
    let p3 = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Resolving after 6 seconds");
            resolve(value * 2);
        }, 6000);
    })
    return p3;
}).then((value) => {
    console.log("Third in chain runs", value * 2)
})

p2.then((value) => {
    console.log("Second handler runs", value * 3);
})