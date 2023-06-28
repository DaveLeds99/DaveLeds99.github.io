//Dark Mode Const
const bdy = document.querySelector("body");
const DkBttn = document.querySelector(".darkmodeBttn");
const LkInlogo = document.querySelector("#LinkedIn");
const Ingmlogo = document.querySelector("#Instagram");
const FtrLogo = document.querySelector("#LogoFooter");
const footerLink = document.querySelector(".FaviconLogos > a");
//About Me Const
const abtMeTxt = document.querySelector(".aboutMeText");
const abtMeImg = document.querySelector(".aboutMeImg");
const abtMeFtr = document.querySelector(".abtImgFooter");
const bttnWebDv = document.querySelector("#webDev");
const bttnMusc = document.querySelector("#musc");
// Projects Right Column Content
var link = document.getElementById("projectsLink");
var img = document.getElementsByClassName("projectsPreviewImg")[0];
var projectsAbout = document.getElementsByClassName("projectsAbout")[0];
var projectsDate = document.getElementsByClassName("projectsDate")[0];
var activeSelector = document.getElementsByClassName("projectsList")[0];
//  ProjectsLeft Column Content
var titleAltc = document.getElementsByClassName("projectsAltcActive")[0];
var titleMumx = document.getElementsByClassName("projectsMumxActive")[0];


titleMumx.style.color = "grey";
bttnWebDv.style.textDecoration = 'underline 2px';
var DkMode = true;



//Projects Functions
function buttonAltc() {
    link.href = "https://aldetec.mx"
    img.src = "https://live.staticflickr.com/65535/52502648441_27ef5e811b_o.png";
    projectsAbout.textContent = "Mantenimiento, Venta e Instalación de Equipo de CCTV, Alarmas y mucho más.";
    projectsDate.textContent = "Julio, 2021"; 
    titleAltc.style.color = "white";
    titleMumx.style.color = "grey";
}
function buttonMuMx() {
    link.href = "https://davedevs.w3spaces.com/MSMX/museoscdmx.html"
    img.src = "https://live.staticflickr.com/65535/52529703134_da04e10602_o.png";
    projectsAbout.textContent = "Museos de la Ciudad de México.";
    projectsDate.textContent = "Noviembre, 2022"; 
    titleAltc.style.color = "grey";
    titleMumx.style.color = "white";
} 



//ABOUT ME
function bttnWebDev() {
    abtMeTxt.innerHTML = 'Soy David, desarrollado Web autodidacta, actualmente residiendo en México.<p/>En Agosto de 2020 creé mi primer sitio web, inicié con los basicos de HTML, CSS y poco después JavaScript, a través de cursos y videos en línea.<p/>He tenido múltiples proyectos desde entonces, desde sitios de contacto hasta tiendas en línea. <p/>Me caracterizo por mi capacidad para solucionar problemas, además de priorizar y gestionar proyectos. <p class="paragraphJump"/>paragrapghJump <p/> Puedes ver algunos de los proyectos en los que he trabajado más abajo, y si deseas contactarme siéntete libre de hacerlo.';
    abtMeImg.src = 'https://live.staticflickr.com/65535/52741815071_44b66fc461_o.jpg';
    abtMeFtr.innerHTML = '(Foto de <a href="https://unsplash.com/@flowixxcom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ján Vlačuha</a> en <a href="https://unsplash.com/es/s/fotos/computer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>)';
    bttnWebDv.style.textDecoration = 'underline 2px';
    bttnMusc.style.textDecoration = 'none';
}
function bttnMusic() {
    abtMeTxt.innerHTML = 'Batería. Aprendí en el 2015, y desde entonces participé en múltiples eventos y hasta llegué a dar clases. <p/> Piano. Aprendí desde el 2006, y es mi instrumento favorito. Paso horas a la semana tocando ya sea para relajarme o entretenerme un rato.';
    abtMeImg.src = 'https://live.staticflickr.com/65535/52847829452_2f4effa895_o.jpg';
    abtMeFtr.innerHTML = "<a></a>";
    bttnWebDv.style.textDecoration = 'none';
    bttnMusc.style.textDecoration = 'underline 2px';
}



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
        LkInlogo.src = "/imgs/linkedin.png";
        Ingmlogo.src = "/imgs/instagram.png";
        FtrLogo.src = "/imgs/logo.png"
        //Links
        footerLink.style.color = "blue";
        let imgFtrLink = document.querySelectorAll(".abtImgFooter > a");
        imgFtrLink.forEach(link => {
            link.style.color = "blue";
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
        LkInlogo.src = "/imgs/linkedinWhite.png";
        Ingmlogo.src = "/imgs/instagramWhite.png";
        FtrLogo.src = "/imgs/logoWhite.png"
        //Links
        footerLink.style.color = "rgb(175, 175, 250)";
        let imgFtrLink = document.querySelectorAll(".abtImgFooter > a");
        imgFtrLink.forEach(link => {
            link.style.color = "rgb(175, 175, 250)";
        });
        DkMode = true;
    }
}
function DkHover() {
    DkMode == false ? DkBttn.style.backgroundColor = "black" : DkBttn.style.backgroundColor = "white";
}
function DkNoHov() { DkBttn.style.background = "none" }