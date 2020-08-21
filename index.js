/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */



function greet(timeString) {

  const splitted = timeString.split(":");
  console.log(timeString);
  console.log(splitted);
  const hrs = parseInt(splitted[0], 10)
  if (hrs < 12) {
    return 'Good Morning'; 
  } else if (hrs < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}
function displayMessage(zeynep){
  document.getElementById("greeting").innerText = zeynep;
  
}

