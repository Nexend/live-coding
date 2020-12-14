function sum(from, to, printer) {
  let sum = 0;
  while (from < to) {
    sum += from;
    from++;
  }
  printer(sum);
}

const printResult = function (res) {
  console.log("Result is: " + res);
};

sum(5, 10, printResult);
