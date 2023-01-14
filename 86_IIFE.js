//IIFE are JS functions that run as soon as they are defined 

/*Syntax 

    (
        //function code
    )();
*/

let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(456)
        }, 4000)
    })
}
/*
let f = async ()=>{
    let b = await a();
    console.log(b);
    let c = await b();
    console.log(c);
    let d = await a();
    console.log(d);
}
*/
(async () => {
    let b = await a();
    console.log(b);
    let c = await a();
    console.log(c);
    let d = await a();
    console.log(d);
})();
