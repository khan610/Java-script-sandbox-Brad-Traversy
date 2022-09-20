// let val;

// val = document;
// val = document.all;
// val = document.all[3];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scripts.forEach(function (script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);

// document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // document.getelementById('task-title).style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// // document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:last-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelect('li:nth-child(even)').style.background = '#f4f4f4';

// // document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// let listItems = document
//   .querySelector('ul')
//   .getElementsByClassName('collection-item');

// console.log(listItems);

// // document.getElementsByTagName
// const lis = document.getElementsByTagName('li');
// console.log(lis);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// // Convert HTML Collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function (li, index) {
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// // document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function (item, index) {
//   item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function (li, index) {
//   li.style.background = '#ccc';
// });

// for (let i = 0; i < liEven.length; i++) {
//   liEven[i].style.background = '#f4f4f4';
// }

// console.log(items);

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // Get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// // Get children element nodes
// val = list.children;
// val = list.children[0];
// list.children[0].textContent = 'Hello';
// // Children of children
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children;

// // First child
// val = list.firstChild;
// val = list.firstElementChild;

// // Last child
// val = list.lastChild;
// val = list.firstElementChild;

// // Count child elements
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling;
// val =
//   listItem.nextElementSibling.nextElementSibling.previousElementSiblingSibling;

// // Get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// console.log(val);

// Create Element

// const li = document.createElement('li');

// // Add class

// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add attribute
// li.setAttribute('title', 'New Item');

// // Create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// // Create new link element
// const link = document.createElement('a');
// // Add classes
// link.className = 'delete-item secondary-content';
// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append link into li
// li.appendChild(link);

// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

// REPLACE ELEMENT

// Create Element
// const newHeading = document.createElement('h2');
// // Add id
// newHeading.id = 'task-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get the old heading
// const oldHeading = document.getElementById('task-title');
// // Parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // Remove list item
// lis[0].remove();

// // Remove child element
// list.removeChild(lis[3]);

// // Classes & ATTR
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'Google');

// val = link.hasAttribute('href');
// link.removeAttribute('title');

// console.log(val);

// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//   console.log('Hello World');

//   // e.preventDefault()
// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e) {
//   console.log('Clicked');

// //   let val;

// //   val = e;

// //   // Event target elemnt
// //   val = e.target;
// //   val = e.target.id;
// //   val = e.target.className;
// //   val = e.target.classList;

// //   // Event type
// //   val = e.type;

// //   // Timestamp
// //   val = e.timeStamp;

// //   // Coords event relative to the window
// //   val = e.clientY;
// //   val = e.clientX;

// //   // Coords event relative to the element
// //   val = e.offsetY;
// //   val = e.offsetX;

// //   console.log(val);
// // }

// // const clearBtn = document.querySelector('.clear-tasks');
// // const card = document.querySelector('.card');
// // const heading = document.querySelector('h5');

// // // // Click
// // // clearBtn.addEventListener('click', runEvent);
// // // // Doubleclick
// // // clearBtn.addEventListener('dblclick', runEvent);
// // // MouseDown
// // clearBtn.addEventListener('mousedown', runEvent);
// // // MouseUp
// // clearBtn.addEventListener('mouseup', runEvent);
// // // Mouse enter
// // card.addEventListener('mouseenter', runEvent);
// // // Mouse leave
// // card.addEventListener('mouseleave', runEvent);

// // // Mouse over
// // card.addEventListener('mouseover', runEvent);
// // // Mouse out
// // card.addEventListener('mouseout', runEvent);

// // // Mousemove
// // card.addEventListener('mousemove', runEvent);

// // // EventHandler
// // function runEvent(e) {
// //   console.log(`EVENT TYPE: ${e.type}`);

// //   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

// //   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// // }

// // const form = document.querySelector('form');
// // const taskInput = document.getElementById('task');
// // const heading = document.querySelector('h5');
// // const select = document.querySelector('select');

// // // Clear input
// // taskInput.value = '';

// // // form.addEventListener('submit', runEvent)

// // // KEYDOWN
// // taskInput.addEventListener('keydown', runEvent);

// // // KEYUP
// // taskInput.addEventListener('keyup', runEvent);

// // // KEYPRESS
// // taskInput.addEventListener('keypress', runEvent);

// // // Focus
// // taskInput.addEventListener('focus', runEvent);

// // // Blur
// // taskInput.addEventListener('blur', runEvent);

// // // Cut
// // taskInput.addEventListener('cut', runEvent);

// // // Paste
// // taskInput.addEventListener('paste', runEvent);

// // // Input
// // taskInput.addEventListener('input', runEvent);

// // // Change
// // select.addEventListener('change', runEvent);

// // function runEvent(e) {
// //   console.log(`EVENT TYPE: ${e.type}`);

// //   // console.log(e.target.value);

// //   // heading.innerText = e.target.value;

// //   // // Get input value
// //   // console.log(taskInput.value);

// //   // e.preventDefault();
// // }

// // EVENT BUBBLING

// // document.querySelector('.card-title').addEventListener('click', function () {
// //   console.log('card title');
// // });

// // document.querySelector('.card-content').addEventListener('click', function () {
// //   console.log('card content');
// // });

// // document.querySelector('.card').addEventListener('click', function () {
// //   console.log('card');
// // });

// // document.querySelector('.col').addEventListener('click', function () {
// //   console.log('col');
// // });

// // EVENT DELGATION

// // const delItem = document.querySelector('.delete-item');

// // deleteItem.addEventListener('click', deleteItem);

// // document.body.addEventListener('click', deleteItem);

// // function deleteItem(e) {
// //   console.log('delete item');
// //   console.log(e.target);
// //   // if (e.target.parentElement.className === 'delete-item secondary-content') {
// //   //   console.log('delete item');
// //   // }
// //   if (e.target.parentElement.classList.contains('delete-item')) {
// //     console.log('delete item');
// //     e.target.parentElement.parentElement.remove();
// //   }
// // }

// // set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// // // set session storage item
// // sessionStorage.setItem('name', 'Beth');

// // // remove from storage
// // localStorage.removeItem('name');

// // get from storage
// // const name = localStorage.getItem('name');
// // const age = localStorage.getItem('age');

// // // clear local storage
// // localStorage.clear();

// // console.log(name, age);

// // document.querySelector('form').addEventListener('submit', function (e) {
// //   const task = document.getElementById('task').value;

// //   let tasks;

// //   if (localStorage.getItem('tasks') === null) {
// //     tasks = [];
// //   } else {
// //     tasks = JSON.parse(localStorage.getItem('tasks'));
// //   }

// //   tasks.push(task);

// //   localStorage.setItem('task', JSON.stringify(tasks));

// //   alert('Task saved');

//   e.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem(tasks));

// tasks.forEach(function (task) {
//   console.log(task);
// });

// Constructors and the 'this' Keyword

// // Person constructor
// function Person(name) {
//   this.name = name;
//   // this.age = age;
//   this.birthday = new Date(dob);
//   this.calcAge = function () {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   };
// }

// // const brad = new Person('Brad');
// // const john = new Person('John');

// const brad = new Person('Brad', '9-10-1981');
// console.log(brad.calculateAge());

// // String

// const name1 = 'Jeff';
// const name2 = new String('Jeff');

// //name2.foo = 'bar';
// //console.log(name2);

// console.log(typeof name2);

// if (name1 === 'Jeff') {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// // Number

// const num1 = 5;
// const num2 = new Number(5);

// console.log(num2);

// // Boolean

// const bool1 = true;
// const bool2 = new Boolean(true);

// // Function
// const getSum1 = function (x, y) {
//   return x + y;
// };

// const getSum2 = new Function('x', 'y', 'return 1 + 1');

// console.log(getSum1(1, 1));

// // Object
// const john = { name: 'John' };
// const john2 = new Object({ name: 'John' });
// console.log(john2);

// // Arrays
// const arr1 = [1, 2, 3, 4];
// const arr2 = new Array(1, 2, 3, 4);

// // Regular Expressions
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');

// console.log(re2);

//Object.prototype
//Person.prototype

// // Person constructor
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//   this.calculateAge = function () {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   };
// }

// // Calculate age
// Person.prototype.calculateAge = function () {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

// // Get full name
// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// // Gets Married
// Person.prototype.getMaried = function (newLastName) {
//   this.lastName = newLastName;
// };

// const john = new Person('John', 'Doe', '8-12-90');
// const mary = new Person('Mary', 'Johnson', 'March 20 1978');

// console.log(mary);

// console.log(john.calculateAge());

// console.log(mary.getFullName());

// mary.getsMaried('Smith');

// console.log(mary.getFullName());

// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName'));

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // Greeting
// Person.prototype.greeting = function () {
//   return `Hello there ${this.firstName} ${this.lastName}`;
// };

// const person1 = new Person('John', 'Doe');

// // console.log(person1.greeting());

// // Customer constructor
// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);

//   this.phone = phone;
//   this.membership = membership;
// }

// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// // Create customer
// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

// console.log(customer1);

// // Customer greeting
// Customer.prototype.greeting = function () {
//   return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
// };

// console.log(customer1.greeting());

// const personPrototypes = {
//   greeting: function () {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function (newLastName) {
//     this.lastName = newLastName;
//   },
// };

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getsMarried('Thompson');

// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//   firstName: { value: 'Brad' },
//   lastName: { value: 'Traversy' },
//   age: { value: 36 },
// });

// console.log(brad);

// console.log(brad.greeting());

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastname = lastName;
//     this.birthday = new Date(dob);
//   }

//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }

//   calculateAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   getsMarried(newLastName) {
//     this.lastName = newLastName;
//   }

//   static addNumbers(x, y) {
//     return x + y;
//   }
// }

// const mary = new Person('Mary', 'Williams', '11-13-1980');

// mary.getsMarried('Thompson');

// console.log(mary);

// console.log(Person.addNumbers(1, 2));

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }
// }

// class Customer extends Person {
//   constructor(firstName, lastName, phone, membership) {
//     super(firstName, lastName);

//     this.phone = phone;
//     this.membership = membership;
//   }

//   static getMembershipCost() {
//     return 500;
//   }
// }

// const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

// console.log(john.greeting);

// console.log(Customer.getMembershipCost());

// document.getElementById('button').addEventListener('click', loadData);

// function loadData() {
//   // Create an XHR Object
//   const xhr = new XMLHttpRequest();

//   // OPEN
//   xhr.open('GET', 'data.txt', true);

//   // Optional - Used for spinners/loaders
//   xhr.onprogress = function () {
//     console.log('READYSTATE', xhr.readyState);
//   };

//   xhr.onerror = function () {
//     console.log('Request error....');
//   };

//   xhr.onload = function () {
//     console.log('READYSTATE', xhr.readyState);
//     if (this.status === 200) {
//       console.log(this.responseText);
//       document.getElementById(
//         'output'
//       ).innerHTML = `<h1>${this.responseText}</h1>`;
//     }
//   };

//   // xhr.onreadystatechange = function () {
//   //   console.log('READYSTATE', xhr.readyState);
//   //   if (this.status === 200 && this.readyState === 4) {
//   //     console.log(this.responseText);
//   //   }
//   // };

//   xhr.send();

//   // readyState Values
//   // 0: request not initialized
//   // 1: server connection established
//   // 3: processing request
//   // 4: request finished and response is read

//   // HTTP Statuses
//   // 200: "OK"
//   // 403: "Forbidden"
//   // 404: "Not Found"
// }

// document.getElementById('button1').addEventListener('click', loadCustomer);

// document.getElementById('button2').addEventListener('click', loadCustomers);

// // Load Customer

// function loadCustomer(e) {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'customer.json', true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       const customer = JSON.parse(this.responseText);

//       const output = `
//         <ul>
//           <li>
//             ID: ${customer.id}
//           </li>
//           <li>Name: ${customer.name}
//           </li>
//           <li>Company: ${customer.company}</li>
//           <li>Phone: ${customer.phone}</li>
//         </ul>
//       `;

//       document.getElementById('customer').innerHTML = output;
//     }
//   };

//   xhr.send();
// }

// // Load Customers

// function loadCustomers(e) {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'customers.json', true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       const customers = JSON.parse(this.responseText);

//       let output = '';

//       customers.forEach(function (customer) {
//         output += `
//         <ul>
//           <li>
//             ID: ${customer.id}
//           </li>
//           <li> Name: ${customer.name}
//           </li>
//           <li> Company: ${customer.company}</li>
//           <li> Phone: ${customer.phone}</li>
//         </ul>
//       `;
//       });

//       document.getElementById('customer').innerHTML = output;
//     }
//   };

//   xhr.send();
// }

// const posts = [
//   { title: 'Post One', body: 'This is post one' },
//   { title: 'Post Two', body: 'This is post two' },
// ];

// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: 'Post Three', body: 'This is post three' });

// getPosts();

// function createPost(post) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       posts.push(post);

//       const error = true;

//       if (!error) {
//         resolve();
//       } else {
//         reject('Error: Something went wrong');
//       }

//       resolve();
//     }, 2000);
//   });
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: 'Post Three', body: 'This is post three' })
//   .then(getPosts)
//   .catch(function (err) {
//     console.log(err);
//   });

// document.getElementById('button1').addEventListener('click', getText);

// document.getElementById('button2').addEventListener('click', getJson);

// document.getElementById('button3').addEventListener('click', getExternal);

// // Get local text file data
// function getText() {
//   fetch('test.txt')
//     .then((res) => res.text())
//     .then((data) => {
//       console.log(data);
//       document.getElementById('output').innerHTML = data;
//     })
//     .catch((err) => console.log(err));
// }

// // Get local json data
// function getJson() {
//   fetch('posts.json')
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       let output = '';
//       data.forEach(function (post) {
//         output += `<li>${post.title}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch((err) => console.log(err));
// }

// // Get from external API
// function getExternal() {
//   fetch('https://api.github.com/users')
//     .then((res) => res.json())
//     .then(function (data) {
//       console.log(data);
//       let output = '';
//       data.forEach(function (user) {
//         output += `<li>${user.login}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }

// const sayHello = function () {
//   console.log('Hello');
// };

// const sayHello = () => {
//   console.log('Hello');
// };

// One line function does not need braces
// const sayHello = () => console.log('Hello');

// const sayHello = () => 'Hello';

// const sayHello = function() {
//   return 'Hello';
// }

//Return Object
// const sayHello = () => ({ msg: 'Hello' });

// // Single param does not need parenthesis
// const sayHello = (name) => console.log(`Hello ${name}`);

// Multiple params need parenthesis
// const sayHello = (firstName, lastName) =>
//   console.log(`Hello ${firstName} ${lastName}`);

// console.log(sayHello('Brad', 'Traversy'));

// const users = ['Nathan', 'John', 'William'];

// // const nameLengths = users.map(function (name) {
// //   return name.length;
// // });

// // Shorter
// // const nameLengths = users.map((name) => {
// //   return name.length;
// // });

// // Shortest
// const nameLengths = users.map((name) => name.length);

// console.log(nameLengths);

// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = false;

//   if (!error) {
//     const res = await promise;
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunc()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// async function getUsers() {
//   // await response of the fetch call
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');

//   // Only proceed once its resolved
//   const data = await response.json();

//   // Only proceed once secound promise is resovled
//   return data;
// }

// getUsers().then((users) => console.log(users));

// const user = { email: 'jdoe@gmail.com' };

// try {
//   // Produce a referenceError
//   // myFunction();
//   // Produce a TypeError
//   // null.myFunction();
//   // Will produce SyntaxError
//   // eval('Hello World');
//   // Will produce a URIError
//   // decodeURIComponent('%');

//   if (!user.name) {
//     // throw 'User has no name';
//     throw new SyntaxError('User has no name');
//   }
// } catch (e) {
//   console.log(`User Error: ${e.message}`);
//   // console.log(e.message);
//   // console.log(e.name);
//   // console.log(e instanceof TypeError);
// } finally {
//   console.log('Finally runs reguardless of result...');
// }

// console.log('Program continues...');

// let re;
// re = /hello/;
// re = /hello/i; // i = case insensitive
// re = /hello/g; // Global search

// console.log(re);
// console.log(re.source);

// exec() - Return result in array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - Returns index of the first match if not found returns -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Return new string with some or all matches of a pattern

// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);

// let re;
// // Literal Characters
// re = /hello/;
// re = /hello/i;

// // Metacharacter Symbols
// re = /^h/i; // Must start with
// re = / world$/i; // Must ends with
// re = /^hello$/i; // Must begin and end with
// re = /h.llo/i; // Matches any ONE character
// re = /h*llo/i; // Matches any character 0 or more times
// re = /gre?a?y/i; // Optional character
// re = /gre?a?y\?/i; // Escape character

// // Brackets [] - Character Sets
// re = /gr[ae]y/i; // Must be an a or e
// re = /[GF]ray/i; // Must be an G or F
// re = /[^GF]ray/i; // Match anything except a G or F
// re = /[A-Z]ray/; // Match any uppercase letter
// re = /[a-z]ray/; // Match any lowercase letter
// re = /[A-Za-z]ray/; // Match any letter
// re = /[0-9][0-9]ray/; // Match any digit

// // Braces {} - Quantifiers
// re = /Hel{2}o/i; // Must occur exactly {m} amount of times

// re = /Hel{2,4}o/i; // Must occur exactly {m} amount of times

// re = /Hel{2,}o/i; // Must occur at least {m} amount of times

// // Paretheses () - Grouping
// re = /^([0-9]x){3}$/;

// // Shorthand Character Classes
// re = /\w/; // Word character - alphanumeric or _
// re = /\w+/; // + = one or more
// re = /\W/; // Non-Word Character
// re = /\d/; // Match any digit
// re = /\d+/; // Match any digit 0 or more times
// re = /\D/; // Match any Non-digit
// re = /\s/; // Match white char
// re = /\S/; // Match non-whitespace char
// re = /Hell\b/i; // Word boundary

// // Assertions
// re = /x(?=y)/; // Match x only if followed by y
// re = /x(?!y)/; // Match x only if NOT Followed by y

// // String to match
// const str = 'djfdjkshfkjdsfjksdhcxy';

// // Log Results
// const result = re.exec(str);
// console.log(result);

// function reTest(re, str) {
//   if (re.test(str)) {
//     console.log(`${str} matched ${re.source}`);
//   } else {
//     console.log(`${str} doest NOT match ${re.source}`);
//   }
// }

// reTest(re, str);

// Iterator Example

// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function () {
//       return nextIndex < names.length
//         ? { value: names[nextIndex++], done: false }
//         : { done: true };
//     },
//   };
// }

// // Create an array of names
// const namesArr = ['Jack', 'Jill', 'John'];
// // Init iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// Generator Example
// function* sayNames() {
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// ID Creator
// function* createIds() {
//   let index = 0;

//   while (true) {
//     yield index++;
//   }
// }

// const gen = createIds();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

const sym1 = Symbol();
const sym2 = Symbol('sym2');

// console.log(typeof sym2);

// console.log(Symbol('123') === Symbol('123'))
// console.log(`Hello ${sym1.toString()}`);

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY1] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// Sumbols are not enumerable in for...in
// for (let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`);
// }

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({ key: 'prop' }));
console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' }));
