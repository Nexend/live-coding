"use strict";

function getSenseOfLife() {
  return 42;
}
console.log(getSenseOfLife());

function sum(a, b) {
  return a + b;
}
console.log(sum(10, 55));
console.log(sum(-1, 10));

function sum(a) {
  console.log("I am " + a + " years old");
}
console.log(sum(2));

const mult = (a, b) => a * b;

console.log(mult(10, 5));
console.log(mult(10, -5));

const square = (num) => num * num;

console.log(square(10));
console.log(square(7));

const getMagicNumber = () => 17;

console.log(getMagicNumber());
