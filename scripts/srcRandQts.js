//QUOTES IMG
var slideIn = 0;
var timer = null;
const timerDisp = document.querySelector("#timerDisplay");
randNum();


function randNum() {
    let slides = document.getElementsByClassName("quotesCont");
    let rn = Math.floor(Math.random() * slides.length) + 1;
    if (rn == slideIn) {
        slidesControl(slideIn = rn + 1);
    }
    else slidesControl(slideIn = rn);
}
function slidesControl(n) {
    timerControl("stop");
    let slides = document.getElementsByClassName("quotesCont");
    let i;
    if (n > slides.length) {slideIn = 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIn-1].style.display = "flex";
    timerControl ("run");
}
function timerControl(stat) {
    var seconds = 0;
    timerDisp.style.width = "0%";
    if (stat == "stop") {
        clearInterval(timer);
    }
    else if(stat == "run") {
        timer = setInterval(function () {
            seconds += 1;
            if (seconds > 10) {
                randNum();
                seconds = 0;
            }
            else {
                let wide = seconds * 10;
                timerDisp.style.width = `${wide}%`;
            }
        }, 1000);
    }
}