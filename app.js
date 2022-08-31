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

// String

const name1 = 'Jeff';
const name2 = new String('Jeff');

//name2.foo = 'bar';
//console.log(name2);

console.log(typeof name2);

if (name1 === 'Jeff') {
  console.log('YES');
} else {
  console.log('NO');
}

// Number

const num1 = 5;
const num2 = new Number(5);

console.log(num2);

// Boolean

const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function (x, y) {
  return x + y;
};

const getSum2 = new Function('x', 'y', 'return 1 + 1');

console.log(getSum1(1, 1));

// Object
const john = { name: 'John' };
const john2 = new Object({ name: 'John' });
console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);
