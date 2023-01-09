const timeLabel = document.querySelector("#timeLabel");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");

let intervalId;
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let stopped = true;


startBtn.addEventListener("click", () => {
    if (!stopped) {
        return;
    }
    stopped = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(start, 75);
})

stopBtn.addEventListener("click", () => {
    if (stopped) {
        return;
    }
    stopped = true;
    clearInterval(intervalId);
})

resetBtn.addEventListener("click", () => {
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    stopped = true;
    clearInterval(intervalId);
    timeLabel.textContent = `00:00:00`;

})

function start() {
    elapsedTime = Date.now() - startTime;
    minutes = Math.floor((elapsedTime / (1000 * 60) ))
    seconds = Math.floor(elapsedTime / 1000 % 60);
    milliseconds = Math.floor(elapsedTime % 100);

    minutes = updateTime(minutes);
    seconds = updateTime(seconds);
    milliseconds = updateTime(milliseconds);

    timeLabel.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function updateTime(time) {
    return ("0" + time).length > 2? time: "0" + time;
}