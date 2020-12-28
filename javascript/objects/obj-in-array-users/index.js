const customers = {
  "customer-id-1": {
    name: "William",
    age: 54,
  },
  "customer-id-2": {
    name: "Tom",
    age: 17,
  },
};

// input: obj
// output: array(of objects)

// aglo
// 1. get object entries
// 2. map array
// 3. sort
const getCustomersListBetter = (obj) => {
  return Object.entries(obj)
    .map((arr) => {
      return { ...arr[1], id: arr[0] };
    })
    .sort((a, b) => {
      return a.age - b.age;
    });
};

const getCustomersList = (obj) => {
  return Object.entries(obj)
    .map((arr) => ({ ...arr[1], id: arr[0] }))
    .sort((a, b) => a.age - b.age);
};

console.log(getCustomersList(customers));

// destructing

const user = {
  name: "Denis",
  run: () => {
    console.log("RUN");
  },
};

function reactRender(user) {
  const { name, run } = user;
  console.log(name);
  console.log(run);
}

console.log(reactRender(user));
