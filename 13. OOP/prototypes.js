//Prototypes 

const Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.children = [];
    // this.addChildren = function(name){
    //     this.children.push(name);
    // }
}

Person.prototype.addChildren = function(name){
    this.children.push(name);

const monica = new Person("Monica", 28);
const andrew = new Person("Andrew", 30);

// sign methods not properties to prototype (below)

// Person.prototype.gender = "male"; - is just worthless, not everyone is a male.

function Citizen(country, citizenship) {
    this.country = country;
    this.citizenship = citizenship;
}

Citizen.prototype.changeCitizenship = function(citizenship) {
    this.citizenship = citizenship; //this gets meaning while it's call
}

const martin = new Citizen("Spain", "spanish");
const anna = new Citizen("Russia", "norwegian");

anna.changeCitizenship("aussie"); // this from prototype "changes" for anna because it's an object which call changeCitizenship method which contains this.

// prototype have 'live' reference to objects:

Citizen.prototype.age = 20; 

// than every object (like martin, anna) will have property age = 20;

anna.age // 20 - because of prototype 
martin.age // 20 - because of prototype

//extending prototypes of existing constuctors 

const arr = [5,7,9,11];
Array.prototype.delete = function(index){
    return this.splice(index, 1);
}

arr.delete(1); // delete 7 from arr (index starts from 0. (0-1-2-3...))

// Prototypes chain.

arr.__proto__ //constructor prototype (array methods)
arr.__proto__.__proto__ // object prototype ()
arr.__proto__.__proto__.__proto__ // null - nothig is higher than object

arr.age // js seach in constructor first, than object... and return undefined (not found)

//Instanceof

arr instanceof Array // true
arr instanceof Object // true
arr instanceof Citizen // false
martin instanceof Citizen // true
martin instanceof Object // true

//getPrototypeOf

Object.getPrototypeOf(martin);