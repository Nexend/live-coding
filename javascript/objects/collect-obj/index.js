const keys = ["name", "address", "age"];
const values = ["Bob", "Ukraine", 34];


// input: arr, arr
// output: obj
const buildObject = (keys, values) => {
  return keys.reduce((acc, key, index) => ({ ...acc, [key]: values[index] }),{});
};



const buildObjectWithLoop = (keys, values) => {
  const res = {};

  for (let index = 0; index < keys.length; index += 1) {
    debugger;



    const key = keys[index];
    const value = values[index];
    Object.assign(res, { [key]: value });
  }
  return res;
};



const result = buildObject(keys, values);
console.log(result); // { name: 'Bob', address: 'Ukraine', age: 56 }
console.log(buildObjectWithLoop(keys, values));

// test
// const keys = ["name", "address", "age"];
// const values = ["Bob", "Ukraine", 34];
// step1
// key = 'name', ==> {name: 'Bob'}

// step2
// key = 'addres', ==> {address: 'Ukraine'}


