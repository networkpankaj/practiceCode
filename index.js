// console.log('hello');

// let age;
// age = 45;
// console.log(age);  


// console.log("Pankaj")

// const name = 'John';
// const age = 25;
// const isCool = true;
// const rating = 4.5;

// const x = null;
// const y = undefined;
// let z;

// console.log(typeof );

// const name = 'Pankaj';
// const age = 30;

// console.log('My name is ' + name + 'and I am '+ age);


// const hello = `My name is ${name} and I am ${age}`;

// console.log(hello);

//Arrays

// const numbers = new Array(1,2,3,4,5)
// console.log(numbers)


// const fruits= ['apples', 10, true, 'anasdfk', 'ghost']
// fruits[3] = 'grapes'
// fruits.push('Mangos')

// console.log(Array.isArray())
// console.log(fruits.indexOf('ghost'))
// console.log(fruits)
// console.log(fruits[3])

// const person = {
//     firstName: 'john',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main street',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// console.log(person.firstName)
// console.log(person.hobbies[1])
// person.email = 'john@gmail.com'
// console.log(person.email)


//  const todos = [
//      {
//          id: 0,
//          text: 'Take out trash',
//          isCompleted: true
//      },
//      {
//          id: 1,
//          text: 'Take with boss',
//          isCompleted: true
//      },
//      {
//          id: 2,
//          text: 'Dentist appoinment',
//          isCompleted: false
//      }
//  ];

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true

// }).map(function(todo){
//     return todo.text
// })

// console.log(todoCompleted);

// let x = 10;
// if(x === 10) {
//     console.log('x is 10')
// } else {
//     console.log('x is not 10')
// }

// const x = 10;

// const color = 'green'

// switch(color) {
//     case 'red':
//         console.log('color is red')
//         break;
//     case 'blue':
//         console.log('color is blue')
//         break;
//     default:
//         console.log('color is not red or blue')
//         break;
// }

// function addNums(num1, num2) {
//     console.log(num1 + num2)
// }

// addNums(5,4)

// const addNum = (num1 = 1, num2 = 1) => {
//     return num1 + num2
// }
// console.log(addNum(5, 5))

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);

// }
// Person.prototype.getBirthYear = function () {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }


// const person1 = new Person('john', 'doe', '06/24/1980')
// console.log(person1.getBirthYear())
// console.log(person1.getFullName())

// console.log(person1)



// for(let i = 0; i < todos.length; i++){
//     console.log(todos[i].text);
// }

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)

// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// let myVariable = "Pankaj";
// myVariable = "Steve";
// myVariable = "dabi"

// console.log(myVariable)
// let solo = "pankaj";

// console.log(solo);

// let icecream= "choclate";
// if(icecream === "choclate"){
//     alert("Yay, I have chocolate icecream")
// }else {
//     alert("Awwww, but chocolate is my favourite")
// }

// var someAdjective = "awesome";
// var myStr = "Learning to code is "
// myStr += someAdjective;
// console.log(myStr);

// var lastName = "lovelace"

// var lastLetterOfLastName = lastName[1]
// console.log(lastLetterOfLastName)


// function wordBlanks(x, y , z, a) {
//     var result = ""
//     result += "The " + y +" " + x + " " + z + " " + a ;

//     return result;
// }

// console.log(wordBlanks("dog", "big", " ran", "quickly"))

// var myArray = [["the universe", 42], ["everything", 1020]]

// console.log(myArray[1][0])

// var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]]
// var myData = myArray[0][1]
// console.log(myData)

// let fruits = ['apples', 'oranges', 'pears']

// fruits[3] = 'grapes'
// fruits.push('mangos')
// fruits.unshift('strawberries')
// fruits.pop()
// console.log(Array.isArray(fruits))
// console.log(fruits)


// var todos = [[1,2,3], [2,3,4], [5,6,7]]

// todos.forEach(function(todo){
//     console.log(todo[1])
// })


// const form = document.getElementById('my-form')
// console.log(document.querySelector('h1'))


// console.log(document.querySelectorAll(".item"))
// console.log(document.getElementsByClassName('item'))
// console.log(document.getElementsByTagName('item'))


// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items')

// // ul.remove()

// // ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'Hello'
// ul.children[1].innerText = 'Brad'

// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

// const btn = document.querySelector('.btn')
// btn.style.background = 'red'

// const btn = document.querySelector('.btn')
// btn.addEventListener('click', (e)=> {
//     e.preventDefault()
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items')
//     .lastElementChild.innerHTML = '<h1>Hello</h1>'
// });

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onsubmit)

function onsubmit(e) {
    e.preventDefault()

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please fill out all fields'

        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value}
         : ${emailInput.value}`))

         userList.appendChild(li)
         // clear fields

         nameInput.value = ''
         emailInput.value = ''
    }

}
