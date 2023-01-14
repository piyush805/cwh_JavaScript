//Closure is a returning function along with(bundled together) with ref to its lexical environment 

function hello1() {
    let message = "Good morning";
    {
        let message = "Good afternoon";
        console.log("Hello " + message);
    }
    let c = function hello2() {
        console.log("I am a " + message)
    }
    return c;
}
d = hello1();
d();
// Hello Good afternoon
// I am a Good morning

//^ here no c() was done yet hello2 was executed along with message available in its scope

function hello1() {
    let message = "Good morning";
    {
        let message = "Good afternoon";
        console.log("Hello " + message);
    }
    let c = function hello2() {
        console.log("I am a " + message)
    }
    message = "Anime"
    return c;
}
d = hello1();
d();
// Hello Good afternoon
// I am a Anime


function returnFunc() {
    const x = () => {
        let a = 1;
        console.log(a);
        let y = () => {
            let a = 2;
            console.log(a)
            let z= () => {
                let a = 3;
                console.log(a)
            }
            z();
        }
        y();
    }
    return x;
}

let e = returnFunc();
e();
/*
1
2
3
*/


//Nested code in closurs, inside functions are called along with updated value and not previous parent value, each closure looks up its chain of function, and if no found then looks in global variables
function returnFunc() {
    const x = () => {
        let a = 1;
        console.log(a);
        let y = () => {
            // let a = 2;
            console.log(a)
            let z= () => {
                // let a = 3;
                console.log(a)
            }
            
            z();
        }
        a=99;
        y();
    }
    return x;
}

let f = returnFunc();
f();
/*
1
99
99
*/