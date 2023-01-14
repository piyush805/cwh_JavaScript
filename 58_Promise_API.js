/*
1.  Promise.all(promises) = waits for all to resolve then returns an array of results, if any fails then it becomes error and all results are ignored

2.  Promise.allSettled = waits for all to resolve and returns results in an array with status and value of each

3.  Promise.race(promises) = waits for first promise to settle and its results/error becomes outcome

4.  Promise.any(promises) = waits for first promise to resolve(not reject) and its results becomes outcome, throw aggregate error if all promises are rejected
 
5.  Promise.resolve(value) = makes a resolved promise with given value

6.  Promise.reject(error) = returns a rejected promise
*/


let p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(1);
    }, 1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        // resolve(2);
        reject(2);
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(3);
    }, 3000);
})

let promise_all1 = Promise.all([p1, p2, p3]);
promise_all1.then((value) => {
    console.log(value) //[1, 2, 3]
})
let promise_all2 = Promise.allSettled([p1, p2, p3]);
promise_all2.then((value) => {
    console.log(value)
    /*
    [
        { status: 'fulfilled', value: 1 },
        { status: 'rejected', reason: 2 },
        { status: 'fulfilled', value: 3 }
    ] 
     */
})

let promise_all3 = Promise.race([p1, p2, p3]);
promise_all3.then((value) => {
    console.log(value) //   1 (it is resolved/rejected first)
    
})

let promise_all4 = Promise.any([p1, p2, p3]);
promise_all4.then((value) => {
    console.log(value) //   1 (it is resolved first)
    
})



let promise5 = Promise.resolve(6);
promise5.then((value)=>{
    console.log(value)
})

let promise6 = Promise.reject("Reject error");
promise6.catch((error)=>{
    console.log(error)
})