countVisit(); // calling the function

function countVisit() {
    if(Number(localStorage.count) % 2 == 0){
	  document.getElementById("numVisits").style.color = 'blue';
        document.getElementById("numVisits").innerHTML = "Right now the message background is blue<br>Next time it will be green";
    } else {
	  document.getElementById("numVisits").style.color = 'green';
        document.getElementById("numVisits").innerHTML = "Right now the message background is green<br>Next time it will be blue";
    }
}

