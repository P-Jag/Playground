const arr = [34, 56, 77, 1734, 213, 120, 85, 123, 456];

// filter method creates new array // checking conditions and create new array basing on them. 
const oddNumbers = arr.filter(number => number * 2);
const evenNumbers = arr.filter(number => !(number % 2));
const numbersBiggerThan100 = arr.filter(number => number > 100);

// map creates new array // return new array with new values
const double = arr.map(number => number * 2);
const persons = arr.map(number => number + " persons");

// forEach is not creating/returning new array - works on old one
arr.forEach(number => number * 2); // not changing arr
arr.forEach((number, index) => arr[index] = number * 2); //way to change arr (new values)
//