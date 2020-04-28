// const add = (start = 0) => {
//     let number = start;
//     return () => {
//         number++;
//         document.body.textContent = `You clicked ${number} times already`
//     }
// }

// const counter = add();
// const counterFrom10 = add(10);
// document.addEventListener('click', counter);

//Age below/above

const user = (name = "", age) => {
    let userName = name;
    let userAge = age;

    function showName(){
        console.log(`Hello ${userName}, ${userAge >= 21 ? 'We can go grab some beer' : 'You are to young'}`);
    }
    
    return showName
}

const Mark = user('Mark', 24);
const Jannet = user('Jannet', 20);


//timer

// const timer = () => {
//     let time = 0;

//     function countTime () {
//         time++;
//         document.body.textContent = `You've spend ${time} seconds on this page`;
//     }
//     return countTime
// }

// const start = timer();

// setInterval(start, 1000);