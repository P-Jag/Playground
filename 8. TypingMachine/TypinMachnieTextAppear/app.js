const spanText = document.querySelector('.text');
const cursor = document.querySelector('.cursor');
const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa. Recusandae aliquid ipsam aut illo! Placeat ipsam asperiores quas, cupiditate aspernatur explicabo est laudantium fugiat mollitia nemo! Sed, laudantium iure.'

const time = 40;
let indexText = 0;

const addLetter = () => {
    spanText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) {
        clearInterval(indexInterval); //ends interval - if you do not use it interval will run all the time. 
    }
}

const cursorAnimation = () => {
    cursor.classList.toggle('active');
}

const indexInterval = setInterval(addLetter, time);

setInterval(cursorAnimation, 400);