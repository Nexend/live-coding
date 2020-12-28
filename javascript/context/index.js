const timer = {
    secondsPassed = 0,
    minsPassed = 0,

    startTimer() {
        let intervalID = setInterval(() => {
            ++this.secondsPassed;
        }, 1000);
    }
}
console.log(timer.startTimer())