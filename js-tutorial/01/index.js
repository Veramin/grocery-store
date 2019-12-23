console.log('hello, vera')

let person = {
  name: 'vera',
  age: 24
}

// Dot Notation
person.name = 'Frank'

// Bracket Notation
let selection = 'name'
person[selection] = 'Mary'

console.log(person.name)

// Array
let selectedColors = ['red', 'bule']
console.log(selectedColors[1])

selectedColors[2] = 6
console.log(selectedColors)
console.log(selectedColors.length)

// Function
// Performing a task
function greet (name, lastName) {
  console.log('Hello, ' + name + ' ' + lastName);
}
greet('世界, 你的')

// Calculating a value
function square(number) {
  return number * number;
}

let number = square(2);
console.log(number)