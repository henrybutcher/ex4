//Object
//Encapsulation
let clock = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    setHours: function(h) {this.hours = h;},
    setMinutes: function(m) {this.minutes = m;},
    setSeconds: function(s) {this.seconds = s;}
};

//Dates and Times
let now = new Date()
clock.setHours(now.getHours());
clock.setMinutes(now.getMinutes());
clock.setSeconds(now.getSeconds());
console.log(clock)

function formatTime(time) {
    return time < 10 ? '0' + time: time;
    //before question mark is conditional, question mark to colon is if, after colon is else
}

//Intervals
setInterval(function() {
    clock.seconds++;
    if (clock.seconds === 60) {
        clock.seconds=0;
        clock.minutes++;
    }
    if (clock.minutes === 60) {
        clock.minutes = 0;
        clock.hours++;
    }
    if (clock.hours === 24) {
        clock.hours= 0;
    }
    document.getElementById('clock').innerHTML = formatTime(clock.hours) + ':' + formatTime(clock.minutes) + ':' + formatTime(clock.seconds)
    //innerHTML means to grab the HTML within the 'clock' ID
},1000);

document.getElementById('remove').onclick = function() {
    let element = document.getElementById('clock') //defines clock as element
    element.parentNode.removeChild(element);
}

document.getElementById('reset').onclick = function() {
    let clockElement = document.querySelector('#clock');

    document.getElementById('reset').onclick = function() {
        clock.hours = 0;
        clock.minutes = 0;
        clock.seconds = 0;
    }
}

//broken
