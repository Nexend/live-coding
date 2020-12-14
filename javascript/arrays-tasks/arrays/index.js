"use-strict";

/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */

/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достань последний элемент массива numbersList1 и помести его в переменную lastNumber
// выведи в консоль эту переменную, а так же массив numbersList1 после выполнения pop

const numbersList1 = [1, 2, 3, 4, 5];
const lastNumber = numbersList1.pop();
console.log(lastNumber);
console.log(numbersList1);

// put your code here

/* push - добавит элемент в конец массива */

// c помощью метода push добавь число 6 в конец массива numbersList2
// выведи в консоль результат работы метода push, а так же массив numbersList2 после выполнения push
// input: number;
// output: number;

const numbersList2 = [1, 2, 3, 4, 5];
const pushRes = numbersList2.push(6);
console.log(pushRes);
console.log(numbersList2);

// put your code here

/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift

// input: none
// output: number
const numbersList3 = [1, 2, 3, 4, 5];
const firstNumber = numbersList3.shift();
console.log(firstNumber);
console.log(numbersList3);
console.log(numbersList2);

// put your code here

/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавь число 0 в начало массива
// выведи в консоль результат работы метода unshift, а так же массив numbersList4 после выполнения unshift

const numbersList4 = [1, 2, 3, 4, 5];
const unshiftRes = numbersList4.unshift(0);
console.log(unshiftRes);
console.log(numbersList4);

// put your code here

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

// начальный массив
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true
   callback(arr[i]) === true -> элемент будет добавлен в финальный массив
   callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив */

// c помощью метода filter создай новый массив bigNumbers, в котором будут числа > 5 из anotherNumbersList
// выведи bigNumbers в консоль

// input: function
// output: array

const bigNumbers = anotherNumbersList.filter(el => el > 5);

// const bigNumbers = anotherNumbersList.filter(function (element) {
//   return element > 5
// });
console.log(bigNumbers);

// input: number
// output: boolean
// function filterCallback( element ) {
//     if ( element > 5 ) {
//         return true;
//     } else {
//         return false;
//     }
// }

// c помощью метода filter создай новый массив evenPositions, в котором будут числа из четных позиций
// массива anotherNumbersList
// выведи evenPositions в консоль

// const evenPositions = anotherNumbersList.filter(el => el % 2 === 0);

/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   элементы массива newArr - это результат вызова callback для каждого элемента arr
   newArr[i] = callback(arr[i]) */

// c помощью метода map создай новый массив squaredNumbers, в котором будут квадраты чисел из anotherNumbersList
// выведи squaredNumbers в консоль

// input: function
// output: array

anotherNumbersList.map(el => el * el);

// input: number
// output: any

// function callback (el) {

// }


/* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr 
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в anotherNumbersList и выведи его в консоль

// put your code here

/* метод forEach */
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента 
начального массива arr. callback функция ничего не должна возвращать */

// c помощью метода forEach выведи в консоль только положителные элементы массива anotherNumbersList

// put your code here
