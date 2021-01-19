const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: null,
  a: 0,

  // option 1
  //   startTimer() {
  //     console.log('startTimer was called');

  //     function handler() {
  //       this.secondsPassed += 1;
  //       console.log(this.secondsPassed);
  //     }

  //     const handlerWithContext = handler.bind(this); // out: func

  // input: func, num
  // output: num
  //     setInterval(handlerWithContext, 1000);
  //   },

  // option 2
  startTimer() {
    console.log('startTimer was called');

    this.timerId = setInterval(() => {
      this.secondsPassed += 1;

      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed += 1;
      }

      console.log('seconds ' + this.secondsPassed);
      console.log('mins ' + this.minsPassed);
    }, 1000);
  },

  stopTimer() {
    console.log('stop timer was called');
    clearInterval(this.timerId);
  },

  getTime() {
    return this.secondsPassed < 10
      ? `${this.minsPassed} : 0${this.secondsPassed}`
      : `${this.minsPassed} : ${this.secondsPassed}`;
  },

  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};

timer.startTimer();
console.log(timer.secondsPassed);
console.log(timer.minsPassed);
timer.stopTimer();
timer.getTime();
timer.startTimer();

// num - timerID
// output: undefined
clearInterval();
