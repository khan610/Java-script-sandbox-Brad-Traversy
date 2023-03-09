// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 34;
// const str = 'Hello there my name is Khan';
// const tags = 'web design,web development, programming';

// let val;

// val = firstName + lastName;

// // Concatenation
// val = firstName + ' ' + lastName;

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

// // indexOf()
// val = firstName.indexOf('l');
// val = firstName.indexOf('l');

// // charAt()
// val = firstName.charAt('4');
// // Get last char
// val = firstName.charAt(firstName.length - 1);

// // substring()
// val = firstName.substring(0, 4);

// // slice()
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// // split()
// val = str.split(' ');
// val = tags.split(',');

// // replace()
// val = str.replace('Khan', 'Andrea');

// // includes()
// val = str.includes('foo');

// val = console.log(val);

// const name = 'Khan';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// function hello() {
//   return 'hello';
// }

// html = `
//   <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City ${city}</li>
//     <li>${2 + 2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//   </ul>
// `;

// Create some arrays
// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22, 45, 33, 75, 54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// // Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(36);

// // MUTATING ARRAYS
// // Add on to end
// // numbers.push(250);
// // // Add on to front
// // numbers.unshift(120);
// // // Take off from end
// // numbers.pop();
// // // Take off from front
// // numbers.shift();
// // // Splice values
// // numbers.splice(1, 3);
// // // Reverse
// // numbers.reverse();

// // Concatonate array
// val = numbers.concat(numbers2);

// // Sorting arrays
// val = fruit.sort();
// // val = numbers.sort();

// // // Use the "comapre function"
// // val = numbers.sort(function (x, y) {
// //   return x - y;
// // });

// // // Reverse sort
// // val = numbers.sort(function (x, y) {
// //   return y - x;
// // });

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
//   adress: {
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
// val = person.adress.state;
// val = person.adress['city'];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//   { name: 'John', age: 30 },
//   { name: 'Mike', age: 23 },
//   { name: 'Khan', age: 34 },
// ];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
// }

const id = 100;

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

// // NOT EQUAL TO VALUE & TYPE
// if (id !== 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Test if UNDEFINED
// if (typeof id) {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// GREATER OR LESS THAN
// if (id <= 200) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// IF ELSE

// const color = 'yellow';

// if (color === 'red') {
//   console.log('Color is red');
// } else if (color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS

// const name = 'Steve';
// const age = '20';

// // AND &&
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

const color = 'yellow';

switch (color) {
  case 'red':
    console.log('Color is red');
    break;

  case 'blue':
    console.log('Color is blue');
    break;

  default:
    console.log('Color is not red or blue');
    break;
}

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);
