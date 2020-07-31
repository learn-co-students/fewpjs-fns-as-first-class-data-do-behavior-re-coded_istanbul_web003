/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
// ## The `greet()` function

// The `greet` function should take one argument, a `String` which specifies the
// 24-hour time in the format `HH:MM`.

// - If the time is earlier than 12pm, return "Good Morning".
// - If the time is between 12pm and 5pm, return "Good Afternoon".
// - If the time is later than 5pm, return "Good Evening".
function greet(time) {
  const timeNumber = parseInt(time)
  if (timeNumber < 12) {
    return "Good Morning"
  }
  else if (timeNumber >=12 && timeNumber <17) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(content) { 
  //let content = document.getElementById("greeting").value;
  document.getElementById("greeting").innerText = content;
  }
