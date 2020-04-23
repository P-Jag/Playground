const names = [];
const div = document.querySelector('div');

const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newName = input.value;

    if (input.value.length){ //if lenght =0 it's not working
        for (name of names){
            if (name === newName) {
                alert("It's added already");
                return // end. its only one instruction so you can delete {}
            }
        }
    names.push(newName); //where to push and what to push
    div.textContent += `${newName}, `;
    input.value = "";
    }
}

document.querySelector('button').addEventListener('click', addName);