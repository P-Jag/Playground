const spanText = document.querySelector('.text');
const cursor = document.querySelector('.cursor');
const txt = ['Welcome', 'It is perfect time', 'to learn JS'];

//txt[0][1] = how to get to first element in array and 2nd letter. 
//txt[elementIndex][letterIndex]

let activeLetter = -15;
let activeText = 0;

const addLetter = () => {
    if (activeLetter >= 0) {
    spanText.textContent += txt[activeText][activeLetter];
        }
    activeLetter++;
    if(activeLetter === txt[activeText].length) {
        activeText++;
        if (activeText === txt.length) return;

        return setTimeout (() => {
            activeLetter = -15;
            spanText.textContent = '';
            addLetter();
        }, 2000)
        
    }
    setTimeout(addLetter, 100);
}

addLetter();

const cursorAnimation = () => {
    cursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);