let clues = 0;

let sound = document.getElementById("sound");


function findClue(item)
{

if(item.classList.contains("found"))
return;


item.classList.add("found");


clues++;


document.getElementById("count")
.innerHTML = clues + "/3";


sound.play();


if(clues == 3)
{
alert("All clues found! The secret room key appeared!");

document
.getElementById("unlock")
.disabled = false;

}

}



function unlockRoom()
{

document
.getElementById("secret")
.style.display="block";


}


function checkAnswer()
{

let ans =
document.getElementById("answer")
.value;


if(ans == 32)
{

document.getElementById("result")
.innerHTML =
"🎉 Case Solved! You caught the criminal!";

}
else
{

document.getElementById("result")
.innerHTML =
"❌ Wrong code. Try again.";

}


}



let time = 60;


let timer =
setInterval(function(){

time--;


document.getElementById("time")
.innerHTML = time;


if(time <= 0)
{

clearInterval(timer);


alert("⏰ Time over! The criminal escaped.");

location.reload();

}


},1000);