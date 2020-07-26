/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  const SPLITTED=timeString.split(":");
  const HOURS= parseInt(SPLITTED[0], 10);
  console.log(HOURS);
  if (HOURS < 12) {
    return ('Good Morning');
  } else if (HOURS < 18) {
    return ('Good Afternoon');
  } else {
    return ('Good Evening');
  }

}


/* Write your implementation of displayMessage() */
function displayMessage(textcontent){
  document.getElementById("greeting").innerText=textcontent;
}
