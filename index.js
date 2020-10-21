/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/// 12-5 afternoon, 5
/* Write your implementation of greet() */
function greet(time) {
  const timeString = time.split(':')
  const hours = timeString[0];
  const minutes = timeString[1];
  if (hours > 12 && hours < 17){
    return "Good Afternoon"
  }else if (hours >17) {
    return "Good Evening"
  }else {
    return "Good Morning"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(str){
  const somthing = document.getElementById('greeting')
  somthing.innerText = str
}