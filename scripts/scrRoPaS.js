//RoPaS (rock paper scissors)
const result = document.querySelector("#result");
const plrSelImg = document.querySelector("#plrSelImg");
const compSelImg = document.querySelector("#compSelImg");
const innerLine = document.querySelector("#innerLine");
const SrcRoPaS = "/imgs/RoPaS.png"
const SrcRock = "/imgs/RoPaS_rock.png";
const SrcPaper = "/imgs/RoPaS_paper.png";
const SrcSciss = "/imgs/RoPaS_scissors.png";


function ropas(plrChoice) {
  timerControl("stop", "-");
  result.textContent = "- Eligiendo -";
  result.className = "NeutralColor";
  result.className = result.className.replace(" disclaimer", "");
  compSelImg.src = SrcRoPaS;
  switch (plrChoice) {
    case "R":
      plrSelImg.src = SrcRock;
    break;
    case "P":
      plrSelImg.src = SrcPaper;
    break;
    case "S":
      plrSelImg.src = SrcSciss;
    break;
    default: console.log("error")
  }
  timerControl("run", plrChoice);
}


var timer = null;
var seconds = 0;
function timerControl(stat, plrChoice) {
  seconds = 0;
  if (stat == "stop") {
    clearInterval(timer);
  }
  else if( stat == "run") {
    timer = setInterval(function () {
      if (seconds > 0) {
        ropasManager(plrChoice);
        clearInterval(timer);
        seconds = 0;
      }
      else seconds += 1;
    }, 500);
  }
}


function ropasManager(plrChoice) {
  console.log("playing...");
  let compSel = Math.floor(Math.random() * (3));
  let L = "Perdiste";
  let T = "Empate";
  let W = "Ganaste";
  switch (plrChoice) {
    case "R": 
      switch (compSel) {
        case 0: 
          compSelImg.src = SrcRock;
          result.textContent = T;
          result.className = "NeutralColor";
        break;
        case 1: 
          compSelImg.src = SrcPaper;
          result.textContent = L;
          result.className = "LColor";
        break;
        case 2: 
          compSelImg.src = SrcSciss;
          result.textContent = W;
          result.className = "WColor";
        break;
        default: console.log("error"); 
      }
    break;

    case "P": 
      switch (compSel) {
        case 0: 
          compSelImg.src = SrcRock;
          result.textContent = W;
          result.className = "WColor";
        break;
        case 1: 
          compSelImg.src = SrcPaper;
          result.textContent = T;
          result.className = "NeutralColor";
        break;
        case 2: 
          compSelImg.src = SrcSciss;
          result.textContent = L;
          result.className = "LColor";
        break;
        default: console.log("error"); 
      }
    break;

    case "S": 
      switch (compSel) {
        case 0: 
          compSelImg.src = SrcRock;
          result.textContent = L;
          result.className = "LColor";
        break;
        case 1: 
          compSelImg.src = SrcPaper;
          result.textContent = W;
          result.className = "WColor";
        break;
        case 2: 
          compSelImg.src = SrcSciss;
          result.textContent = T;
          result.className = "NeutralColor";
        break;
        default: console.log("error"); 
      }
    break;
    default: console.log("error"); 
  }
}