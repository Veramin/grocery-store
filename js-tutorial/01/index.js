console.log('hello, vera');

let person = {
  name: 'vera',
  age: 24
};

// Dot Notation
person.name = 'Frank';

// Bracket Notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);