//Vars & Cons
const textArea = document.querySelector("#textCont");
const wordCont = document.querySelector("#words");
const wBttn = document.querySelector(".wordBttn")


//Functions
function countingWords(){
    let words = textArea.value;
    let wTrimmed = words.replace(/\s+/g, " ").trim();
    let splitWs = wTrimmed.split(" ");
    //Actually counting
    let wordsNumb = splitWs.length;
    if (splitWs[0] == "") {
        wordsNumb = 0;
    }
    if (wordsNumb < 10) {
        wordCont.innerHTML = ("Words: 0" + wordsNumb);    
    }
    else wordCont.innerHTML = ("Words: " + wordsNumb);
};

const clearText = () => {
    textArea.value = "";
    wordCont.innerHTML = ("Words: 00");    
};

wBttn.addEventListener("click", clearText);
