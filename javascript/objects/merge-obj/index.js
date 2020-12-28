// input: obj, obj;
// output: obj;

const mergeObjectsV1 = (obj1, obj2) => Object.assign({}, obj1, obj2);
const mergeObjectsV2 = (obj1, obj2) => Object.assign({}, obj2, obj1);
const mergeObjectsV3 = (obj1, obj2) => ({ ...obj1, ...obj2 });
const mergeObjectsV4 = (obj1, obj2) => ({ ...obj2, ...obj1 });

// test func

const obj1 = {
  name: "Tom",
  age: 17,
};
const obj2 = {
  name: "Bob",
  city: "Odessa",
};

console.log(mergeObjectsV1(obj1, obj2));

// pass by reference

const test = 20;
let tes1 = test;

test1 = 50;

const testObj1 = {
  name: "Tom",
  age: 17,
};
const testObj2 = testObj1;
testObj2.age = 50;




// examples
const user = {
  name: "Sam",
};
addPropertyV1(user, "1234567"); // ==> { name: 'Sam', id: '1234567' }

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

function addPropertyV2(userData, userId) {
  return Object.assign(userData, { id: userId });
}

function addPropertyV2Key(userData, keyName, userId) {
  return Object.assign(userData, { [keyName]: userId });
}

function addPropertyV3(userData, userId) {
  return Object.assign({}, userData, { id: userId });
}

const addPropertyV4 = (userData, userId) => {
  return { ...userData, id: userId, city: 'Odessa', age: 20 };
};

console.log(addPropertyV1(user, "1234567"));
console.log(addPropertyV2(user, "1234567"));
console.log(addPropertyV2Key(user, "hello", "1234567"));
console.log(addPropertyV3(user, "1234567"));
console.log(addPropertyV4(user, "1234567"));
