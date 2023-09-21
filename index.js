const daysEl=document.getElementById("days");
const hoursEl=document.getElementById("hours");
const minEl=document.getElementById("min");
const secondsEl=document.getElementById("seconds");

const newYears ="1 Jan 2024";
function countDown(){
    const newYearDate=new Date(newYears);
    const currentDate=new Date();
    const timeDiff=newYearDate-currentDate;
    const Totalseconds=Math.floor(timeDiff/1000);
    const days=Math.floor(Totalseconds/86400);
    const seconds=Totalseconds%60;
    const minutes=Math.floor(Totalseconds/60)%60;
    const hours=Math.floor(Math.floor(Totalseconds/60)/60)%24;
    daysEl.textContent=formatTime(days);
    hoursEl.textContent=formatTime(hours);
    minEl.textContent=formatTime(minutes);
    secondsEl.textContent=formatTime(seconds);
}
function formatTime(time){
    return time<10 ? `0${time}` :time;
}
setInterval(countDown,1000);