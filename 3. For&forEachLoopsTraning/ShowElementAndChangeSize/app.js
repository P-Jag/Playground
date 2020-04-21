//show element and change it's size

//forEach loop solution
const btn = document.querySelector('button');
const liItems = document.querySelectorAll('li');
// const liItems2 = [...document.getElementsByTagName('li')] other way to get elements and force forEach to work ;)
let size = 10;

const someChanges = () => {
    liItems.forEach(item => {
        item.style.display = "block";
        item.style.fontSize = size +"px"; // or by template string `${size}px`(used in for loop solution below)
    });
    size++;
}  

btn.addEventListener("click", someChanges);

//for loop solution

// btn.addEventListener("click",() => { 
//     for (let i = 0; i < liItems.length; i++) {
//        liItems[i].style.display = "block";
//        liItems[i].style.fontSize = `${size}px`;
//     }
//     size++;
// });