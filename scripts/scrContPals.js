//Dark Mode Const
const bdy = document.querySelector("body");
const DkBttn = document.querySelector(".darkmodeBttn");
const LkInlogo = document.querySelector("#LinkedIn");
const Ingmlogo = document.querySelector("#Instagram");
const FtrLogo = document.querySelector("#LogoFooter");
const menuLinks = document.querySelectorAll(".menuItem");
const linesDivng = document.querySelectorAll(".hrLine");
const footerLink = document.querySelector(".FaviconLogos > a");
var DkMode = true;
//Vars & Cons
const textArea = document.querySelector(".textCont");
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



//DARK MODE
function darkMode() {
    if (DkMode == true) {           //TURNING DKMODE OFF
        //Changing doc background and font color
        bdy.style.backgroundColor = "rgb(175, 175, 175)";
        bdy.style.color = "black";
        //Changing DkBttn Styles
        DkBttn.style.borderColor = "rgb(100, 250, 250)";
        DkBttn.style.backgroundColor = "black"
        //Changing Logos imgs
        LkInlogo.src = "../../imgs/linkedin.png";
        Ingmlogo.src = "../../imgs/instagram.png";
        FtrLogo.src = "../../imgs/logo.png";
        //Footer link
        footerLink.style.color = "blue";
        //Others 
        menuLinks.forEach(link => {
            link.style.backgroundColor = "rgb(25, 25, 25)";
        });
        DkMode = false;
    }
    else if (DkMode == false) {         //TURNING DKMODE ON
        //Changing doc background and font color
        bdy.style.backgroundColor = "rgb(25, 25, 25)";
        bdy.style.color = "white";
        //Changing DkBttn Styles
        DkBttn.style.borderColor = "rgb(100, 250, 250)";
        DkBttn.style.backgroundColor = "white"
        //Changing Logos imgs
        LkInlogo.src = "../../imgs/linkedinWhite.png";
        Ingmlogo.src = "../../imgs/instagramWhite.png";
        FtrLogo.src = "../../imgs/logoWhite.png";
        //Footer link
        footerLink.style.color = "rgb(175, 175, 250)";
        //Others
        menuLinks.forEach(link => {
            link.style.backgroundColor = "black";
        });
        DkMode = true;
    }
}
function DkHover() {
    DkMode == false ? DkBttn.style.backgroundColor = "black" : DkBttn.style.backgroundColor = "white";
}
function DkNoHov() { DkBttn.style.background = "none" }