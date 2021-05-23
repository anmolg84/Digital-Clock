// Adding JS to our project
window.onload = function Time(){
    let hour =document.getElementById('hr');
    let minute = document.getElementById('min');
    let second = document.getElementById('sec');
    let day = new Date();
    hour.innerHTML = day.getHours();
    minute.innerHTML= day.getMinutes();
    second.innerHTML = day.getSeconds();
    let interval = setInterval(Time,1000);
};