//Dark Mode Const
const bdy = document.querySelector("body");
const DkBttn = document.querySelector(".darkmodeBttn");
const LkInlogo = document.querySelector("#LinkedIn");
const Ingmlogo = document.querySelector("#Instagram");
const FtrLogo = document.querySelector("#LogoFooter");
const footerLink = document.querySelector(".FaviconLogos > a");
var DkMode = true;
//Vars Main Clock (B)
var BHrs = document.querySelector("#clock_B_Hs");
var BMns = document.querySelector("#clock_B_Ms");
var BSns = document.querySelector("#clock_B_Ss");
//Times (C)
var T1 = document.querySelector("#T1");
var T2 = document.querySelector("#T2");
var T3 = document.querySelector("#T3");
var T4 = document.querySelector("#T4");
var T5 = document.querySelector("#T5");
//Timezones (C)
var TZ1 = document.querySelector("#TZ1");
var TZ2 = document.querySelector("#TZ2");
var TZ3 = document.querySelector("#TZ3");
var TZ4 = document.querySelector("#TZ4");
var TZ5 = document.querySelector("#TZ5");



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



//WATCH FUNCTIONS
function Times() {
    //Date
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    // Adding 0 when needed //
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    function update(t) {
        if (t < 10) {
            return "0" + t;
        }
        else {
            return t;
        }
    };
    //Main clock
    BHrs.innerText = hour;
    BMns.innerText = minute;
    BSns.innerText = second;
    //Runs every 1s
    setTimeout(Times, 1000);
}

function Times1() {
    //Date 1
    var date1 = new Date();
    var time1 = date1.toLocaleString ('en-US', {
        timeZone: 'Pacific/Honolulu',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
    });
    var time2 = date1.toLocaleString ('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
    });
    var time3 = date1.toLocaleString ('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
    });
    var time4 = date1.toLocaleString ('en-US', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
    });
    var time5 = date1.toLocaleString ('en-US', {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
    });
    //Main clock
    let sentence = `${time1[0]}${time1[1]}:${time1[3]}${time1[4]}`;
    T1.innerText = sentence;
    let sentence2 = `${time2[0]}${time2[1]}:${time2[3]}${time2[4]}`;
    T2.innerText = sentence2;
    let sentence3 = `${time3[0]}${time3[1]}:${time3[3]}${time3[4]}`;
    T3.innerText = sentence3;
    let sentence4 = `${time4[0]}${time4[1]}:${time4[3]}${time4[4]}`;
    T4.innerText = sentence4;
    let sentence5 = `${time5[0]}${time5[1]}:${time5[3]}${time5[4]}`;
    T5.innerText = sentence5;

    //Runs every 1s
    setTimeout(Times1, 1000);
}

Times ();
Times1 ();