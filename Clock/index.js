const clockDisplay = document.querySelector("#display");
let currentTime;
let hrs;
let mins;
let secs;
let amOrPm;
let day;

let intervalId = setInterval(updateClock, 1000);


function updateClock() {
    currentTime = new Date();
    day = currentTime.getDay();

    hrs = currentTime.getHours();
    mins = currentTime.getMinutes();
    secs = currentTime.getSeconds();
    amOrPm = hrs < 12? "AM": "PM";
    hrs = (hrs % 12) || 12;
    
    hrs = formatTIme(hrs);
    mins = formatTIme(mins);
    secs = formatTIme(secs);
    

    clockDisplay.textContent = `${hrs}:${mins}:${secs} ${amOrPm}`;

    function formatTIme(time) {
        return ("0" + time).length > 2? time: "0" + time;
    }
}