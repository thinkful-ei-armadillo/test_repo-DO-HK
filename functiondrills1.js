'use strict';

function createGreeting(name, age) {
  const yearOfBirth = 2019 - age;
  return 'Hi my name is ${name} and I am ${age} years old. I was born in ${yearOfBirth}.';
}

createGreeting('Daniel', 29)
const greeting1 = createGreeting();
console.log(greeting1)