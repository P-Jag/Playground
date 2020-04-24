const add = document.querySelector('.add');
const reset = document.querySelector('.clean');
const advices = document.querySelector('.showAdvice');
const options = document.querySelector('.showOptions');

const adviceArray = [];

const addAdvice = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newAdvice = input.value;

    if (input.value.length){
        for (advice of adviceArray) {
            if (advice === newAdvice) {
                alert("It's added already");
                return;
            }
        }
    adviceArray.push(newAdvice);
    console.log(adviceArray);
    alert(`successfully added: ${input.value}`);
    input.value = "";
    }
}

const resertAdvices = (e) => {
    e.preventDefault();
    adviceArray.length = 0;
}

const showAdvice = () => {
    const adviceIndex = Math.floor(Math.random() * adviceArray.length);
    const h1 = document.querySelector('h1');
    h1.textContent = `${adviceArray[adviceIndex]}`;
}

const showOption = () => {
    alert(adviceArray.join(", ")); // ", " gives space between options
}

add.addEventListener('click', addAdvice);
reset.addEventListener('click', resertAdvices);
advices.addEventListener('click', showAdvice);
options.addEventListener('click', showOption);