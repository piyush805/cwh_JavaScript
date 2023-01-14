//Throwing custom error to user 
//Error object has two main properties, name and message
try {
    console.log(rahul)
} catch (error) {
    console.log("Name:", error.name)//ReferenceError
    console.log("Message:", error.message)//rahul is not defined
    console.log("Stack:", error.stack)//prints full error lines
}

try {
    throw new Error("error msg")
} catch (error) {
    console.log("Name:", error.name)//Error
    console.log("Message:", error.message)//error msg
    console.log("Stack:", error.stack)//Error: error msg...
}
try {
    throw new ReferenceError("error msg")
} catch (error) {
    console.log("Name:", error.name)//ReferenceError
    console.log("Message:", error.message)//error msg
    console.log("Stack:", error.stack)//ReferenceError: error msg...
}

