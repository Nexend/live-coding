// input: arr(of obj), arr
// output: arr(of obj)

// algo:
// 1. iterate array of obj - map
// 2. check if el is admin => add isAdmin true

// option 1 Not Bad
// function markAdmins(usersList, adminIds) {
//   return usersList.map((el) => {
//     if (adminIds.includes(el.id)) {
//       return { ...el, isAdmin: true };
//     }
//     return { ...el, isAdmin: false };
//   });
// }

// option 2 Not Bad but hard to read (keep it simple stupid)
// const markAdmins = (usersList, adminIds) => usersList.map((el) => adminIds.includes(el.id) ? { ...el, isAdmin: true } : { ...el, isAdmin: false });

// option 3 Not bad but 2 returns not good
// function markAdmins(usersList, adminIds) {
//   return usersList.map((el) => {
//     if (adminIds.includes(el.id)) {
//       return { ...el, isAdmin: true };
//     }
//     return { ...el, isAdmin: false };
//   });
// }

// option 4 very Good
// function markAdmins(usersList, adminIds) {
//   return usersList.map((el) => {
//     let isAdmin = adminIds.includes(el.id);
//     return { ...el, isAdmin };
//   });
// }

// option 5 my solution Good
const markAdmins = (usersList, adminIds) =>
  usersList.map((el) =>
    adminIds.includes(el.id)
      ? { ...el, isAdmin: true }
      : { ...el, isAdmin: false }
  );

// examples
const adminIds = ["1", "3"];

const users = [
  { id: "1", name: "Bob" },
  { id: "2", name: "Tom" },
  { id: "3", name: "Sam" },
  { id: "4", name: "Tad" },
];

// const adminIds = ['', '3', '5'];
// const users = [{
//     id: '1',
//     name: 'Bob'
//   },
//   {
//     id: '2',
//     name: 'Tom'
//   },
//   {
//     id: '3',
//     name: 'Sam'
//   },
//   {
//     id: '4',
//     name: 'Tad'
//   },
// ];
console.log(markAdmins(users, adminIds));

// result:
// [
//    { id: '1', isAdmin: true, name: 'Bob' },
//    { id: '2', isAdmin: false, name: 'Tom' },
//    { id: '3', isAdmin: true, name: 'Sam' },
//    { id: '4', isAdmin: false, name: 'Tad' }
// ];
