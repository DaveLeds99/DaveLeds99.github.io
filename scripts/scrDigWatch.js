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
var T6 = document.querySelector("#T6");
var T7 = document.querySelector("#T7");
//Timezones (C)
var TZ1 = document.querySelector("#TZ1");
var TZ2 = document.querySelector("#TZ2");
var TZ3 = document.querySelector("#TZ3");
var TZ4 = document.querySelector("#TZ4");
var TZ5 = document.querySelector("#TZ5");
var TZ6 = document.querySelector("#TZ6");
var TZ7 = document.querySelector("#TZ7");


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
    var time6 = date1.toLocaleString ('en-US', {
        timeZone: 'Australia/Sydney',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
    });
    var time7 = date1.toLocaleString ('en-US', {
        timeZone: 'Pacific/Auckland',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
    });
    //Main clock
    T1.innerText = `${time1[0]}${time1[1]}:${time1[3]}${time1[4]}`;
    T2.innerText = `${time2[0]}${time2[1]}:${time2[3]}${time2[4]}`;
    T3.innerText = `${time3[0]}${time3[1]}:${time3[3]}${time3[4]}`;
    T4.innerText = `${time4[0]}${time4[1]}:${time4[3]}${time4[4]}`;
    T5.innerText = `${time5[0]}${time5[1]}:${time5[3]}${time5[4]}`;
    console.log(T5.innerHTML);
    T6.innerText = `${time6[0]}${time6[1]}:${time6[3]}${time6[4]}`;
    T7.innerText = `${time7[0]}${time7[1]}:${time7[3]}${time7[4]}`;

    //Runs every 1s
    setTimeout(Times1, 1000);
}

Times ();
Times1 ();
