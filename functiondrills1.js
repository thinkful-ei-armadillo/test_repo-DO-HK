'use strict';

function getYearOfBirth(age) {
  if (2019 - age) {
    throw new Error ('Age cannot be negative');
  }
  else {
    return 2019 - age;
  }
}

function createGreeting(name, age) {
  const yob = getYearOfBirth(age);
  return 'Hi my name is ${name} and I am ${age} years old. I was born in ${yob}.';
}

createGreeting('Daniel', 29);
const greeting1 = createGreeting();
console.log(greeting1);