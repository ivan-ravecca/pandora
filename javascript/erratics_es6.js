// == Classes ==
class Human {
  gender;
  constructor(gender) {
    this.gender = gender;
  }
  
  getGender = () => this.gender;
}

// == Spreading ==
// Arrays
const anArray = [4,2,3,6,5];
const anotherArray = [...anArray,7,9];

// Objects
const anObject = {anyProp: 'any value'};
const anotherObject = {...anObject, otherProp: 'other value'};

// == Rest ==
const filter = (...someArgs) => {
  return someArgs.filter(el => el > 3);
}
filter(5,2,4,7,1,2,1);

// == Destructing ==
// Array
// no need to declare before
[a, b] = ['Value for A', 'Value for B'];
console.log(a, b);
[number1, , number3] = [1, 2, 3, 4];
console.log(number1, number3);

// Object
{name, id} = {name: 'Ivan', lastName: 'Sanchez'};
console.log(name, id); // ==> Ivan, undefined

// == References ==
// Objects
const ivan = { name: 'Ivan' };
const badCopyOfIvan = ivan;
ivan.name = 'Carlos';
console.log(badCopyOfIvan.name);

// Primitives
var num1 = 1;
var copyOfNum1 = num1;
num1 = 2;
console.log(copyOfNum1);

const numbers = [1, 2, 4, 5, 6];
const multiply = (factor, array) => { 
  return array.map(num => num * factor);
};
console.log(numbers, multiply(2, numbers));
