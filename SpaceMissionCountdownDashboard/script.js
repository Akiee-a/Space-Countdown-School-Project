let time = 60000;
let interval;
let clockRun;

function enter() {
    let m = document.getElementById("mission").value;
    let c = document.getElementById("commander").value;

    if (m === "" || c === "") {
        document.getElementById("error").style.display = "block";
    } else {
        document.getElementById("login").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("welcome").innerText = "Welcome Commander " + c + " of Mission " + m;
        document.getElementById("clock").style.display = "block";
    }
}

function redAlert() {
    document.body.classList.toggle("alert");
}

function startClock() {
    clockRun = setInterval(function() {
        let now = new Date();
        document.getElementById("clock").innerText = now.toLocaleTimeString();
    }, 1000);
}

function showTime(ms) {
    let min = Math.floor(ms / 60000);
    let sec = Math.floor((ms % 60000) / 1000);
    let ms2 = Math.floor((ms % 1000) / 10);

    return min.toString().padStart(2, '0') + ":" + 
            sec.toString().padStart(2, '0') + ":" +
            ms2.toString().padStart(2, '0');
}

function start() {
    if (interval) return;

    interval = setInterval(function() {
        time -= 10;

        if (time <= 0) {
            clearInterval(interval);
            interval = null;

            let timer = document.getElementById("timer");
            timer.innerText = "🚀 LAUNCH!";
            timer.classList.add("launch-blink");
            document.body.classList.add("launch-bg-blink");
            document.body.classList.add("launch");

        } else {
            document.getElementById("timer").innerText = showTime(time);
        }
    }, 10);
}

function abort() {v
    clearInterval(interval);
    interval = null;
}

function reset() {
    clearInterval(interval);
    interval = null;
    time = 60000;

    let timer = document.getElementById("timer");
    timer.innerText = "01:00:00";
    timer.classList.remove("launch-blink");
    document.body.classList.remove("launch-bg-blink");
    document.body.classList.remove("launch");
    document.body.classList.remove("alert"); 
}

startClock();