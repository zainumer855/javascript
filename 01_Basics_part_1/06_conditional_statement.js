'use strict' // treat all our js code by new version
/*

// Way of declaring variables in JavaScript

// reassigning variable / mutating a variable
let age = 22;
age = 23;
// console.log(age);

// can declare a variable without assigning any value
let score;
// console.log(score);

// variables which are immuatable
const birthYear = 2001;
// birthYear = 2002;
// console.log(birthYear); // TypeError: Assignment to constant variable.

// can't declare a variable without value
// const birthYear2;

// Similar to let keyword but with scope difference will learn later what is scope.
var isJavaScriptFun = 'Yes';
isJavaScriptFun = 'kind of😉';
console.log(isJavaScriptFun);


// Arathematic Operator
let currentYear = 2024;
const ageZain = currentYear - 2001;
const ageStranger = currentYear - 2006;
// console.log(ageZain, ageStranger);

// console.log(ageZain * 2, ageStranger / 2, 2**3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8

// to concatenate a string we use + operator
const firstName = 'Zain';
const lastName = 'Umer';
const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// Assignment Operator
let x = 10 + 5;
x += 10; // x = x + 10
x -= 5; // x = x - 5
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x)

// Comparison Operator
// console.log(ageZain > ageStranger);
// console.log(ageZain < ageStranger);
const fullAge = 18;
// console.log(fullAge <= ageStranger - 2);



// Operator Precedence
let currentYear = 2024;
const ageZain = currentYear - 2001;
const ageStranger = currentYear - 2006;
// console.log(ageZain, ageStranger);

// console.log(currentYear - 2001 > currentYear - 2006); // How we would know which operator is exicuting first?

// by checking the precedence of an operator in obove example subtraction operator have high precedence of 11 than greater sign precedence of 9 that is why subtraction is executed first.

// here assignment operator has low precedence and executed from right-to-left
let x, y;
x = y = 25-10-5;
console.log(x, y);


// Strings and Template Literials

const firstName = 'Zain';
const lastName = 'Umer';
const age = 23;
const job = 'Website Developer';

// A normal string
// const info = 'My name is ' + firstName + ' ' + lastName + ". I'm " + age + " years old and I'm a " + job + '.';
// console.log(info);

// A template string
const info = `My name is ${firstName} ${lastName}. I'm ${age} years old and I'm a ${job}.`
console.log(info);

// temelate strings are also used for multiple line for string
// Normaly
console.log('multiple \n\
lines with \n\
template strings');

console.log(`multiple
lines with
template strings`);



// Conditional Statement
// used to take decisons in our code which provide us to take more control over our code

const age = 15;
if(age >=18){
    console.log(`You can drive 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`You are too young to drive! ${yearsLeft} years left for being able to drive :)`)
}

const birthYear = 2009;
let century;
if (birthYear <= 2000) {
   century = 20;
} else {
   century = 21;
}

console.log(century);

*/