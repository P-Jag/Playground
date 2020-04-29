//Creating objects

//a) object literal

const user = {
    name: 'John', // key: value
    age: 40,
    showName: function(){}, // function is a method now (old way)
    showName() {`Hello ${this.name}`} , //ES6 way to add function to object
    //when you call showName function this will take balue from user.name which is John
}

// user.name / prints name John
// user.age = 29 / change age from 40 to 29
// user.gender = 'male' / create new pair key: value (gender: 'male',)
// user.delete.age - remove age from object

//b) constructor

const cat = new Object(); // create new empty object

cat.name = 'Tom'; //new pair key: value
cat.meow = function(){ console.log(`${this.name}: meow, meow`)}; // new function in object

// new constructor (eg)

const Animal = function(name, species){ //first letter have to be capital / or function Animal() {} 
    this.name = name,
    this.species = species,
    this.eat = function(){
        console.log('So yummy')
    }
}

// every time when we use Animal we will create new object

const dog = new Animal("Azor", "York"); // new not related object
const cat = new Animal("Tom", "Persian cat"); // new related object

// Prototype

const Animal = function (name) {
    this.name = name;
    this.children = [];
}

Animal.prototype.addChildren = function(childName) {
    this.children.push(childName)
}

const hamster = new Animal("Mark");
hamster.addChildren("Antoine"); // JS check is .addChildres in Animal constructor if not it's looking for it in prototypes. JS found it and add to new object hamster. So you do not have to write addChildren function in every object - it will be added only where needed.

// constructor.prototype.value(or methode/function)

// class to create instance - alternative for constructor

class Animal {
    constructor (name, species) {
        this.name = name;
        this.species = species;
    }
}

// Class with prototype 

class Animal {
    constructor (name, species) {
        this.name = name;
        this.species = species;
    }

    eat() { console.log('Mlask mlask')}; // you can write ptototypes directly in class. 
}

const doggy = new Animal("Ares", "Border Collie"); // in class works the same as in (constructor) 

//OOP - rules

// a) ENCAPSULATION 
// b) INHERITANCE
class Cat extends Animal {}; 
//Cat can add more methods and elements to object. Copying everything which is in Animal and add something new which is unique for cat.
// c) POLYMORPHISM
//overload method
//cover
// d) ABSTRACTION