// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2, 33, 3, 5, 545, 6, 3);
// val = Math.max(3, 34, 545, 344, 3232, 122, 2, 4);
// val = Math.random();

// val = Math.floor(Math.random * 20 + 1);

// console.log(val);

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web desing, web developmnet, programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

console.log(val);

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = "That's awesome, I can't wait";

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf
val = indexOf('1');
val = firstName.lastIndexOf('1');

// chArt
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0, 4);

// slice
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split
val = str.split(' ');
val = tags.split(',');

// replace
val = str.replace('Brad', 'Jack');

// includes
val = str.includes('Hello');

console.log(val);
