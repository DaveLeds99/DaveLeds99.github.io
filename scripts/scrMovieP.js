//Slider Const
const sdImg = document.querySelector(".movieImg");
const timerDisplay = document.querySelector("#timerDisplay");


//SLIDER
let slidIn = 1;
var timer = null;
var seconds = 0;
changeSlide(slidIn);
function ArrowChange(n) {
    changeSlide(slidIn += n);
}
 function ImgChange(n) {
  changeSlide(slidIn = n);
}
function changeSlide(n) {
  timerControl("stop");
  let i;
  let slides = document.getElementsByClassName("movieCont");
  let selImgs = document.getElementsByClassName("selImg");
  if (n > slides.length) {slidIn = 1}    
  if (n < 1) {slidIn = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < selImgs.length; i++) {
    selImgs[i].className = selImgs[i].className.replace(" active", "");
  }
  slides[slidIn-1].style.display = "block";  
  selImgs[slidIn-1].className += " active";
  timerControl("run");
}
function timerControl(stat) {
  seconds = 0;
  timerDisplay.style.width = "0%";
  if (stat == "stop") {
    clearInterval(timer);
  }
  else if (stat == "run") {
    timer = setInterval(function () {
      seconds += 1;
      if (seconds > 10) {
        changeSlide(slidIn += 1);
        seconds = 0;
      }
      else {
        let wide = seconds * 10;
        timerDisplay.style.width = `${wide}%`;
      }
  }, 1000);
  }
}
