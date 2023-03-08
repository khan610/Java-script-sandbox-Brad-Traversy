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

const name = 'Khan';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

function hello() {
  return 'hello';
}

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;
