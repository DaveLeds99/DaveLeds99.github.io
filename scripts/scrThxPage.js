//Redirect Const
const thxTxt = document.querySelector(".thxT");


//REDIRECTING TO HOME
let sec = 10;
var myTimer = setInterval(function() {
    let s = `${sec} segundos para ser transportado al Inicio.`;
    thxTxt.innerHTML = s;
    //Main Timer
    if (sec == 0 ) {
        thxTxt.textContent = "Transportando...";
        window.open("/index.html", "_parent");
        clearInterval(myTimer);
    }
    else {
        sec -= 1;
    };
}, 1000);