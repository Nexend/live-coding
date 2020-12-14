"use strict";

// How to work on tech tasks. Step by step guide

// 1. Learn requirements
// 2. Create step by step algo ( & input/output for functions )
// 3. Write draft solution & test
// 4. Refactoring & final testing -> final solution


// algo
// 1. Iterate numbers from 1 to N
// 2. Check if NUM is prime or Not
  //2.1 Iterate numbers from 2 to NUM - 1
  //2.2 ...

// input: number
// output: boolean
function isPrime(num) {
  for ( let i = 2; i < num; i++ ) {
    if ( num % i === 0 ) {
      return false;
    }
  }

  return true;
}

// input: number
// output: undefined
function getPrimes(n) {
  for ( let i = 2; i <= n; i++ ) {
    if ( isPrime(i) ) {
      console.log(i);
    }
  }
}
console.log(getPrimes(7));


// [1, 9] => 2, 3, 5, 7