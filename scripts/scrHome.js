//ABOUT ME
//--Containers
const contDev = document.querySelector("#abtDevInfo");
const contMusic = document.querySelector("#abtMusicInfo");
//--Btns
const bttnWebDv = document.querySelector("#abtDevBttn");
const bttnMusc = document.querySelector("#abtMusicBttn");



function abtMeDisp(cont) {
    if (cont == "devInfo") {
        contDev.style.display = "flex";
        contMusic.style.display = "none";
        bttnWebDv.className = bttnWebDv.className.replace(" abtBttnActive", "");
        bttnMusc.className = bttnMusc.className.replace(" abtBttnActive", "");
        bttnWebDv.className += " abtBttnActive";
    } else if (cont == "musicInfo") {
        contDev.style.display = "none";
        contMusic.style.display = "flex";
        bttnWebDv.className = bttnWebDv.className.replace(" abtBttnActive", "");
        bttnMusc.className = bttnMusc.className.replace(" abtBttnActive", "");
        bttnMusc.className += " abtBttnActive";
    }
}
abtMeDisp("devInfo");