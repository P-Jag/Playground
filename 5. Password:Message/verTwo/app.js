//password is correct no matter is in lower or uppercase
// use toUpperCase or toLowerCase - remember that those methods do not work on string

const input = document.querySelector('input');

const passwords = ["SnAil", "woodpeckER"];
const messages = ["Is a slowest animal. I guess", "I love trees"];
const div = document.querySelector('div');
//alternative way (part1)
// passwords.forEach((password, i) => {
//     passwords[i] = password.toLowerCase();
// })

//by map
const LCPasswords = passwords.map(password => password.toLowerCase();)

const showMessage = (e) => {
//fastest way
    // passwords.forEach((password, i) => {
    //     if (password.toLowerCase() === e.target.value.toLowerCase()){
    //         document.querySelector('div').textContent = messages[i];
    //     }
    // })

//alternative way (part2)
//     const input = e.target.value.toLowerCase()

//     passwords.forEach((password, i) => {
//     if (password === input){
//         document.querySelector('div').textContent = messages[i];
//     }
// })

//by map
    const textInput = e.target.value.toLowerCase();

    for (let i = 0; i < LCPasswords.length; i++) {
        if (textInput === LCPasswords[i]){
            div.innerHTML = messages[i];
        }
    }

}

input.addEventListener('input', showMessage);