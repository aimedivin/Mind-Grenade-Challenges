const sec = document.getElementById('sec');

setInterval(()=>{
    const date = new Date();
    sec.style.transform = `rotate(${(date.getSeconds()/60 * 360)-90}deg)`;
    min.style.transform = `rotate(${(date.getMinutes()/60 * 360)-90}deg)`;
    hour.style.transform = `rotate(${(date.getHours()/12 *(360))-90}deg)`;
},1000)
