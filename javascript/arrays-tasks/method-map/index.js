// input: array, function
// output: array

// callback func
// input: number (el), num (index - optional), array (optional)
// output: number

// algo:
// 1. iterate array
// 2. apply callback function for every element

const mapArrayElements = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
};

// test func
const testArr = [5, 6, 10, -2, 44, 5];

const testCallback = (el, index, arr) => el * el;

const res = mapArrayElements(testArr, testCallback);
console.log(res);
