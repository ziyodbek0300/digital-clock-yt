const timerDiv = document.querySelector(".time");
const timeText = timerDiv.querySelector("p");

let date = new Date();
timeText.innerHTML = date.toLocaleTimeString();

setInterval(() => {
    let date = new Date();
    timeText.innerHTML = date.toLocaleTimeString();
}, 1000)