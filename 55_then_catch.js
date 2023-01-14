let p = new Promise((resolve, reject) => {
    setTimeout(function () {
        // console.log("I am a promise and i am fufilled");
        resolve(true)
    }, 3000)
});

let q = new Promise((resolve, reject) => {
    setTimeout(function () {
        // console.log("I am a promise and i am rejected")
        reject(new Error("I am an error"))
    }, 5000)
});

console.log(p);
console.log(q);

/*
    All promises all executed simultenously

*/

p.then((value) => {
    console.log(value)
})

q.catch((error) => {
    console.log("Some error occurred")
})
/*
    promise.then(   
        function(result){
            //  handle value
        },
        function(error){
            // handle error
        }
    })

If we are only interested in error handling, we can give first arg as null, or use p.catch(alert)
 */
p.then((value) => { }, (error) => { })