/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  const [hourString, minuteString] = timeString.split(':');
  const hour = parseInt(hourString);
  const minute = parseInt(minuteString);

  if (hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(message) {
  const greetingElmnt = document.querySelector('#greeting');

  greetingElmnt.innerText = message;
}