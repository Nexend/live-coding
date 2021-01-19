class Sportsman {
  constructor(firstName) {
    this.firstName = firstName;
    // console.log(this);
  }
  // get firstName() {
  //   if (this.firstName.length < 3) {
  //     throw new Error('Invalid name');
  //   }
  //   return this.firstName;
  // }

  run() {
    console.log(`${this.firstName} is running`);
  }
}

class Swimmer extends Sportsman {
  constructor(firstName, styleOfSwim) {
    // can lose context without key word 'super'
    super(firstName);
    this.styleOfSwim = styleOfSwim;
  }

  swim() {
    console.log(`${this.firstName} is swimming ${this.styleOfSwim}`);
  }

  // swim = () => {
  //   console.log(`${this.firstName} is swimming ${this.styleOfSwim}`);
  // };

  // lose context - example 4
  // testFunc() {
  //   const binded = this.swim.bind(this); // we can fix this example with bind or arrow func
  //   setTimeout(this.swim, 1000);
  // }
}

// function setTimeout(func, ms) {
// ....
// ....
// ....
//   const window = new Window();
//   window.func();
// }

// testing

const sportsman = new Sportsman('John');
sportsman.run();

const swimmer = new Swimmer('John', 'breaststroke');
swimmer.swim();

// lose context - example 2, because we call this method by Class , we need obj to call this method
// Static method
// console.log('STATIC CALL')
// Swimmer.swim()

// lose context - example 3 - because we call func without obj
// const swinFunc = swimmer.swim;
// swinFunc();

// lose context - example 4
// swimmer.testFunc();

// const obj = {
//   name: 'Test',
//   run() {
//     console.log();
//   },
// };

// console.log(obj);
