'use strict';

function printMessage(country, city) {
  console.log(this);
  console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}

const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'super secret data',
};

// fix context
// user.printMessage = printMessage;
// user.printMessage('Ukraine', 'Kyiv');

// console.dir(printMessage);

// printMessage('Ukraine', 'Kyiv');

// input: context, args
// output: func
// .bind()

// ----------------------1----------------------
// const printMessageBinded = printMessage.bind(user, 'Germany', 'Berlin');
// printMessageBinded();

// ----------------------2----------------------
// printMessage.bind(user, 'Germany', 'Berlin')();

// ----------------------3----------------------
// const printMessageBinded = printMessage.bind(user, 'Germany');
// printMessageBinded('Berlin');

// ----------------------4----------------------
// const printMessageBinded = printMessage.bind(user);
// printMessageBinded('Germany', 'Berlin');

// ----------------------5----------------------
// printMessage.bind(user)('Germany', 'Berlin');

// option 1 - using bind

// input: func, context, ...args
// output: func

// function myBind(func, context, ...args) {
//   return func.bind(context, ...args);
// }
// const printMessageBinded = myBind(printMessage, user);
// printMessageBinded('Germany', 'Berlin');

// option 2 - using call
function myBind(func, context, ...args) {
  return function (...params) {
    return func.call(context, ...args, ...params);
  };
}
const printMessageBinded = myBind(printMessage, user);
printMessageBinded('Germany', 'Berlin');

// option 3 - using custom JS

// function myBind(func, context, ...args) {
//   return function (...params) {
//     const contextCopy = { ...context };
//     contextCopy.tempFunc = func;
//     contextCopy.tempFunc(...args, ...params);
//   };
// }
// const printMessageBinded = myBind(printMessage, user);
// printMessageBinded('Germany', 'Berlin');

// console.log(user);
