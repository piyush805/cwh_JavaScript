//  Q:1 Write a JS program to print the following after 2 seconds delay
/*
    Hello
    World
*/

const a = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, 2000)
    })
}
(
    async () => {
        let val = await a("Hello");
        console.log(val);
        val = await a("World");
        console.log(val);
    }
)()


//  Q:2 Wirte a JS program to find average of 5 numbers in an array using spread syntax
const arr = [3, 6, 1, 9, 4];
function avg(a, b, c, d, e) {
    return (a + b + c + d + e) / 5;
}
let ans1 = avg(...arr);
console.log("Average is ", ans1);//Average is  4.6



//  Q:3 Write a JS function which resolve a promise after n seconds, it takes n as a paramter, use IIFE to run the function for different values of n
let val = ((n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise resolved after ${n} seconds`);
        }, n * 1000)
    });
})(2).then((value) => {

    console.log(value);
})




//  Q:4 Write a Simple Interest Calculator using JS
const SI = (p, r, t) => {
    return p * t * (r / 100);
}
let ans = SI(100, 4, 3);
console.log(ans)//12