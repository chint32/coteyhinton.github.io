/*
 * Starter file
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function shiftCipher(text){
    // convert to lowercase and initialize result to empty string
    text = text.toLowerCase();
    let cipherResult = "";

    // loop through input
    for(let i = 0; i < text.length; i++){

      // handle the different cases
      // case 1: input is outside cipher range a-z -> no change
      if(text[i]<"a" || text[i]>"z"){
        cipherResult += text[i];
      } 
      // case 2: end of cipher range -> create circular encryption connecting end back to beginning
      else if(text[i]=="z"){
        cipherResult += "a"
      }
      // case 3: beginning or middle of cipher range -> connect to next element in cypher
      else{
        let asciiCode = text.charCodeAt(i);
        let nextChar = String.fromCharCode(asciiCode+1);
        cipherResult += nextChar;
      }
    }
    return cipherResult;
  }
  document.getElementById("encrypt-it").addEventListener("click",()=>{
    let text=document.getElementById("input-text").value;
    document.getElementById("cipherResult").innerText=shiftCipher(text);
  })
})();
