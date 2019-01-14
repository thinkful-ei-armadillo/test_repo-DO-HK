'use strict';

function jediName(firstName, lastName) {
  return firstName.slice(0, 3) + lastName.slice(0, 2);
}

jediName('Daniel', 'Ors');

function beyond(num) {
  if ( num > 0 || num < 0 ) {
    return 'And beyond';
  }
  else if ( isFinite(num) === true && num > 0 ) {
    return 'To infinity';
  }
  else if ( isFinite(num) === true && num < 0 ) {
    return 'To negative infinity';
  }
  else if ( num === 0 ) {
    return 'Staying home';
  }
}

beyond(0);

function decode(code) {
  let decodedLetters = [];
  let codeArray = code.split(' ');
  for ( let i = 0; i < codeArray.length; i++ ) {
    if ( codeArray[i][0] === 'a' ) {
      decodedLetters.push(codeArray[i][1]);
    }
    else if ( codeArray[i][0] === 'b' ) {
      decodedLetters.push(codeArray[i][2]);
    }
    else if ( codeArray[i][0] === 'c' ) {
      decodedLetters.push(codeArray[i][3]);
    }
    else if ( codeArray[i][0] === 'd' ) {
      decodedLetters.push(codeArray[i][4]);
    }
    else {
      decodedLetters.push(' ');
    }
  }
  return decodedLetters.join('');
}

decode('craft block argon meter bells brown croon droop');

function howManyDaysInMonth(month, leapYear) {
  if ( month === 'February' && leapYear === true) {
    return 'February has 29 days';
  }
  else {
    let days;
    switch(month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      days = `${month} has 31 days`;
      break;
    case 'February':
      days = 'February has 28 days';
      break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      days = `${month} has 30 days`;
      break;
    }
    return days;
  }
}

howManyDaysInMonth('February', true);