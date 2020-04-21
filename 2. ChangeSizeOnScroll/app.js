//Square size change on scroll

const square = document.createElement('div');
document.body.appendChild(square);

let grow = true; // flag
let size = 100;
square.style.width = size +"px";
square.style.height = size +"px";

// max square size = widnow.innerWidth * 0.5

window.addEventListener("scroll", function(){
    if (size >= window.innerWidth / 2) {
        grow = !grow; // grow value is false (instead of grow = false;)
    } else if 
        (size <= 0){
        grow = !grow; // grow value is true (instead of grow = true;)
    }
    
    if (grow) { // true
        size += 5;
        square.style.width = size +"px";
        square.style.height = size +"px";
    } else {
        size -= 5;
        square.style.width = size +"px";
        square.style.height = size +"px";
    }
});