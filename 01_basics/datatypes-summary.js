//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "dogesh"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack and heap memory usage
// Stack (Primitive), Heap(Non-Primitive)
// Primitive data types provide a copy while non-primitive data-types provide a reference

/*
let myytname = "helloboi";
let another_name = myytname;

another_name = "hi"

console.log(myytname); outputs => helloboi
console.log(myytname); outputs => hi

## A Copy of myytname is assigned to another_name so myytname remains unchanged while changing another_name
*/

/*
let user_one = {
    name: "suresh",
    gender: "Male"
}

let user_two = user_one

user_two.name = "sita"

console.log(user_one);
console.log(user_two);

## Changing user_two data will affect user_one
*/




