const apocalypseTime = new Date("2021-05-25 18:30:00").getTime();
const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');

setInterval(() => {
  const timeNow = new Date().getTime();
  // const time = Math.floor((apocalypseTime - timeNow)/1000);
  const time = apocalypseTime - timeNow;
  const days = Math.floor((apocalypseTime / (1000 * 60 * 60 * 24)) - 
  (timeNow / (1000 * 60 * 60 * 24)));

  spanD.textContent = days;

  const hours = Math.floor((apocalypseTime / (1000 * 60 * 60) - 
  timeNow / (1000 * 60 * 60)) % 24);

  spanH.textContent = hours;

  const minutes = Math.floor((apocalypseTime / (1000 * 60) - timeNow / (1000 * 60)) % 60);

  spanM.textContent = minutes;

  const seconds = Math.floor((apocalypseTime / 1000 - timeNow / 1000) % 60);

  spanS.textContent = seconds; 

//   console.log(time);
}, 1000);
