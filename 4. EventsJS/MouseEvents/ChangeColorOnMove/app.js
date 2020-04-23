//Recognise mouse position and change bc. 
const h1 = document.querySelector('h1');

document.body.addEventListener('mousemove', (event) => { // it can be: e/event (most common) or other name
const x = event.clientX + 1;
const y = event.clientY + 1;
    //clientX, clientY = accordint to window (obj)
    //pageX, pageY = position on page
    //screenX, screenY = position on screen (res)
const width = window.innerWidth;
const height = window.innerHeight;
    
    h1.textContent = `${x}, ${y}`;

const red = x / width * 100;
const green = y / height * 100;
const blue = ((x / width * 100) + (y / height * 100)) / 2;

    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
})