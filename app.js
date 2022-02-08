
// console.log(fullDate.getHours())
// console.log(fullDate.getMinutes())
// console.log(fullDate.getSeconds())
setInterval(()=>{
    const fullDate = new Date()
    let hours = fullDate.getHours()
    let mins = fullDate.getMinutes()
    let seconds = fullDate.getSeconds()
    if(hours < 10) {
        hours = "0"+hours
    }
    if(mins < 10) {
        mins = "0"+mins
    }
    if(seconds < 10) {
        seconds = "0"+seconds
    }
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('min').innerHTML = mins;
    document.getElementById('second').innerHTML = seconds;


}, 1000)