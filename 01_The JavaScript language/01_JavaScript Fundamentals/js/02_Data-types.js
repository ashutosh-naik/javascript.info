"use strict";

let message = "hello";
message = 12345;
console.log(message);

let n = 123;
n = 12.345;
console.log(n);

console.log(1 / 0); // Infinity

console.log("not a number" / 2); // NaN, such division is erroneous

console.log(NaN + 1); // NaN
console.log(3 * NaN); // NaN
console.log("not a number" / 2 - 1); // NaN

console.log(NaN ** 0); // Exception

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

let str = "Hello"; // Double quotes
let str2 = "Single quotes are ok too"; // Single quotes
let phrase = `can embed another ${str}`; // Backticks

let name = "John";
// embed a variable
console.log(`Hello, ${name}!`); // Hello, John!
// embed an expression
console.log(`the result is ${1 + 2}`); // the result is 3

let isGreater = 4 > 1;
console.log(isGreater);

let age;
console.log(age); // shows "undefined"

let age1 = 100;
// change the value to undefined
age1 = undefined;
console.log(age1); // "undefined"

typeof undefined; // "undefined"
typeof 0; // "number"
typeof 10n; // "bigint"
typeof true; // "boolean"
typeof "foo"; // "string"
typeof Symbol("id"); // "symbol"
typeof Math; // "object"
typeof null; // "object"
typeof alert; // "function"

let title = "Ashutosh";
console.log(`hello ${1}`);
console.log(`hello ${"name"}`);
console.log(`hello ${title}`);
