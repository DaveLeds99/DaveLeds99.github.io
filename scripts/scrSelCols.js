//Dark Mode Const
const bdy = document.querySelector("body");
const DkBttn = document.querySelector(".darkmodeBttn");
const LkInlogo = document.querySelector("#LinkedIn");
const Ingmlogo = document.querySelector("#Instagram");
const FtrLogo = document.querySelector("#LogoFooter");
const footerLink = document.querySelector(".FaviconLogos > a");
var DkMode = true;
//COLOR CHANGE CONST
const baseplate = document.querySelector("#baseplate");



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
        DkMode = true;
    }
}
function DkHover() {
    DkMode == false ? DkBttn.style.backgroundColor = "black" : DkBttn.style.backgroundColor = "white";
}
function DkNoHov() { DkBttn.style.background = "none" }



//COLORCHANGING FUNCTIONS
function cChangeByRGB () {
    let r = document.querySelector("#R").value;
    let g = document.querySelector("#G").value;
    let b = document.querySelector("#B").value;
    baseplate.style.backgroundColor = `rgb(${r}, ${g}, ${b} )`;
}
function colorChangeByMain () {
    let centerChanger = document.querySelector("#centerChanger");
    baseplate.style.backgroundColor = centerChanger.value;
}
function cChangeByHex () {
    let Hex = document.querySelector("#HexChanger");
    Hex.textContent = "#";
    baseplate.style.backgroundColor = Hex.value;
}