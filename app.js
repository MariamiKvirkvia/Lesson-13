console.log("Hello, I am the first JS lesson.");

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
console.log("Type of someUndefined is", typeof someUndefined);

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


// Let's check how smart is my browser :)
console.log(`Let's check how smart is my browser.`);
const num1 = 456382;
const num2 = 790352;
const num3 = 109378;
const num4 = 999997;

let sum = num1 + num4;
console.log(`Sum of ${num1} and ${num2} is ${sum}.`);
let substract = sum - num2;
console.log(`When ${num2} is substracted from ${sum} we are getting ${substract}.`);
let division = sum / substract;
console.log("To devide", sum, "by", substract, "the browser will get", division,".");
let multiply = num3 * num2;
console.log("Can my browser guess what is", num3, "multiplied by", num2, "? - The answer is:", multiply);
let modulo = sum % multiply;
console.log(`Final queston: what is the modulo of ${sum} devided by ${multiply}? - The answer is ${modulo}`);
console.log(`Okay, browser seems to have some brain :)`);
