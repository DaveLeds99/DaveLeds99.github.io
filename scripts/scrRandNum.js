//Random Number
const minNum = document.querySelector("#randMin");
const maxNum = document.querySelector("#randMax");
const randNumTxt = document.querySelector("#randNumText");
const errorTxt = document.querySelector("#errorTxt");
const secondsTxt = document.querySelector("#secsTxt");


//RANDOM NUMBER
var limtMax = 10000;
var limtMin = 0;
function randNum() {
  let minNumVal = Number(minNum.value);
  let maxNumVal = Number(maxNum.value);
  if (minNumVal <= limtMax && minNumVal >= limtMin && maxNumVal <= limtMax && maxNumVal >= limtMin ) {
    if (minNumVal > maxNumVal) {
      [minNumVal, maxNumVal] = [maxNumVal,minNumVal];
      /*
      //10, 1
      minNumVal = maxNumVal + minNumVal;
      //min = 1 + 10 = 11
      maxNumVal = minNumVal - maxNumVal;
      //max = 11 - 1 = 10
      minNumVal = minNumVal - maxNumVal;
      //min = 11 - 10 = 1
      */
      minNum.value = minNumVal;
      maxNum.value = maxNumVal;
    }
    let rn = Math.floor(Math.random() * (maxNumVal - minNumVal + 1)) + minNumVal;
    randNumTxt.textContent = rn;  
  }
  else {
    timerCont("stop");
    randNumTxt.textContent = "ERROR";
    errorTxt.style.display = "block";
    timerCont("run");
  }
}
var timer = null;
function timerCont(stat) {
  seconds = 7;
  limit = 1;
  if (stat == "stop") {
    clearInterval(timer);
  }
  else if (stat == "run") {
    timer = setInterval(function () {
      if (seconds == limit) {
        secondsTxt.textContent = 7;
        errorTxt.style.display = "none";
        clearInterval(timer);
      }
      else {
        seconds -= 1;
        secondsTxt.textContent = seconds;
      }
    }, 1000);
  }
}