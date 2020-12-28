/* eslint-disable */

const message = "Test";
const weight = 55;

function run() {
  console.log("RUN");
}

function createMessenger() {
  let message = "Just learn it";
  let sender = "Gromcode";
  let count = 0;

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
    console.log(weight);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }
  
  function countMessage() {
      count++;
      console.log(count + 'was sent')
  }

  return {
    sendMessage,
    setMessage,
    setSender,
    countMessage,
  };
}

const messanger = createMessenger();
messanger.sendMessage();
messanger
run();

const messanger1 = createMessenger();

// closure is started
messanger1.countMessage();
messanger1.countMessage();
messanger1.countMessage();

const messanger2 = createMessenger();
messanger2.countMessage();




// ----------------Lexical environment - это внутрений объект js в котором хранится вся информация данной программы!
/* 
--------Lexical environment Создается в трех случаях:
 1) когда запускаем любой скрипт
 2) Во время запуска функции, создается лекс окружен для этой функции
 3) Между любыми фигурными скобками 
*/

// ------------------CLOSURE - Свойство функции сохрянять лекс окруж с которого она была вызвана

// -------------Scope - Область видимости переменных, то что между фигурными скобками, глобальный , цикл, в каждой функции внутри

// --------------ОТЛИЧИЕ LEXICAL ENV AND SCOPE
// Lexical env - Способ хранения ,  Scope - Понятие(Термин) в js (про границы)


//------------------- global lex envir
// {
//     environmentRecord: {
//         message: 'Test',
//         weight: 55,
//         run: func,
//         createMessenger: func,
//     },
//     outer: null; // Внешнего лекс окружения нет!
// }

// -----------loop lex environment (for)
    // environmentRecord: {
    //     i: 0
    // },
    // outer: global

// ------------------createMessenger lex envir
// {
//     environmentRecord: {
//         message: '',
//         sender: '',
//         sendMessage: func,
//         ...
//     },
//     outer: global;
// }

// func sendMessage lex environm
// environmentRecord: {
//     empty
// },
// outer: createMessenger lex environment;
