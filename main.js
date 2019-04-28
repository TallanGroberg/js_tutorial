

// DONT FORGET TO BROWSERFY WHEN MAKING CHANGES!!!!

function palindromeTester() {


let Phrase = require("cicadapurp-palindrome");

let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
} else {
  alert(`"${phrase.content}" is not a palindrome.`)
  }

}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("click",
    palindromeTester);

});
