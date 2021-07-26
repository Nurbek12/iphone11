var a = document.getElementById('screen');
var b = document.getElementById('clock');
var c = document.getElementById('fonar');
function blok(){
    a.classList.toggle('active');
    b.classList.toggle('active');
} 
function onoff(){
    c.classList.toggle('active');
}
setInterval(()=>{
    var h = document.getElementById('hour');
    var m = document.getElementById('minut');
    var mn = document.getElementById('mon');
    var dt = document.getElementById('data');
    let date = new Date();
    let hour = date.getHours();
    let day = date.getDate();
    let minut = date.getMinutes();
    let mon = date.getMonth();
    if(hour<10){
        hour = "0" + hour;
    }
    if(minut<10){
        minut = "0" + minut;
    }
    mon = mon+1;
    switch(mon){
        case 1:mon = "January";break;
        case 2:mon = "February";break;
        case 3:mon = "March";break;
        case 4:mon = "April";break;
        case 5:mon = "May";break;
        case 6:mon = "June";break;
        case 7:mon = "July";break;
        case 8:mon = "August";break;
        case 9:mon = "September";break;
        case 10:mon = "October";break;
        case 11:mon = "November";break;
        case 12:mon = "December";break;    
    }
    h.innerText = hour;
    m.innerText = minut;
    mn.innerText = mon;
    dt.innerText = `${day}-`;
});