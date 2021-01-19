// algo
// 1. add event handler
// 2. read form
// 3. make post request
// 4. validate user form

// input: url, object
// output: promise

const serverUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users';

const user = {
  email: 'danya@urk.net',
  firstName: 'Danya',
  lastName: 'Pryadun',
  city: 'Odessa',
  age: 20,
};

fetch(serverUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
  // input: callback
  // output: promise
  .then(response => response.json())
  .then(result => console.log(result));

fetch(serverUrl)
  .then(resp => resp.json())
  .then(res => console.log(res));
