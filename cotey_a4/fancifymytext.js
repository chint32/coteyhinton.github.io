function bigger() {
    document.getElementById("userTxtArea").style.fontSize = "24pt";
}

function makeFancy() {
    document.getElementById("userTxtArea").style.fontWeight = "bold";
    document.getElementById("userTxtArea").style.color = 'blue';
    document.getElementById("userTxtArea").style.textDecoration = "underline";

}

function makeBoring() {
    document.getElementById("userTxtArea").style.fontWeight = "normal";
    document.getElementById("userTxtArea").style.color = "black";
    document.getElementById("userTxtArea").style.textDecoration = "none";
}

function interruptingCow() {
    var str = document.getElementById("userTxtArea");
    var parts = str.value.split(".");  
    str.value = parts.join("-Moo");
}