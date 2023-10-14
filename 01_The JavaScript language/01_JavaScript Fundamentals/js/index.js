"use strict";

// Variables
/*
  let admin;
  let name = "John";
  admin = name;
  alert(admin);

  let ourPlanetName = "Earth";
  let currentUserName = "John";
*/

// Data types
/*
  console.log(NaN ** 0);

  console.log(9007199254740991 + 1);
  console.log(9007199254740991 + 2);

  console.log(typeof undefined);
  console.log(typeof 0);
  console.log(typeof 10n);
  console.log(typeof true);
  console.log(typeof "foo");
  console.log(typeof Symbol("id"));
  console.log(typeof Math);
  console.log(typeof null);
  console.log(typeof alert);
*/

// Interaction: alert, prompt, confirm
/*
  let age = prompt(`How old are you?`);
  alert(`You are ${age} years old.`);

  let isBoss = confirm(`Are you the Boss`);
  alert(isBoss);
*/

// Type Conversions
/*
  let value = true;
  console.log(typeof value);

  value = String(value);
  console.log(typeof value);

  console.log("6" / "2");

  let str = "123";
  console.log(typeof str);
  let num = Number(str);
  console.log(typeof num);

  console.log(Number("123"));
  console.log(Number("123z"));
  console.log(Number(true));
  console.log(Number(false));

  console.log(Boolean(1));
  console.log(Boolean(0));
  console.log(Boolean("Hello"));
  console.log(Boolean(""));
  console.log(Boolean("0"));
  console.log(Boolean(" "));
*/

// Basic operators, maths
/*
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

  let a = prompt("First number?", 1);
  let b = prompt("Second number?", 2);
  alert(+a + +b);
*/

// Comparisons
/*
  console.log("Z" > "A");
  console.log("Glow" > "Glee");
  console.log("Bee" > "Be");

  console.log("2" > 1);
  console.log("04" == 4);

  let a = 0;
  console.log(Boolean(a));

  let b = "0";
  console.log(Boolean(b));

  console.log(a == b);

  console.log(0 == false);
  console.log(0 === false);
  console.log("" == false);

  console.log(null == undefined);
  console.log(null === undefined);

  console.log(null > 0);
  console.log(null == 0);
  console.log(null >= 0);

  console.log(undefined > 0);
  console.log(undefined < 0);
  console.log(undefined == 0);

  console.log(5 > 4);
  console.log("apple" > "pineapple");
  console.log("2" > "12");
  console.log(undefined == null);
  console.log(undefined === null);
  console.log(null == "\n0\n");
  console.log(null === +"\n0\n");
*/

// Conditional branching: if, '?'
/*
  let accessAllowed;
  let age = prompt(`How old are you?`);

  accessAllowed = age > 18 ? "Access allowed!" : "Access now allowed.";
  console.log(accessAllowed);

  age = prompt("Age?", 18);

  let message =
    age < 3
      ? "Hi, baby!"
      : age < 18
      ? "Hello!"
      : age < 100
      ? "Greetings!"
      : "What an unusual age!";

  console.log(message);

  let company = prompt(`Which company created JavaScript?`);
  company == `Netscape` ? console.log(`Right!`) : console.log(`Wrong.`);

  let result = a + b < 4 ? "Below" : "Over";

  message =
    login == "Employee"
      ? "Hello!"
      : login == "Director"
      ? "Greetings!"
      : login == ""
      ? "No login!"
      : "";
*/

// Logical operators
/*
  console.log(1 || 0);
  console.log(null || 1);
  console.log(null || 0 || 1);
  console.log(undefined || null || 0);

  let firstName = "";
  let lastName = "";
  let nickName = "SuperCoder";
  console.log(firstName || lastName || nickName || "Anonymous");

  let hour = 12;
  let minute = 30;
  if (hour == 12 && minute == 30) {
    console.log(`The time is ${hour}:${minute}`);
  }

  console.log(1 && 0);
  console.log(1 && 5);

  console.log(1 || 0);
  console.log(1 || 5);

  console.log(null && 5);
  console.log(0 && "no matter what");

  console.log(null || 5);
  console.log(0 || "no matter what");

  console.log(1 && 2 && null && 3);
  console.log(1 || 2 || null || 3);
  console.log(1 && 2 && 3);

  console.log(!true);
  console.log(!0);

  console.log(!!"non empty string");
  console.log(!!null);

  console.log(Boolean("non empty string"));
  console.log(Boolean(null));

  console.log(null || 2 || undefined);
  console.log(console.log(1) || 2 || console.log(3));
  console.log(1 && null && 2);
  console.log(console.log(1) && console.log(2));
  console.log(null || (2 && 3) || 4);

  let age = 23;
  if (age >= 14 && age <= 90) {
    console.log("Inclusively");
  }

  if (-1 || 0) console.log("first");
  if (-1 && 0) console.log("second");
  if (null || (-1 && 1)) console.log("third");

  let userName = prompt(`Who's there?`);
  if (userName === "Admin") {
    let pass = prompt(`Password?`);
    if (pass === "TheMaster") {
      console.log("Welcome!");
    } else if (pass === "" || pass === null) {
      console.log("Canceled");
    } else {
      console.log("Wrong password");
    }
  } else if (userName === "" || userName === null) {
    console.log("Canceled");
  } else {
    console.log("I don't know you!");
  }
*/

// Nullish coalescing operator '??'
/*
  console.log(null ?? undefined ?? 1);

  let user;
  console.log(user ?? "Anonymous");

  let firstName = null;
  let lastName = null;
  let userName = "SuperCoder";
  console.log(firstName ?? lastName ?? userName ?? "Anonymous");
  console.log(firstName || lastName || userName || "Anonymous");

  let height = 0;
  console.log(height || 100);
  console.log(height ?? 100);

  height = null;
  let width = null;
  let area = (height ?? 100) * (width ?? 50);
  console.log(area);

  let x = (1 && 2) ?? 3;
  console.log(x);
*/

// Loops: while and for
/*
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }

  let j = 0;
  do {
    console.log(j);
    j++;
  } while (j < 5);

  let k;
  for (k = 0; k < 5; k++) {
    console.log(k);
  }

  let sum = 0;
  while (true) {
    let value = +prompt(`Enter a number?`);

    if (!value) break;

    sum += value;
  }
  console.log(`Sum: ` + sum);

  for (i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
  }

  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      let input = prompt(`Value at coords (${i},${j})`);
    }
  }
  alert(`Done!`);

  outer: for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      let input = prompt(`Value at coords (${i},${j})`);

      if (!input) break outer;
    }
  }
  alert(`Done!`);

  i = 3;
  while (i) {
    console.log(i--);
  }

  while (++i < 5) {
    console.log(i);
  }

  i = 0;
  while (i++ < 5) {
    console.log(i);
  }

  for (i = 0; i < 5; i++) {
    console.log(i);
  }

  for (i = 0; i < 5; ++i) {
    console.log(i);
  }

  for (i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }

  i = 0;
  while (i < 3) {
    console.log(`number ${i}!`);
    i++;
  }

  let num;
  do {
    num = prompt("Enter a number greater than 100?");
  } while (num <= 100 && num);

  let n = 10;
  nextPrime: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    console.log(i);
  }
*/

// The "switch" statement
/*
  let a = 2 * 2;

  switch (a) {
    case 3:
      console.log("Too small");
      break;
    case 4:
      console.log("Exactly!");
      break;
    case 5:
      console.log("Too big");
      break;
    default:
      console.log("I don't know such value");
  }

  a = "1";
  let b = 0;

  switch (+a) {
    case b + 1:
      console.log("this runs, because +a is 1, exactly equals b+1");
      break;
    default:
      console.log("this doesn't run");
  }

  a = 3;

  switch (a) {
    case 4:
      console.log("Right!");
      break;
    case 3:
      console.log("Wrong!");
    case 5:
      console.log("Why don't you take a math class?");
      break;
    default:
      console.log("The result is strange. Really.");
  }

  let arg = prompt("Enter a value?");
  switch (arg) {
    case "0":
    case "1":
      console.log("One or zero");
      break;
    case "2":
      console.log("Two");
      break;
    case 3:
      console.log("Never executes!");
      break;
    default:
      console.log("Unknown value");
  }

  let browser = "Chrome";
  if (browser == "Edge") {
    console.log("You've got the Edge!");
  } else if (
    browser == "Chrome" ||
    browser == "Firefox" ||
    browser == "Safari" ||
    browser == "Opera"
  ) {
    console.log("Okay we support these browsers too");
  } else {
    console.log("We hope that this page looks ok!");
  }

  let a = +prompt("a?");
  switch (a) {
    case 0:
      console.log(0);
      break;
    case 1:
      console.log(1);
      break;
    case 2:
    case 3:
      console.log("2,3");
      break;
  }
*/

// Functions
/*
  let language = "JavaScript";
  function showMessage1() {
    language = "Java";
    let message = `Hello, I'm ${language}!`;

    console.log(message);
  }
  console.log(language);
  showMessage1();
  showMessage1();
  console.log(language);

  function showMessage2(from, text) {
    from = "*" + from + "*";
    console.log(from + ": " + text);
  }
  let from = "Ashutosh";
  showMessage2(from, "Hello!");
  showMessage2(from, "What's up?");
  console.log(`${from}!`);

  function showMessage3(from, text = "no text given") {
    from = "*" + from + "*";
    console.log(from + ": " + text);
  }
  showMessage3("Ashutosh");

  function showCount(count) {
    console.log(count ?? "unknown");
  }
  showCount(0);
  showCount(null);
  showCount(undefined);
  showCount();

  function sum(a, b) {
    return a + b;
  }
  let result = sum(7, 5);
  console.log(result);

  function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm("Do you have permission from your parents?");
    }
  }

  let age = prompt("How old are you?");

  if (checkAge(age)) {
    alert("Access granted");
  } else {
    alert("Access denied");
  }

  function doNothing() {
    return;
  }
  console.log(doNothing() === undefined);

  function showPrime(n) {
    nextPrime: for (let i = 2; i < n; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
      console.log(i);
    }
  }
  showPrime(10);

  function showPrimes(n) {
    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
      console.log(i);
    }
  }

  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) return false;
    }
    return true;
  }
  showPrimes(10);

  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    return confirm("Did parents allow you?");
  }
  checkAge(18);

  function checkAge(age) {
    return age > 18 || confirm("Did parents allow you?");
  }
  checkAge(18);

  function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  let result1 = min(2, 5);
  let result2 = min(3, -1);
  let result3 = min(1, 1);
  console.log(result1);
  console.log(result2);
  console.log(result3);

  function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  }
  let result1 = pow(3, 2);
  let result2 = pow(3, 3);
  let result3 = pow(1, 100);
  console.log(result1);
  console.log(result2);
  console.log(result3);
*/

// Function expressions
/*
  function sayHi() {
    console.log("Hi!");
  }

  let func1 = sayHi;
  func1();
  sayHi();

  let sayHello = function () {
    console.log("HELLO!");
  };

  let func2 = sayHello;
  func2();
  sayHello();

  function ask(question, yes, no) {
    if (confirm(question)) {
      yes();
    } else {
      no();
    }
  }

  ask(
    "Do you agree?",
    function () {
      alert("Yes agreed.");
    },
    function () {
      alert("You canceled the execution.");
    }
  );

  Function Declaration
  function sum(a, b) {
    return a + b;
  }

  Function Expression
  let sum = function (a, b) {
    return a + b;
  };

  sayHi("Ashutosh");
  function sayHi(name) {
    console.log(`Hello, ${name}!`);
  }

  let age = prompt("What is your age?");

  let welcome;

  if (age < 18) {
    welcome = function () {
      console.log("Hello!");
    };
  } else {
    welcome = function () {
      console.log("Greetings!");
    };
  }
  welcome();
*/

// Arrow functions, the basics
/*
  let sum = (a, b) => a + b;
  console.log(sum(4, 5));

  let double = (n) => n * 2;
  console.log(double(5));

  let sayHi = () => console.log("Hi!");
  sayHi();

  let age = prompt("What is your age?");
  let welcome =
    age < 18 ? () => console.log("Hello!") : () => console.log("Greetings!");
  welcome();

  let sum = (a, b) => {
    let result = a + b;
    return result;
  };
  console.log(sum(2, 3));

  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );
*/

// JavaScript specials
/*
let userName = prompt("Your name?", "Ashutosh");
let isTeaWanted = confirm("Do you want some tea?");

alert("Visitor: " + userName);
alert("Tea wanted: " + isTeaWanted);
*/
