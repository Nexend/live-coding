console.dir(new Date());

const date = new Date();

const newDate = new Date(date.setDate(date.getDate() + 10));
console.log(newDate);
