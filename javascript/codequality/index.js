// const TIME_TO_GO = 10;
// const SECRET_NAME = 'test';

// bad
// const withdraw = (clients, balances, client, amount) => {
//     const ind = clients.indexOf(client);
//     if (amount > balances[ind]) {
//       return -1;
//     } else if (amount <= balances[ind]) {
//       const result = [];
//       balances.forEach(num => {
//         if (num === balances[ind]) {
//           result.push(num - amount);
//         } else {
//           result.push(num);
//         }
//       });
//       return result[ind];
//     }
//   };

// good
const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);
  if (amount > balances[index]) {
    return -1;
  }

  balances[index] -= amount;
  return balances[index];
};

// bad
// function withdraw(clients, balances, client, amount) {
//   let indexOfTheElementClient = clients.indexOf(client);
//   let result;
//   if (
//     clients.includes(client) &&
//     balances[clients.indexOf(client)] - amount > 0
//   ) {
//     balances.splice(
//       indexOfTheElementClient,
//       1,
//       balances[indexOfTheElementClient] - amount
//     );
//     return (result = balances[indexOfTheElementClient]);
//   }
//   return -1;
// }

// good
function withdraw(clients, balances, client, amount) {
  const clientIndex = clients.indexOf(client);

  if (balances[clientIndex] < amount) {
    return -1;
  }

  balances[clientIndex] -= amount;
  return balances[clientIndex];
}

// bad
const withdraw = (clients, balances, client, amount) => {
  const indexOfClient = clients.indexOf(client);
  const balanceOfClient = balances[indexOfClient];
  if (amount > balanceOfClient) {
    return -1;
  } else {
    return balanceOfClient - amount;
  }
};

// good
const withdraw = (clients, balances, client, amount) => {
  const indexOfClient = clients.indexOf(client);

  return amount > balances[indexOfClient]
    ? -1
    : balances[indexOfClient] - amount;
};

// bad

function getRandomNumbers(number, start, end) {
  let resArr = [];
  if (Math.abs(end - start) < 1) {
    return null;
  }
  start = Math.ceil(start);
  end = Math.floor(end);
  for (let i = 0; i < number; i++) {
    if (start > 0 && end > 0) {
      resArr.push(Math.floor(Math.random() * (end - start + 1)) + start);
    } else {
      resArr.push(Math.ceil(Math.random() * (end - start + 1)) + start);
    }
  }
  return resArr;
}

// good
function getRandomNumbers(length, start, end) {
  if (Math.abs(end - start) < 1) {
    return null;
  }
  const min = Math.ceil(start);
  const max = Math.ceil(end);

  return new Array(length).fill().map((el) => Math.floor(Math.random() * (max - min) + min));
}
