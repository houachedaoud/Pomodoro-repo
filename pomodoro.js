let workTime = 0, funTime=0, rounds=1;
let minutes= 25;
let seconds = parseInt(document.getElementById('seconds').innerHTML);
let t;
let clickNum = 0;
let statu = document.getElementById('statu').innerHTML;
let beat = new Audio('beat.mp3');


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-container").style.display = "block";
});

document.getElementById("floating-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("form-container").style.display = "none";

    workTime = document.getElementById("work-time").value;
    document.getElementById('minutes').textContent= workTime;
    minutes = parseInt(document.getElementById('minutes').innerText);

    funTime = document.getElementById("fun-time").value;


    rounds = document.getElementById("rounds-number").value;

    // Do something with the input values (e.g. start the timer)
});

function defaultPomodoro(){
    document.getElementById("form-container").style.display = "none";
    document.getElementById('minutes').textContent= minutes;
}

function startt(){
    clickNum++;
if(clickNum==1) t = setInterval(start, 1000);
}

function start(){
    if(seconds==0){
        
        seconds=60;
        minutes--;

        if(minutes>=10){
        document.getElementById("minutes").textContent= minutes;
        }else{
            document.getElementById("minutes").textContent="0"+minutes;
        }
    }
seconds--;
if(seconds>=10){
document.getElementById("seconds").textContent= seconds;
}else{
    document.getElementById("seconds").textContent="0"+seconds;
}


if(minutes==0 && seconds==0 && statu.localeCompare("Work Time")==0){
    document.getElementById('statu').textContent= "Break Time";
    minutes= funTime;
    seconds=0;
    statu = document.getElementById('statu').innerHTML;
    alert('Break Time Have Started');
}

if(minutes==0 && seconds==0 && statu.localeCompare("Break Time")==0){
    rounds--;
    if(rounds==0) location.reload();
    document.getElementById('statu').textContent= "Work Time";
    minutes=workTime;
    seconds=0;
    statu = document.getElementById('statu').innerHTML;
    alert('Work Time Have Started');
}

if(minutes==0 && seconds==7) beat.play();;

}

function pause(){
    clearInterval(t);
    clickNum = 0;
}


