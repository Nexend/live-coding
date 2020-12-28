/* eslint-disable */
run();
go();

// hoisting example 1
console.log(message); // undefined
var message = 'Hoisting is here!';

// hoisting example 2
var a = 55;
console.log(a); // 55

if (a) {
  var a = 1;

  console.log(a); // 1
}

console.log(a); // 1

// hoisting example 2 МОЖНО ЗАПИСАТЬ КАК
// var a;
// a = 55;
// console.log(a); // 55

// if (a) {
//   a = 1;
//   console.log(a); // 1
// }

// console.log(a); // 1

// hoisting example 3
var a = 77;
console.log(a);

function print() {
  var a = 2;
  console.log(a);
}
print();

console.log(a);

// hoisting example 3 Можно записать как
// var a;
// a = 77;
// console.log(a);

// Функция не дает подняться выше var
// function print() {
//   var a;
//   a = 2;
//   console.log(a);
// }
// print();

// console.log(a);

// hoisting example 4
function run() {
  console.log('RUN!');
}
function go() {
  console.log('go!');
}

//put your code here
function createLogger() {
  const messages = [];
  function warn(text) {
    messages.push({
      message: text,
      dateTime: new Date(),
      type: 'warn',
    });
  }
  function error(text) {
    messages.push({
      message: text,
      dateTime: new Date(),
      type: 'error',
    });
  }
  function log(text) {
    messages.push({
      message: text,
      dateTime: new Date(),
      type: 'log',
    });
  }
  function getRecords(type) {
    const sorted = messages.sort((a, b) => a.dateTime < b.dateTime);
    return type ? sorted.filter(item => item.type === type) : sorted;
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
}

const logger1 = createLogger();
logger1.error('we have a problem');
logger1.error('error!!!!');
logger1.log('Hello');

console.log(logger1.getRecords());

const logger2 = createLogger();
logger2.log('Hello');

console.log(logger2.getRecords());
