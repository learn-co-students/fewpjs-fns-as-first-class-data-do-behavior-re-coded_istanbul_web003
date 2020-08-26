/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
let turnit;

function greet(timeString) {
  turnit = parseInt(timeString);

  if (turnit < 12) {
    return "Good Morning";
  }
  else if (turnit > 17) {
    return "Good Evening";

  }
  else return "Good Afternoon";

}
greet(turnit);

function displayMessage(anyarg) {

  document.getElementById('greeting').innerText = anyarg;

}
displayMessage(greet(timeString));

/* Write your implementation of greet() */
/* Write your implementation of displayMessage()
