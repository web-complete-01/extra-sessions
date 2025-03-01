const renderTime = function (){
    const formattedTime = formatTime(counter)

    hrsDisplayElem.textContent = formattedTime.hrs;
    minDisplayElem.textContent = formattedTime.min;
    secDisplayElem.textContent = formattedTime.sec;
    
    if(counter == 0){
        clearInterval(intervalId);
        console.log('STOP');
    }
    
    counter--;
}


function formatTime(seconds){
    const hrs = Math.floor(seconds / (60 * 60));
    const min = Math.floor(seconds / 60) % 60;
    const sec = seconds % 60;

    return {
        hrs: hrs < 10 ? `0${hrs}` : String(hrs),
        min: min < 10 ? `0${min}` : String(min),
        sec: sec < 10 ? `0${sec}` : String(sec),
    }
}


let counter = 62;

const hrsDisplayElem = document.querySelector('#hrs-display');
const secDisplayElem = document.querySelector('#sec-display');
const minDisplayElem = document.querySelector('#min-display');

const intervalId = setInterval(renderTime, 1000);