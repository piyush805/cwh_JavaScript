let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Resolving after 2 seconds");
        resolve(56);
    },2000);
})

p1.then((value)=>{
    console.log(value)
    let p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Promise 2");
        },2000)
    })
    return p2;
}).then((value)=>{
    console.log(value,"We are done")
}).then((value)=>{
    console.log("Done for sure")
})
/*
    So now the callback within callback chaining can be replaced with .then and resolving chain of promises one by one, so the code doesnt expand horizontally and is still readable
*/