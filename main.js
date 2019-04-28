

// DONT FORGET TO BROWSERFY WHEN MAKING CHANGES!!!!
let Phrase = require("cicadapurp-palindrome");

function palindromeTester(event) {
  event.preventDefault();

	if (!event.target.phrase.value){
		alert("please enter a value to test!");
	} else {

  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

	  if (phrase.palindrome()) {
	    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome!`;
	  } else {
	    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a <strong>not</strong> a palindrome.`;
	  }
	 }
	}

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function() {
    palindromeTester(event);
  });
});
