//Finally will execute irrespective of whether there was an error or not
//Code in it will execute, no matter what happens in try and catch block, be it error, success, or return 
try{
    console.log(rahul)
}catch(err){
    console.log("Error handled")
}finally{
    console.log("Finally clause")
}

/*Output:
    Error handled
    Finally clause
*/


try{
    console.log(2+3)
}catch(err){
    console.log("Error handled")
}finally{
    console.log("Finally clause")
}
/*Output:
    5
    Finally clause
*/

/*Finally cause may seem useless at first because later script will execute anyway after try-catch, but one usecase is 
1) -   when catch block throws an error then without finally clause, code execution will stop right there, so in order to handle this situtation, finally clause is used so that that block of code executes irrespective of succesful/errorneous execution
2) -   Finally also runs even if there is a try or catch block have return statement in them
*/