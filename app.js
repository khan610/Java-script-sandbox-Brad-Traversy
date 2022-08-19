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

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = 'Hello there my name is Brad';
// const tags = 'web desing, web developmnet, programming';

// let val;

// val = firstName + lastName;

// // Concatenation
// val = firstName + ' ' + lastName;

// console.log(val);

// // Append
// val = 'Brad ';
// val += 'Traversy';

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// // Escaping
// val = "That's awesome, I can't wait";

// // Length
// val = firstName.length;

// // concat
// val = firstName.concat(' ', lastName);

// // Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2];

// // indexOf
// val = indexOf('1');
// val = firstName.lastIndexOf('1');

// // chArt
// val = firstName.charAt('2');
// // Get last char
// val = firstName.charAt(firstName.length - 1);

// // substring
// val = firstName.substring(0, 4);

// // slice
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// // split
// val = str.split(' ');
// val = tags.split(',');

// // replace
// val = str.replace('Brad', 'Jack');

// // includes
// val = str.includes('Hello');

// console.log(val);

//

//

///////////////// Template Literals

// //

// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// function hello() {
//   return 'hello';
// }

// html = `
// <ul>
//   <li>NameL ${name}</li>
//   <li>Age: ${age}</li>
//   <li>Job: ${job}</li>
//   <li>City: ${city}</li>
//   <li>${2 + 2}</li>
//   <li>${hello()}</li>
//   <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
// </ul>
// `;

// document.body.innerHTML = html;

//  // // // // Arrays & Array Methods

//

//

// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22, 45, 33, 76, 54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// val = numbers[0];
// // Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(36);

// // MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshifht(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1, 3);
// // Reverse
// numbers.reverse();

// // Concatenate array (spoji sve vrednosti u jedan array)
// val = numbers.concat(numbers2);

// // Sorting arrays
// val = fruit.sort();
// val = numbers.sort();

// // Use the "compare function"
// val = numbers.sort(function (x, y) {
//   return x - y;
// });

// // Reverse sort
// val = numbers.sort(function (x, y) {
//   return y - x;
// });

// // Find
// function over50(num) {
//   return num > 50;
// }

// val = numbers.find(over50);

// console.log(numbers);
// console.log(val);

// const person = {
//   firstName: 'Steve',
//   lastName: 'Smith',
//   age: 30,
//   email: 'steve@aol.com',
//   hobbies: ['music', 'sports'],
//   address: {
//     city: 'Miami',
//     state: 'FL',
//   },
//   getBirthYear: function () {
//     return 2017 - this.age;
//   },
// };

// let val;

// val = person;
// // Get specific value
// val = person.firstName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.getBirthYear();

// console.log(val);

// const people = [
//   { name: 'John', age: 30 },
//   { name: 'Mike', age: 23 },
//   { name: 'Nancy', age: 44 },
// ];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
// }

//

// //              Dates and Times

// //

// let val;

// const today = new Date('1-1-2017');
// let birthday = new Date('9-10-1981 11:25:00');
// birthday = new Date('September 10 1981');
// birthday = new Date('9/10/1981');

// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();

// console.log(val);

//

//

//

// const id = 100;

// // EQUAL TO
// if (id == 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if (id != 101) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if (id === 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if (id !== 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // GREATER OR LESS THAN
// if (id > 200) {
//   console.log('CORRECT');
// } else {
// //   console.log('INCORRECT');
// // }

// const color = 'yellow';

// if (color === 'red') {
//   console.log('Color is red');
// } else if (color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// // LOGICAL OPERATORS

// const name = 'Steve';
// const age = 25;

// // And &&
// if (age > 0 && age < 12) {
//   console.log(`${name} is a child`);
// } else if (age >= 13 && age <= 19) {
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adult`);
// }

// // OR ||
// if (age < 16 || age > 65) {
//   console.log(`${name} can not run in race`);
// } else {
//   console.log(`${name} is registered for the race`);
// }

// // TERNARY OPERATOR
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

//

//

// SWITCHES

//

// const color = 'red';

// switch (color) {
//   case 'red':
//     console.log('Color is red');
//     break;
//   case 'blue':
//     console.log('Color is blue');
//     break;
//   default:
//     console.log('Color is not red or blue');
//     break;
// }

// switch (new Date().getDay()) {
//   case 1:
//     day = 'Sunday';
//     break;
//   case 2:
//     day = 'Monday';
//     break;
//   case 3:
//     day = 'Tuesday';
//     break;
//   case 4:
//     day = 'Wednesday';
//     break;
//   case 5:
//     day = 'Thursday';
//     break;
//   case 6:
//     day = 'Friday';
//     break;
//   case 7:
//     day = 'Suturday';
//     break;
// }

// // FUNCTION DECLARATIONS

// function greet(firstName = 'John', lastName = 'Doe') {
//   //console.log('Hello');
//   return 'Hello' + firstName + ' ' + lastName;
// }

// // console.log(greet('Steve', 'Ninic'));

// // FUNCTION EXPRESIONS

// const square = function square(x = 3) {
//   return x * x;
// };

// // console.log(square());

// // IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// // (function () {
// //   console.log('IIFE Ran..');
// // })();

// // (function (name) {
// //   console.log('Hello ' + name);
// // })('Brad');

// // PROPERTY METHODS - When function is put inside object its called method

// const todo = {
//   add: function () {
//     console.log('Add todo...');
//   },
//   edit: function (id) {
//     console.log(`Edit todo ${id}`);
//   },
// };

// todo.delete = function () {
//   console.log('Delete todo....');
// };

// todo.add();
// todo.edit(22);
// todo.delete();

//

// GENERAL LOOPS

//

// FOR LOOP

// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log('2 is my favorite number');
//     continue;
//   }

//   if (i === 5) {
//     console.log('Stop the loop');
//     break;
//   }

//   console.log('Number ' + i);
// }

// WHILE LOOP

// let i = 0;

// while (i < 10) {
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE

// let i = 0;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while (i < 10);

// // LOOP THROUGH ARRAY
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
// cars[1];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// // FOREACH
// cars.forEach(function (car) {
//   console.log(car);
// });
