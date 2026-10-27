"use strict";

const imgEls = document.querySelectorAll(".slider img");
const prevBtnEl = document.querySelector(".prev");
const nextBtnEl = document.querySelector(".next");
let activeIndex = 0;
console.log(imgEls);

nextBtnEl.addEventListener("click", () => {
    console.log(imgEls[activeIndex]);
    imgEls[activeIndex].classList.remove('active')
    activeIndex++;
    if (activeIndex>= imgEls.length) {
        activeIndex = 0
    }
   imgEls[activeIndex].classList.add('active')
});