const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const input = document.querySelector('input');
const listItems = document.getElementsByClassName('task');

const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
}

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key; // remove from array
    toDoList.splice(index, 1); // remove from array
    taskNumber.textContent = listItems.length;
    renderList();
}

const addTask = (e) => {
    e.preventDefault();
    const taskTitle = input.value;

    if(taskTitle === "") return;
    const task = document.createElement('li');
    task.className = "task";
    task.innerHTML = taskTitle + "<button> Delete </button>";
    toDoList.push(task); //add task to array
    renderList();
    ul.appendChild(task);
    input.value = "";
    // const liItems = document.querySelectorAll('li.task').length;
    // taskNumber.textContent = liItems; - task counter. - querySelector
    taskNumber.textContent = listItems.length; // getElementsByClassName // liveupdate
    task.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', addTask);