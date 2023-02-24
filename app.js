console.log("Hello, I am the first JS lesson");

// Number
let age = 18;
console.log("Type of age is", typeof age);

// String
let text = "welcome";
console.log("Type of text is", typeof text);

// Boolean
const myBoolean = true;
const yourBoolean = false;
console.log("Type of myBoolean is", typeof myBoolean, "and Type of yourBoolean is also", typeof yourBoolean);

// Undefined
let someUndefined;
console.log("Type of someUnefined is", typeof someUndefined);

// Null
let nullData = null;
console.log("Type of nullData is", typeof nullData);

const myName = "Mariami";
let myHobby = "reading";
const yearOfBirth = 1996;
let currentYear = 2023;

// Syntax 1
console.log("My name is", myName);
console.log("I am", currentYear - yearOfBirth, "years old and my hobby is", myHobby);

// Syntax 2
let myAge = currentYear - yearOfBirth;
let sentence = `My name is ${myName}. I am ${myAge} years old and my hobby is ${myHobby}`;
console.log(sentence);

