"use strict";
const largeImg = document.querySelector("#largeImg");
const links = document.querySelectorAll(".list-item__link");
links.forEach((link)=>{
    link.addEventListener("click", (listener)=>{
        listener.preventDefault();
        largeImg.src = link.href;
    });
});

//# sourceMappingURL=index.f75de5e1.js.map
