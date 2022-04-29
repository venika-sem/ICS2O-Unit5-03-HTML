/* Created by: Venika Sem
 * Created on: Apr 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-02-HTML/sw.js", {
    scope: "/ICS2O-Unit5-02-HTML/",
  })
}

/**
 * This function checks if a number is negative or positive.
 */
function check() {
  const userInteger = parseInt(document.getElementById("number").value);
  if (userInteger > -1) {
    document.getElementById("answer").innerHTML =
      "The integer input is positive.";
  } else {
    document.getElementById("answer").innerHTML =
      "The integer input is a negative.";
  }
}