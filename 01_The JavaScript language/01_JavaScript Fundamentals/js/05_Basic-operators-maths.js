"use strict";

console.log(2 ** 0);
console.log(2 ** 1);
console.log(2 ** 2);
console.log(2 ** 3);
console.log(2 ** 4);
console.log(2 ** 5);
console.log(2 ** 6);
console.log(2 ** 7);
console.log(2 ** 8);
console.log(2 ** 9);
console.log(2 ** 10);

console.log(4 ** (1 / 2));
console.log(27 ** (1 / 3));

let myString = "my" + " " + "string";
console.log(myString);

console.log(1 + 2 + "3");
console.log("1" + 2 + 3);
console.log("6" / 2);
console.log("6" - 2);

let apples = "2";
let oranges = "3";
console.log(apples + oranges);
console.log(+apples + +oranges);
console.log(Number(apples) + Number(oranges));

let n = 5;
n += 2;
n *= 3;
console.log(n);

let counter = 0;
counter++;
++counter;
console.log(counter);

let a = 1;
let b = 1;
let c = ++a;
let d = b++;
console.log(a); // 2
console.log(b); // 2
console.log(c); // 2
console.log(d); // 1

a = 2;
let x = 1 + (a *= 2);
console.log(a); // 4
console.log(x); // 5

console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(" \t \n" - 2);

let aa = prompt("First number?", 1);
let bb = prompt("Second number?", 2);
alert(+aa + +bb);
