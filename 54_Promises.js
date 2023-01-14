/*
    Promises as a solution alternate to callbacks to execute SJ asynchronously 

    let promise = new Promise((resolve, reject){
        //  execute 
        resolve(value)
        reject(error)
    });
    console.log(promise) // prints 'value' passed to resolve or 'error' of reject
    Promise has 2 properties inside it , state and result but it cannot be directly accessed like object[key]
    -    State initially is pending ,and later gets resolved or rejected
    -   

*/