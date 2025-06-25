// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // outputs false
console.log(null == 0); // outputs false
console.log(null >= 0); // outputs true

/*
Equality and comparison operators work differently in js.
Comparison operators convert null to a number, treating it as 0
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);
