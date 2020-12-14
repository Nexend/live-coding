// const multiply = arr => arr.reduce((acc, item) => acc * item);

// console.log(multiply([1,2,3,2,5]));

// input: number, number ....
// output: number
// function multiply() {
//   return Object.values(arguments).reduce((acc, el) => acc * el);
// }

const multiply = (...args) => args.reduce((acc, el) => acc * el);

console.log(multiply(5)); //5
console.log(multiply(5, 10)); // 50
console.log(multiply(2, 3, 5)); // 30
console.log(multiply(5, 10, 1, 5, 6, 8, 2, 2, 4)); //...

// spread
const testArr = [3,4,4,23,32,32];
console.log(...testArr);

// В стрелочных функциях arguments не видит!!!!!

// SPREAD ОПЕРАТОР РАЗБИВАЕТ НА КАЖДЫЙ ОТДЕЛЬНЫЙ ЭЛЕМЕНТ
// REST ОПЕРАТОР СОБИРАЕТ ВСЕ ЭЛЕМЕНТЫ В МАССИВ, Применяется в аргументах функции