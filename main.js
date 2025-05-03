document.addEventListener("DOMContentLoaded",function(){
function StartClick(speed)
        {
         var start =  document.getElementById('fan');
         start.style.animation=`spin ${speed + 'ms'} linear infinite`;
        }

function Offclick()
{
 document.getElementById('fan').style='';
}

let start = document.getElementById("btnStart");
start.addEventListener("click",function(){
    StartClick(300);
});

let increaseSpeed1 = document.getElementById("btn2");
increaseSpeed1.addEventListener("click",function(){
    StartClick(100);
});

let increaseSpeed2 = document.getElementById("btn3");
increaseSpeed2.addEventListener("click",function(){
    StartClick(10);
});

document.getElementById("offClick").addEventListener("click",function(){
    Offclick();
});
});