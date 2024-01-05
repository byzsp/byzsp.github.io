const leftBtn = document.querySelector(".buttons .left");
const rightBtn = document.querySelector(".buttons .next");
const slide = document.querySelector("#slide");

let openClick = true;
rightBtn.addEventListener("click",()=>{
    right();
})
function right(){
    if(openClick){
        openClick = false;
        const items = document.querySelectorAll(".item");
        slide.appendChild(items[0]);
        setTimeout(() => openClick = true,1000);
    }
}
leftBtn.addEventListener("click",()=>{
    left();
})
function left(){
    if(openClick){
        openClick = false;
        const items = document.querySelectorAll(".item");
        slide.prepend(items[items.length - 1]);
        setTimeout(() => openClick = true,1000);
    }
}

setInterval("right()",3000);