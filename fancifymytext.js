function increaseFontSize() {
    document.getElementById("userInputTxt").style.fontSize = "24pt";
}

function fancify() {
    document.getElementById("userInputTxt").style.fontWeight = "bold";
    document.getElementById("userInputTxt").style.color = 'blue';
    document.getElementById("userInputTxt").style.textDecoration = "underline";

}

function borify() {
    document.getElementById("userInputTxt").style.fontWeight = "normal";
    document.getElementById("userInputTxt").style.color = "black";
    document.getElementById("userInputTxt").style.textDecoration = "none";
}

function interruptingCow() {
    var str = document.getElementById("userInputTxt");
    var parts = str.value.split(".");  
    str.value = parts.join("-Moo");
}
