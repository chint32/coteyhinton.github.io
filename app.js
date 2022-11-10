pageCounter(); // calling the function

function pageCounter() {
    if(!localStorage.count) { 
        localStorage.count = 1; // if it's the first time the user is accessing the page, we set the counter to 1 
    }
    else {
        localStorage.count = Number(localStorage.count) + 1; // if it's not the first time, we just add the counter by 1   
    }
    document.getElementById("counter").innerHTML = "You have visited this page " + localStorage.count + " time(s)!";
}
