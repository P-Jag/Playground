// change brigtness by using arrow keys

let red = 120;
let green = 120;
let blue = 120;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const brightness = (e) => {
    // if (e.keyCode === 38 && red < 255) {
    //     red += 5;
    //     green += 5;
    //     blue += 5;
    //     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    // } else if (e.keyCode = 40 && red >=0) {
    //     red -= 5;
    //     green -= 5;
    //     blue -= 5;
    //     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    // }
    // switch solution
    switch (e.keyCode) {
        case 38:
            document.body.style.backgroundColor = `rgb(
                ${red <= 255 ? red++ : red}, 
                ${green <= 255 ? green++ : green}, 
                ${blue <= 255 ? blue++ : blue})`;
            break;
        case 40:
            document.body.style.backgroundColor = `rgb(
                ${red > 0 ? --red : red},
                ${green > 0 ? --green : green}, 
                ${blue > 0 ? --blue : blue})`;
            break;
    }
};

window.addEventListener('keydown', brightness);

// check keyCode or which eg. for arrowup 38 down 40