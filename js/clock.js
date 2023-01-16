const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    //const seconds = String(date.getSeconds()).padStart(2, "0");
    //padEnd도 있음
    clock.innerText = `${hours}:${minutes}`;
}

//setInterval이 실행될 때까지 시간이 걸리니까, 시작 실행을 위한 함수 호출
getClock();
setInterval(getClock, 1000);
//setTimeout(); time out 후 실행