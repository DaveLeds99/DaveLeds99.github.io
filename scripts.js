//About Me
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
function bttnWebDev() {
    console.log("Button 'Web Dev' has been pressed");
    abtMeTxt.innerHTML = 'Soy David, desarrollado Web autodidacta, actualmente residiendo en México.<p/>En Agosto de 2020 creé mi primer sitio web, inicié con los basicos de HTML, CSS y poco después JavaScript, a través de cursos y videos en línea.<p/>He tenido múltiples proyectos desde entonces, desde sitios de contacto hasta tiendas en línea. <p/>Me caracterizo por mi capacidad para solucionar problemas, además de priorizar y gestionar proyectos. <p class="paragraphJump"/>paragrapghJump <p/> Puedes ver algunos de los proyectos en los que he trabajado más abajo, y si deseas contactarme siéntete libre de hacerlo.';
    abtMeImg.src = 'https://live.staticflickr.com/65535/52741815071_44b66fc461_o.jpg';
    abtMeFtr.innerHTML = '(Foto de <a href="https://unsplash.com/@flowixxcom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ján Vlačuha</a> en <a href="https://unsplash.com/es/s/fotos/computer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>)';
    bttnWebDv.style.textDecoration = 'underline 2px';
    bttnMusc.style.textDecoration = 'none';
}
function bttnMusic() {
    console.log("Button 'music' has been pressed" );
    abtMeTxt.innerHTML = 'Batería. Aprendí en el 2015, y desde entonces participé en múltiples eventos y hasta llegué a dar clases. <p/> Piano. Aprendí desde el 2006, y es mi instrumento favorito. Paso horas a la semana tocando ya sea para relajarme o entretenerme un rato.';
    abtMeImg.src = 'https://live.staticflickr.com/65535/52847829452_2f4effa895_o.jpg';
    abtMeFtr.innerHTML = "";
    bttnWebDv.style.textDecoration = 'none';
    bttnMusc.style.textDecoration = 'underline 2px';
}