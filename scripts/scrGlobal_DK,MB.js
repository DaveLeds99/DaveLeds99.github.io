//--DARK MODE & MOBILE MENU
//DARK MODE
const bdy = document.querySelector("body");
const dkBttns = document.querySelectorAll(".darkmodeBttn");
const changingLinks = document.querySelectorAll(".varLink");
const LkInlogo = document.querySelector("#LinkedIn");
const Ingmlogo = document.querySelector("#Instagram");
const logoFoter = document.querySelector("#logoFooter")
var DkMode = true;

function darkMode() {
    if (DkMode == true) {           //TURNING DKMODE OFF
        //Changing doc background and font color
        bdy.style.backgroundColor = "rgb(175, 175, 175)";
        bdy.style.color = "black";
        //Changing DkBttn Class
        dkBttns.forEach(link => {
            link.className = link.className.replace("darkBtnnLIGHT", "darkBtnnDARK");
        });
        //Changing Logos imgs
        LkInlogo.src = "/imgs/linkedin.png";
        Ingmlogo.src = "/imgs/instagram.png";
        logoFoter.src = "/imgs/DD_LogoLight.png";
        //Links
        changingLinks.forEach(link => {
            link.className = link.className.replace("darkLink", "lightLink");
        });
        DkMode = false;
    }
    else if (DkMode == false) {         //TURNING DKMODE ON
        //Changing doc background and font color
        bdy.style.backgroundColor = "rgb(25, 25, 25)";
        bdy.style.color = "white";
        //Changing DkBttn Class
        dkBttns.forEach(link => {
            link.className = link.className.replace("darkBtnnDARK", "darkBtnnLIGHT");
        });        
        //Changing Logos imgs
        LkInlogo.src = "/imgs/linkedinWhite.png";
        Ingmlogo.src = "/imgs/instagramWhite.png";
        logoFoter.src = "/imgs/DD_LogoDark.png";
        //Links
        changingLinks.forEach(link => {
            link.className = link.className.replace("lightLink", "darkLink");
        });
        DkMode = true;
    }
}





//MOBILE MENU
const mobMenuCont = document.querySelector("#mobNavCont")

function mobMenu(stat) {
    if (stat == "open") {
        mobMenuCont.style.display = "block";
    }
    else if (stat == "close") {
        mobMenuCont.style.display = "none";
    }
}