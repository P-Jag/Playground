// how to create class
//class
class NameOfClass { // all things in are methods - like constructor
    constructor(name) {
        this.name = name; // all values here
    }
    addMember() { // proto in class

    }
}
//all things from constructor will be copied to new object. addMember method not because its a proto. If we want to copy it = place to constructor
//constructor (old way)
const Name2 = function(name) {
    this.name = name;
};

const example = new NameOfClass(); // class instance

// protos
Name2.prototype.addSomething() // old proto

// class 

class Family {

}

//or 

const Family2 = class {

}

class Family3 {
    constructor(members, ...names) {
        this.members = members;
        this.names = names;
    }

    addMember(newMember) {
        this.names.push(newMember);
        this.members++;
        console.log("We have new fammily member");
    }

    static makeFamily(...members) {
        return members; //we can use it only by calling object eg: Family3.makeFamily();
        //gonzales.makeFamily = is not going to work / no matter it was created by this class.
    }
}

const gonzales = new Family3(2, 'Esmeralda', 'Mario');

gonzales.addMember('Esteban')

const ruiz = new Family3(1, 'Sergio');

ruiz.addMember('Jasmine');

// static methods - assign to class. (above)

// always remember about classes
// hoisting do not work with classes
// only new creates new object // else it is just a call (function)

//Superclass, subclass, extends and super keywords.

class Animal {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }

    breathe() {
        console.log('Breathe');
    }
}

// class Mammal extends Animal {
//     now we have
//     constructor (age){
//         super(age) { super is a list of properties from Animal class. In this case we took age from it.
//             this.age = age;
//         }
//     }
// }

//Now if we wanna add something

class Mammal extends Animal {
    constructor (age, hairs, name){
        super(age, name); //super has to be first in other case we will have an error
        this.hairs = hairs;
    }

    eat() {
        console.log('yummy');
    }
}

const dog = new Mammal(4, 'Dark grey', 'Max'); // we took age and name from animal, and add hair from mammal class. He have to add to constructor every property whic we are taking from extended class. Direction have to be the same = if in animal is age, name than use it in this dierection not name, age. Age will be assigned to name amd name to age :/

class Human extends Mammal {
    constructor(age, hairs, name, language){
        super(age, hairs, name);
        this.language = this.language;
    }

    speak() {
        console.log('I am alive');
    }
}

const stephen = new Human(40, 'black', 'Stephen', 'English');

//Human -> Mammal -> Animal -> Object (chain of prototypes and methods)