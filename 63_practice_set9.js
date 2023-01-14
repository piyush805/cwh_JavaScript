let p = () => {
    return new Promise(function(resolve, reject){
        setTimeout(() =>{
            // reject(new Error("error message"))
            reject(34)
        }, 2000)
    })
}

let a = async () => {
    try {
        let c = await p();
        console.log(c);
    } catch (error) {
        console.log(error)//34
    }
}
a();