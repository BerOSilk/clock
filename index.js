var x = document.getElementById("img");
var width = window.innerWidth;
var height = window.innerHeight;

x.style.marginTop = ((height / 2) - 250) + "px";
x.style.marginLeft = ((width / 2) - 250) + "px";

var sec = document.getElementById("seconds");
var min = document.getElementById("minutes");
var hou = document.getElementById("hours");

sec.style.marginTop = ((height / 2) - 180) + "px";
sec.style.marginLeft = ((width / 2)) + "px";

min.style.marginTop = ((height / 2) - 130) + "px";
min.style.marginLeft = ((width / 2)) + "px";

hou.style.marginTop = ((height / 2) - 100) + "px";
hou.style.marginLeft = ((width / 2)) + "px";

function loop(){
    
    window.requestAnimationFrame(loop);

    const date = new Date();

    var sec_rotate = date.getSeconds() * 6;
    var min_rotate = date.getMinutes() * 6;
    var hr_rotate = date.getHours() * 5 * 6;

    sec.style.transform = "rotate(" + sec_rotate + "deg)";
    min.style.transform = "rotate(" + min_rotate + "deg)";
    hou.style.transform = "rotate(" + hr_rotate + "deg)";

    var time = document.getElementById("time");

    time.textContent = date;

}

loop();