/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  time = time.split(":", 2);
  time = parseInt(time.join(""));
  if (time < 1200) {
    return "Good Morning";
  } else if (1200 <= time && time < 1700) {
    return "Good Afternoon";
  } else if (time >= 1700 && time <= 2400) {
    return "Good Evening";
  } else if (time > 2400) {
    return "Please insert a valid time";
  }
}

function displayMessage(string) {
  const element = document.querySelector("#greeting")
  element.innerText = string
}
