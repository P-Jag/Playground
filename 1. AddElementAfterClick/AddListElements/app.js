//add li element to list

const btn = document.querySelector("button");
let number = 1;

const addNewLi = function(){
    const li = document.createElement("li");
    li.textContent = number;

    if (number % 3 == 0) {
        li.classList.add("big");
    }
    document.querySelector("ul").appendChild(li);
    number += 2;
}

btn.addEventListener("click", addNewLi);