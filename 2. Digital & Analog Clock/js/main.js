const secNum = document.getElementsByClassName('secNum');
const minNum = document.getElementsByClassName('minNum');
const hourNum = document.getElementsByClassName('hourNum');

setInterval(()=>{
    const date = new Date();
    let sec_ = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
    let min_ = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    let hour_ = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();

    sec.style.transform = `rotate(${(date.getSeconds()/60 * 360)-90}deg)`;
    min.style.transform = `rotate(${(date.getMinutes()/60 * 360)-90}deg)`;
    hour.style.transform = `rotate(${(date.getHours()/12 *(360))-90}deg)`;

    //DIGITAL CLOCK
    secNum[0].innerHTML = sec_
    minNum[0].innerHTML = min_;
    hourNum[0].innerHTML = hour_;
},1000);
