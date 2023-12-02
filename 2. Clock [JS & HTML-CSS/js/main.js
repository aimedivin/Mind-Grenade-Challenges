const sec = document.getElementById('sec');

setInterval(()=>{
    const date = new Date();
    //sec.style.transform = `rotate(${((date.getSeconds()+30)/60 * 360)}deg)`;
},1000)
