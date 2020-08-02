/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  const t= parseInt(string.split(":")[0])
  console.log(t)
  if (t < 12){
    return "Good Morning"
  }
  else if (12 <= t  && t <= 17){
    return "Good Afternoon"
  }
  else{
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(str){
  console.log(str)
  const greeting= document.querySelector("#greeting")
  greeting.innerText= str
}
