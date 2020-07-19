/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {

  string = string.split(':')
  if (parseInt(string) < 12 ) {
    return "Good Morning";
  } else if (parseInt(string) >= 12 && parseInt(string) <= 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }

}
/* Write your implementation of displayMessage() */
function displayMessage (string) {
  let content = document.getElementById("greeting")
  content.innerText = string;
}
console.log(greet('7:00'))