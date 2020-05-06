//how to hide valuee
//convention

class Cat {
    constructor (color) {
        this._color = color; //hidden value
    }

    setColor(color) {
        if (typeof color === "string") {
            return this._color = color;
        } else {
            console.log('Wrong value');
        }
    }
}

const kitty = new Cat('black');
kitty.color

// _color is a info to do no change it directly in object.

//closure

class Dog {
    constructor (name, color) {
        this.name = name;
        let _color = color; //hidden value
        this.getColor = () => color;
        this.setColor = (color) => _color = color;
        }
}

//eg

class Car {
    constructor (name, counter = 0, year = 2000) {
        this.name = name;
        let _counter = counter;
        let _year = year;
        let _changeNumber = 0;

        this.getYear = () => _year;
        this.setCounter = function(value) {
            _changeNumber++;
            return _counter = value;
        }

        this.getCounter = function() {
            if(_changeNumber) {
                alert('Hola, counter seems to be changed');
                return _counter;
            }
        }
    }
}

const polonez = new Car('Polonez', 100000, 1998);
