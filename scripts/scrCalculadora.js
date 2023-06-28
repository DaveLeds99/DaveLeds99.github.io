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
//Numbers
const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const n3 = document.querySelector("#n3");
const n4 = document.querySelector("#n4");
const n5 = document.querySelector("#n5");
const n6 = document.querySelector("#n6");
const n7 = document.querySelector("#n7");
const n8 = document.querySelector("#n8");
const n9 = document.querySelector("#n9");
const n0 = document.querySelector("#n0");
//Operators
const clear = document.querySelector("#clear");
const div = document.querySelector("#div");
const mult = document.querySelector("#mult");
const rest = document.querySelector("#rest");
const add = document.querySelector("#add");
const equal = document.querySelector("#equal");
//
const textA = document.querySelector(".textA");





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
        linesDivng.forEach(line => {
            line.style.borderColor = "black";
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
        linesDivng.forEach(line => {
            line.style.borderColor = "white";
        });
        DkMode = true;
    }
}
function DkHover() {
    DkMode == false ? DkBttn.style.backgroundColor = "black" : DkBttn.style.backgroundColor = "white";
}
function DkNoHov() { DkBttn.style.background = "none" }


//MATH FUNCTIONS
function calcu(o) {
    if (o=="1" || o=="2" || o=="3" || o=="4" || o=="5" || o=="6" || o=="7" || o=="8" || o=="9" || o=="0" || o=="÷" || o=="*" || o=="-" || o=="+") {
        console.log(o);
        textA.value += o;
    }
    switch (o) {
        case "÷":
            div.style.backgroundColor = "rgb(150, 100, 0)";
            setTimeout(() => {div.style.backgroundColor = "rgb(200, 150, 0)";}, 200);
            break;  
        case "*":
            mult.style.backgroundColor = "rgb(150, 100, 0)";
            setTimeout(() => {mult.style.backgroundColor = "rgb(200, 150, 0)";}, 200);
            break;  
        case "-":
            rest.style.backgroundColor = "rgb(150, 100, 0)";
            setTimeout(() => {rest.style.backgroundColor = "rgb(200, 150, 0)";}, 200);
            break;  
        case "+":
            add.style.backgroundColor = "rgb(150, 100, 0)";
            setTimeout(() => {add.style.backgroundColor = "rgb(200, 150, 0)";}, 200);
            break;  
        case "=":
            equal.style.backgroundColor = "red";
            solve();
            setTimeout(() => {equal.style.backgroundColor = "brown";}, 200);
            break;
    }
};
function solve() {
    let x = textA.value;
    let y = math.evaluate (x);
    textA.value = y;
}

function clearing() {
    textA.value = "";
};


