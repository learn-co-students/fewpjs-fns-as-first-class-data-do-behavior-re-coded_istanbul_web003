/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str){
  const splitted = str.split(":");
  const hour = parseInt(splitted[0]);
  const min = parseInt(splitted[1]);
  if (hour < 12){
    return "Good Morning"
  }
  else if (12 <= hour && hour < 17){
    return "Good Afternoon"
  }
  
  return "Good Evening"
  
  
}
/* Write your implementation of displayMessage() */
function displayMessage(str){
  const greet = document.getElementById("greeting");
  greet.innerText = str ;
}
