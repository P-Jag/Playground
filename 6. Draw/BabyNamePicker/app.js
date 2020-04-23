const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ['Ana', 'Sofia', 'Sylvia', 'Lisa', 'Monica', 'Cindi'];
const prefixs = ['I think the best name is', 'I hope you like', 'Oww is a lovely'];

const pickName = () => {
    const nameI = Math.floor(Math.random() * names.length);
    const prefixI = Math.floor(Math.random() * prefixs.length);
    div.textContent = `${prefixs[prefixI]} ${names[nameI]}`;
}

btn.addEventListener('click', pickName);