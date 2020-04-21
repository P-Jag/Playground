let size = 10;
let elementOrder = 1;

const init = () => {
    const btn = document.createElement('button');
    btn.textContent = "Add 10 elements";
    
    const list = document.createElement('ul');

    document.body.appendChild(btn);
    document.body.appendChild(list);

    btn.addEventListener("click", createLiElements);
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const liElement = document.createElement('li');
        liElement.textContent = `Element nr ${elementOrder++}`;
        liElement.style.fontSize = `${size++}px`;
        document.querySelector('ul').appendChild(liElement);
    }
}

init()