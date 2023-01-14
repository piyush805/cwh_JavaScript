
//  console.log(first)
//  Simple above code will throw ref error that variable is not defined, which will stop further code from executing

//But with try catch block, further code doesnt stop executing
try{
    // try the code
    console.log(first)
}catch(error){
    //handle error
    console.log("Error was handled")
}
//Catch will be ignored if the try block runs without error 

//If error occures in scehduld code, (promise, async await, settimeout,), these will not be handled in try catch because those functions get pushed into funciton call stack and JS moved forward
//To handle async funciton error, we need to write try catch within it

try {
    setTimeout(function(){
        console.log(rahul)//throws error
    },3000)
} catch (error) {
    console.log("Error handled")
}