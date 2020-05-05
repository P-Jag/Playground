//Constructors and Instance
const Car = function (name) {
    this.name = name; 
};
// function Car() {}
const ford = new Car('ford');
const opel = new Car('opel');
// 1. new emptu object
// 2. connection of this with new object
// 3. __proto__ was created
// 4. function callback and assign to const
// 5. we have 2 separate object wich took methods and values form Car. (try to console.log it ot see how it works)

ford.constructor
opel.constructor