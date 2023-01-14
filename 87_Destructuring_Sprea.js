let arr1 = [3, 5];
let [a, b] = arr1;
//Traditonally let a = arr[0], b= arr[1]
console.log([a, b])//[ 3, 5 ]

let arr2 = [3, 5, 8];
let [c, d] = arr2;
console.log([c, d])//[3, 5]
//If there are more number of variables than values then there will be error

let arr3 = [3, 5, 8, 12, 7, 6];
let [e, f, g, ...rest] = arr3;
console.log([e, f, g])//[3, 5, 8]
console.log(rest)//[12, 7, 6]
console.log([e, f, g, rest])//[ 3, 5, 8, [ 12, 7, 6 ] ]

let arr4 = [3, 5, 8, 12, 7, 6];
let [x, , , ...rest1] = arr3;//5 and 8 are not assigned to any because 2 places empty
console.log(x)//3
console.log(rest1)//[12, 7, 6]
console.log([x, rest1])//[ 3, [ 12, 7, 6 ] ]

let [x1, , y1, ...rest2] = arr3;//5 no assigned to any because empty 
console.log(x1, y1, rest2)//3 8 [ 12, 7, 6 ]


let { a1, b1 } = { a1: 1, b1: 5 };
console.log(a1, b1);//1 5


//Spread operator is used in array or strings to be expanded in places where 0 or more args are expected 
//Objects are enumnerated and key value pairs are added to objects being created

let ar1 = [3, 5, 8];
let obj1 = { ...ar1 };
console.log(obj1)//{ '0': 3, '1': 5, '2': 8 }



function sum(v1, v2, v3) {
    return v1 + v2 + v3;
}
console.log(sum(...ar1))//16



let obj2 = {
    name: "Harry",
    company: "Company xyz",
    address: "XYZ"
}
//Spread operate along with changing values
console.log({ ...obj2, name: "John" })//{ name: 'John', company: 'Company xyz', address: 'XYZ' }

//Writing the object after assigning doesnt do anything because object was expanded later
console.log({ name: "John", ...obj2, })//{ name: 'Harry', company: 'Company xyz', address: 'XYZ' }