const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    tasks.forEach(task => ul.appendChild(task));
}

input.addEventListener('input', searchTask);