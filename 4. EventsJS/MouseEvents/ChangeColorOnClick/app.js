//Change bc on click (clientX, clientY is even - red, odd - blue, print position in console)
const h1 = document.createElement("h1");
h1.classList.add('center');

document.body.appendChild(h1);

const changeColor = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    if (x % 2 === 0 && y % 2 === 0) {
        document.body.style.backgroundColor = "green";
        h1.textContent = "Mouse position is even";
    } else {
        document.body.style.backgroundColor = "red";
        h1.textContent = "Mouse position is odd";
    }
    console.log(x, y);
}

document.body.addEventListener('click', changeColor)