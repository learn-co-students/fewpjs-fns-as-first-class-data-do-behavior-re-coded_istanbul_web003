/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(string){
  const hour = parseInt(string.slice(0,2));
  if(hour< 12){
    return "Good Morning"
  }
  else if (hour >=12 && hour < 17){
    return "Good Afternoon"
  }
  else return "Good Evening"
}

function displayMessage(string2){
    document.getElementById("greeting").innerText = string2;
}

