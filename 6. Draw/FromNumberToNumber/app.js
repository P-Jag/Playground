//Draw random number from range

Math.random() * 7; //draw from 0 - 7

//Draw random number from 4 to 6

Math.random() * (6-4) + 4; //without6 (only 4 or 5)
//max value of 6 (add max value minus min value and add min val.)
// even if random generates 2 we will get 4. 0 * 2 + 4 = 0 + 4 = 4;

const range = (min, max) => {
    const number = Math.random() * (max - min) + min;
    return number;
}

// 4,5,6

Math.floor(Math.random() * (6 - 4 + 1) + 4);

// in function (universal)

const randomInt = (min, max) => {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
} // or faster way 

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min); 
// only one instruction so {} are not necessary and also return is already in it.