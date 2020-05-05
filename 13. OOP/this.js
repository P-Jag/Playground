// 'use strict' // not allow this. to be assigned to window //ES5 feature, now in ES6 in implemented 

//When we're using this.

this // global object - window

const fn = function(){
    console.log(this.name); // error (previously it was window object)
}

fn() // here this. was made not when we delcarate function

const obj = {
    name: "Eva",
    fn: fn,
}

obj.fn() // will work and show Eva - this. is connected with obj. not function so it takes name from obj and console log it in fn function.

//this. works not where it's written but by what is calling it. As above: this. is declarated in function but obj is calling it so it makes connection to it. 

document.addEventListener('click', function (){
    console.log(this); // this is connected with document - an object which call this. 

    const inside = function() {
        console.log(this); //however connection is lost in inner functions (in function), now this is a widnow object. (without strict mode - with it it's just undefined)
    }
})

// ______________________ //

function showName() {
    console.log(this.name); //now empty string 
}

const ethan = {
    name: 'Ethan',
    showName: showName,
}

ethan.showName(); //shows Ethan. (by using this)

const tatiana = {
    name: 'Tatiana',
    showName: showName,
}

tatiana.showName(); //shows Tatiana. (by using this)

//when this is created? - when it's called by function or method.
//This works were it was called not created!!!

//THIS RULEZZZZZ
// 1. This = default connection

const thisExample = function() {
// 'use strict' // error = can't take value from undefined.example (no connection with window object)
    console.log(this.example) // undefined, connection to window
}

// 2. Object context and what is calling this
Expample ethan and tatiana above

// 3. Most important - call / apply (if we want to use this not from calling lvl as above)

const human = {
    idNumber: 838734343,
}

const showIdNumber = function(){
    console.log(`Your ID number is ${this.idNumber}`) 
}

showIdNumber(); //undefined - no connection with human object. And window do not have a idNumber.

showIdNumber.call(human); // now console log will work.
//function.call(object) where object will be this. Theres no showIdNumber property in object so we have to call it manualy by using call.

const showUser = function(name) {
    console.log(`User ${name} have id number: ${this.idNumber}`); //this becomes human (human.idNumber when call)
}

showUser.call(human, "Mark");  // showUser.call(user, arg1, arg2...) here we have only one = which is name. Apply looks like: showUser.apply(user, [])

// 4. solid/constant this

const showUserNew = showUser.bind(human);
showUserNew(); //shows this.idNumber which is connected to human (can't change it)
// we generate new function with this signed to object (human).

// 5. this with new

class User {
    constructor(name) {
        this.name = name;
    }
}

const mike = new User('Mike'); //this becomes mike object. mike.name = "Mike"

// 6. Arrow function
//Arrow function do not create new this connection. It just inherit it from higher instance.

const user = {
    age: 45,
    showAge() {
        console.log(this.age); // return 45 - connection with user object
    }

    showAge2: () => {
        console.log(this.age); // return undefined - inherit this from window object.
    }
}

// What to do when THIS lose his connection??

const szarik = {
    children: ['Azor', 'Fafik'],
    showChildren: function(){
        this.children.forEach(function(name, index){
            console.log(this.children[index]); // this is connected to window object (error)
        })
    }
}

szarik.showChildren();

//solution 1 that = this

const szarik = {
    children: ['Azor', 'Fafik'],
    showChildren: function(){
        const that = this;
        this.children.forEach(function(name, index){
            console.log(that.children[index]); // add that variable and change this in inner function to that
        })
    }
}

// no function solution // for of loop

const szarik = {
    children: ['Azor', 'Fafik'],
    showChildren: function(){
        const that = this;
        for (child of this.children) {
            console.log(child); //loop is not creating new context so this is still the same as above.
        }
    }
}

// arrow function

const szarik = {
    children: ['Azor', 'Fafik'],
    showChildren: function(){
        this.children.forEach((name, index) => {
            console.log(this.children[index]); // arrow function inherits this from function above.
        })
    }
}

// bind

const szarik = {
    children: ['Azor', 'Fafik'],
    showChildren: function(){
        this.children.forEach(function(name, index){
            console.log(this.children[index]); // this is connected to window object (error)
        }.bind(this)) //this in bind is connected to szarik object.
    }
}
