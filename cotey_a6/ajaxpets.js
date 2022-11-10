/**
 *
 * A webpage for fetching cute pet photos. Puppies (the best) or
 * kitties will be populated on the page after the user selects their desired
 * pet type.
 */
(function() {
  "use strict";
  const URL = "https://courses.cs.washington.edu/courses/cse154/webservices/pets/ajaxpets.php";

  window.addEventListener("load", init);

  /*
   * Sets up the radio buttons for the Ajax Pet Gallery for a user to select what type of
   * cute pet photos they want to see (they should of course, always pick puppies)
   */
  function init() {
    let radioBtns = qsa("input[name='animal']");
    for (let i = 0; i < radioBtns.length; i++) {
      radioBtns[i].addEventListener("change", makeRequest);
    }
  }

  /*
   * Updates the photos displayed on the page based on the current pet selection, fetching the
   * photos from the AJAX Pets API.
   */
  function makeRequest() {
    let type  = this.value;
    let loadingMessage = document.createElement("h5");
    loadingMessage.id="loading"
    loadingMessage.innerText="Loading for Images ...";
    id("pictures").appendChild(loadingMessage);
    fetch(URL + "?animal=" + type)
        .then(checkStatus)
        .then(handleNewLines)
        .then(showPics)
        .catch(console.log);
  }

  /**
   * Split array at newline
   * @param inputText - text to split by new lines
   * @returns array<String> - array of strings split by newline
   */
  function handleNewLines(text) {
    return text.split("\n");
  }

  /**
   * Shows pics from fetch result,
   * @param imgUrls - array of image urls
   */
  function showPics(imgUrls) {
    document.querySelector("#pictures").removeChild(document.querySelector("#loading"))
    reset();
    for (let i = 0; i < imgUrls.length-1; i++) {
      let path = imgUrls[i];
      let img = document.createElement("img");
      img.src = path;
      id("pictures").appendChild(img);
    }
  }

  /**
   *  reset back to empty list
   */
  function reset() {
    let imgUrls = qsa("#pictures img");
    for (let i = 0; i < imgUrls.length; i++) {
      imgUrls[i].remove();
    }
  }

  /* ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} response - response to check for success/error
   * @return {object} - valid result text if response was successful, otherwise rejected
   *                    Promise result
   */
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300 || response.status == 0) {
      return response.text();
    } else {
      return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
