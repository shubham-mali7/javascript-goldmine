// undefined 
// null 

// let firstName;
// console.log(firstName); // o/p undefined  also in case of var 
// console.log(typeof firstName); // o/p undefined  also in case of var 
// firstName = "shubham";
// console.log(firstName);
// console.log( typeof firstName, firstName); // op string shubham 

//zero matlab zero (0) , null matlab kuch nahi 

// let mystring = null;
// console.log(mystring) // op null
// console.log(typeof mystring) // op object ----> bug/historical mistake of javascript 
// // type of null is actually "null" , but when you check it through typeof operator it shows object which is actually a historical mistake of js 

// BigInt
// let myNumber = BigInt(12); // using bigInt constructor 
// console.log(myNumber);
// let mysameNumber = Number.MAX_SAFE_INTEGER;
// console.log(mysameNumber);
// let secondNumber = BigInt(15252626272728282929292);
// console.log(secondNumber);
// let samenumber = 14n; // another way of writing a bigInt 
// console.log(typeof samenumber);
// console.log(myNumber + samenumber); // 26n 

// Maths operation of bigInt can happen with bigInt only 