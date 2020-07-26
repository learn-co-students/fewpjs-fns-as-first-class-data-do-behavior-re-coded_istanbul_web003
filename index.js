/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
  console.log(typeof(greet(timeString)))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  //const time = document.getElementById("time").value
  const time = string.split(':');
console.log(typeof(time[0]));
let num = parseInt(time[0]);
console.log(num)
  let result;
if (num < 12) {
result="Good Morning";
} 
else if  (num>= 12 && num < 17) {
  result="Good Afternoon";
} else if (num>= 17 && num < 24) {
  result="Good Evening";
} else {
  result = 'insert a real time'
}
return result;
}

function displayMessage(x) {
  document.getElementById("greeting").innerText = x
  console.log(x)
  
}

/* Write your implementation of displayMessage() */
