var min = 0;
var sec = 0;
var milisec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var milisecHeading = document.getElementById("milisec");
var interval;
function mainTimer() {
    milisec++
    milisecHeading.innerHTML = milisec
    if (milisec >= 100) {
        sec++
        secHeading.innerHTML = sec
        milisec = 0
    }
    else if (sec >= 60) {
        min++
        minHeading.innerHTML = min
        sec = 0
    }
}
function start() {
    interval = setInterval(mainTimer, 10)
}
function stop() {
    clearInterval(interval)
}
function reset() {
    milisec = 0
    sec = 0
    min = 0
    milisecHeading.innerHTML = milisec
    secHeading.innerHTML = sec
    minHeading.innerHTML = min
    stop()
}
function visibility() {
    document.getElementById("start").style.visibility = "hidden"
}
function visible() {
    document.getElementById("start").style.visibility = "visible"
}