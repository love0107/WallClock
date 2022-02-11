setInterval(function() {
    let today = new Date();
    let hh = today.getHours();
    let mm = today.getMinutes();
    let ss = today.getSeconds();
    let section = "AM";
    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        section = "PM";
    }
    hh = hh * 30 + (mm / 2) - 90;
    mm = mm * 6 - 90;
    ss = 6 * ss - 90;
    document.getElementById("sec").style.transform = "rotate(" + ss + "deg)";
    var audio = new Audio('clock.mp3');
    audio.play();
    document.getElementById("min").style.transform = "rotate(" + mm + "deg)";
    document.getElementById("hr").style.transform = "rotate(" + hh + "deg)";

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    let time = hh + ":" + mm + ":" + ss + " " + section;
}, 1000);