setBG(); 

function setBG() {

    // initialize local storage count to 1
    if(!localStorage.count) { 
        localStorage.count = 1; 
    }

    // increment local storage count by 1
    else {
        localStorage.count = Number(localStorage.count) + 1; 
    }

    // blue background
    if(Number(localStorage.count) % 2 == 0){
        document.getElementById("mybg").style.backgroundImage="url('img_parallax.jpg')";
    } 

    // green background
    else {
        document.getElementById("mybg").style.backgroundImage="url('img_parallax_green.png')";
    }
}