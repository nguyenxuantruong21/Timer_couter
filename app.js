
var hr = 0;
var min = 0;
var sec = 0;
var count = 0

var timer = false;

function start() {
    timer = true;
    stopwatch()
}

function stops() {
    timer = false
}

function reset() {
    timer = false
    var reset = 0
    document.getElementById('hr').innerHTML = reset
    document.getElementById('min').innerHTML = reset
    document.getElementById('sec').innerHTML = reset
    document.getElementById('count').innerHTML = reset
}

function stopwatch() {
    if (timer == true) {
        count = count + 1

        if (count === 100) {
            sec = sec += 1
            count = 0
        }

        if (sec === 60) {
            min = min + 1
            sec = 0
        }
        if (min === 60) {
            hr = hr + 1
            min = 0
            sec = 0
        }
        document.getElementById('hr').innerHTML = hr
        document.getElementById('min').innerHTML = min
        document.getElementById('sec').innerHTML = sec
        document.getElementById('count').innerHTML = count
        setTimeout('stopwatch()', 10)
    }
}