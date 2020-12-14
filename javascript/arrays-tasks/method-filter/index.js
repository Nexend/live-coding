// input: array, function
// output: array

// callback func
// input: number (el), num (index - optional), array (optional)
// output: bool

// algo:
// 1. iterate array
// 2. apply callback function for every element
// 3. if callback return true - add el to result
const filterArray = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if ( callback(arr[i], i, arr) ) {
      result.push(arr[i]);
    }
  }
  return result;
};

// test func
const testArr = [5, 6, 10, -2, 44, 5];

const testCallback = (el, index, arr) => el > 5;

const res = filterArray(testArr, testCallback);
console.log(res);
