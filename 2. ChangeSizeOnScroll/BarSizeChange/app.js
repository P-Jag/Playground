//Change bar size on scroll
const bar = document.createElement('div');
let size = 100;
let expand = true; 

document.body.appendChild(bar);

// body properties
document.body.style.height = "10000px";

//bar properites
bar.style.position = "fixed";
bar.style.left = "0";
bar.style.top = "0";
bar.style.width = "100%";
bar.style.height = size +"px";

//let's roll
const changeSize = () => {
    if (size >= window.innerHeight * 0.5){
        expand = false; // (or !expand)
    } else if (size <= 0){
        expand = true; // (or !expand)
    }

    if (expand) { // is true (expadn == true)
        size += 5;
        bar.style.backgroundColor = "green";
    } else {
        size -= 5;
        bar.style.backgroundColor = "red";
    }
    bar.style.height = size +"px";
};

window.addEventListener("scroll", changeSize);