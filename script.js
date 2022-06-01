let gameAppear = document.querySelector(".game");
let blockDisappear = document.querySelector(".presentation");
let buttonClick = document.querySelector(".btn__button");
let crossClose = document.querySelector(".game__cross");

buttonClick.onclick = function () {
    gameAppear.classList.add("visibility");
    blockDisappear.classList.add("presentation__off");
};

crossClose.onclick = function() {
    gameAppear.classList.remove("visibility");
    blockDisappear.classList.remove("presentation__off");
}