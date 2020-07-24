/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  // timeString "12:00"
  // timeString "15:00"
  // Use the split function to get the hour part
  let hourNumber = parseInt(timeString.split(':',1));
 
  if (hourNumber < 12) {
   return ('Good Morning'); 
  }

  else if (hourNumber >=12 &&  hourNumber <= 17) {
    return ('Good Afternoon');
  }

  else if (hourNumber > 17) {
    return ('Good Evening');
  }
}

function displayMessage(messageToDisplay) {
   let messageElement = document.getElementById('greeting');
   messageElement.innerText = messageToDisplay;
};
/* Write your implementation of displayMessage() */
